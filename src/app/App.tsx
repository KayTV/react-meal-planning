"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type {
  Accent,
  Day,
  Fruit,
  Meal,
  ShopState,
  Theme,
  Tweaks,
  WeekState,
} from "./data/types";
import { HOUSEHOLD, SEED_MEALS } from "./data/meals";
import { Icon } from "./components/Icons";
import { Library } from "./components/Library";
import { Planner } from "./components/Planner";
import { FruitBasket } from "./components/FruitBasket";
import { MealEditor, MealPicker, ShareModal } from "./components/Modals";
import { ShoppingList } from "./components/ShoppingList";
import { buildShoppingList, CAT_LABEL } from "./lib/shopping";

const LS_KEY = "mealplanner.v1";

const TWEAK_DEFAULTS: Tweaks = { theme: "dark", accent: "blue" };

interface PersistedState {
  meals: Meal[];
  weekStartISO: string;
  weeks: Record<string, WeekState>;
  tweaks: Tweaks;
}

function startOfWeek(d: Date = new Date()): Date {
  const date = new Date(d);
  const day = date.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  date.setDate(date.getDate() + diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

function keyForDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function weekKey(weekStart: Date): string {
  return "w_" + keyForDate(weekStart);
}

function buildDays(weekStart: Date): Day[] {
  const dowShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dowLong = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const out: Day[] = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(weekStart);
    d.setDate(weekStart.getDate() + i);
    out.push({
      key: keyForDate(d),
      date: d,
      dow: dowShort[i],
      dowLong: dowLong[i],
      dayNum: d.getDate(),
      monthAbbr: months[d.getMonth()].toUpperCase(),
    });
  }
  return out;
}

function loadState(): PersistedState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) return JSON.parse(raw) as PersistedState;
  } catch {}
  return null;
}

function saveState(s: PersistedState): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(s));
  } catch {}
}

const emptyWeek: WeekState = { plan: {}, notes: {}, basket: [], shopStates: {} };

export function App() {
  const [hydrated, setHydrated] = useState(false);
  const [meals, setMeals] = useState<Meal[]>(SEED_MEALS);
  const [weekStart, setWeekStart] = useState<Date>(() => startOfWeek());
  const [weeks, setWeeks] = useState<Record<string, WeekState>>({});
  const [editingMeal, setEditingMeal] = useState<Meal | {} | null>(null);
  const [pickingFor, setPickingFor] = useState<string | null>(null);
  const [showShare, setShowShare] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [showTweaks, setShowTweaks] = useState(false);
  const [tweaks, setTweaks] = useState<Tweaks>(TWEAK_DEFAULTS);
  const [mobileTab, setMobileTab] = useState<"library" | "planner" | "basket" | "shopping">("planner");
  const [isMobile, setIsMobile] = useState(false);

  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load persisted state after mount (avoids SSR/hydration mismatch)
  useEffect(() => {
    const saved = loadState();
    if (saved) {
      if (saved.meals) setMeals(saved.meals);
      if (saved.weekStartISO) setWeekStart(new Date(saved.weekStartISO));
      if (saved.weeks) setWeeks(saved.weeks);
      if (saved.tweaks) setTweaks(saved.tweaks);
    }
    setIsMobile(window.matchMedia("(max-width: 820px)").matches);
    setHydrated(true);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 820px)");
    const onChange = () => setIsMobile(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  // Persist
  useEffect(() => {
    if (!hydrated) return;
    saveState({
      meals,
      weekStartISO: weekStart.toISOString(),
      weeks,
      tweaks,
    });
  }, [meals, weekStart, weeks, tweaks, hydrated]);

  // Tweaks edit-mode postMessage protocol (kept from design)
  useEffect(() => {
    const handler = (ev: MessageEvent) => {
      if (ev.data?.type === "__activate_edit_mode") setShowTweaks(true);
      if (ev.data?.type === "__deactivate_edit_mode") setShowTweaks(false);
    };
    window.addEventListener("message", handler);
    window.parent?.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", handler);
  }, []);

  const showToast = (msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2200);
  };

  const days = useMemo(() => buildDays(weekStart), [weekStart]);
  const wk = weekKey(weekStart);
  const current: WeekState = weeks[wk] || emptyWeek;

  const updateWeek = (fn: (w: WeekState) => WeekState) => {
    setWeeks((ws) => {
      const cur = ws[wk] || emptyWeek;
      return { ...ws, [wk]: fn(cur) };
    });
  };

  const setPlan = (dayKey: string, mealId: string) =>
    updateWeek((c) => ({ ...c, plan: { ...c.plan, [dayKey]: mealId } }));

  const removeMeal = (dayKey: string) =>
    updateWeek((c) => {
      const p = { ...c.plan };
      delete p[dayKey];
      return { ...c, plan: p };
    });

  const moveMeal = (fromDay: string, toDay: string, mealId: string) =>
    updateWeek((c) => {
      const p = { ...c.plan };
      const swap = p[toDay];
      p[toDay] = mealId;
      if (swap) p[fromDay] = swap;
      else delete p[fromDay];
      return { ...c, plan: p };
    });

  const setNote = (dayKey: string, val: string) =>
    updateWeek((c) => ({ ...c, notes: { ...c.notes, [dayKey]: val } }));

  const autoFill = () => {
    updateWeek((c) => {
      const plan = { ...c.plan };
      const used = new Set(Object.values(plan));
      const pool = meals.filter((m) => !used.has(m.id));
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
      let pi = 0;
      days.forEach((d) => {
        if (!plan[d.key] && pool[pi]) {
          plan[d.key] = pool[pi].id;
          pi++;
        }
      });
      return { ...c, plan };
    });
    showToast("Week filled with a random mix");
  };

  const clearWeek = () => {
    if (!confirm("Clear all meals and notes for this week?")) return;
    updateWeek(() => ({ plan: {}, notes: {}, basket: [], shopStates: {} }));
    showToast("Week cleared");
  };

  const addFruit = (f: Fruit) =>
    updateWeek((c) => {
      if (c.basket.some((x) => x.name === f.name)) return c;
      return { ...c, basket: [...c.basket, f] };
    });

  const removeFruit = (name: string) =>
    updateWeek((c) => ({ ...c, basket: c.basket.filter((f) => f.name !== name) }));

  const saveMeal = (m: Meal) => {
    setMeals((ms) => {
      const exists = ms.some((x) => x.id === m.id);
      return exists ? ms.map((x) => (x.id === m.id ? m : x)) : [m, ...ms];
    });
    setEditingMeal(null);
    showToast(`Saved "${m.name}"`);
  };

  const deleteMeal = (id: string) =>
    setMeals((ms) => ms.filter((m) => m.id !== id));

  const toggleShop = (id: string) =>
    updateWeek((c) => {
      const st: Record<string, ShopState> = { ...c.shopStates };
      if (st[id] === "checked") delete st[id];
      else st[id] = "checked";
      return { ...c, shopStates: st };
    });

  const togglePantry = (id: string) =>
    updateWeek((c) => {
      const st: Record<string, ShopState> = { ...c.shopStates };
      if (st[id] === "pantry") delete st[id];
      else st[id] = "pantry";
      return { ...c, shopStates: st };
    });

  const clearChecked = () =>
    updateWeek((c) => {
      const st: Record<string, ShopState> = {};
      Object.entries(c.shopStates).forEach(([k, v]) => {
        if (v !== "checked") st[k] = v;
      });
      return { ...c, shopStates: st };
    });

  const exportList = () => {
    const groups = buildShoppingList(current.plan, meals, current.basket);
    const lines = [
      `Shopping list — week of ${weekStart.toLocaleDateString()}`,
      "",
    ];
    groups.forEach((g) => {
      lines.push(CAT_LABEL[g.cat].toUpperCase());
      g.items.forEach((it) => {
        const st = current.shopStates[it.id];
        if (st === "pantry") return;
        const mark = st === "checked" ? "[x]" : "[ ]";
        lines.push(`  ${mark} ${it.name}${it.qty ? `  —  ${it.qty}` : ""}`);
      });
      lines.push("");
    });
    const txt = lines.join("\n");
    navigator.clipboard?.writeText(txt);
    showToast("Shopping list copied to clipboard");
  };

  const prevWeek = () => {
    const d = new Date(weekStart);
    d.setDate(d.getDate() - 7);
    setWeekStart(d);
  };
  const nextWeek = () => {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + 7);
    setWeekStart(d);
  };
  const thisWeek = () => setWeekStart(startOfWeek());

  const applyTweak = <K extends keyof Tweaks>(k: K, v: Tweaks[K]) => {
    const next = { ...tweaks, [k]: v };
    setTweaks(next);
    window.parent?.postMessage(
      { type: "__edit_mode_set_keys", edits: { [k]: v } },
      "*",
    );
  };

  // Apply theme + accent
  useEffect(() => {
    const theme: Theme = tweaks.theme || "dark";
    document.documentElement.setAttribute("data-theme", theme);
    const map: Record<Accent, { a: string; a6: string; a7: string; dim: string }> = {
      blue:  { a: "#7CC0FF", a6: "#5FA8EE", a7: "#3E8ED0", dim: "rgba(124,192,255,0.14)" },
      lime:  { a: "#C8E36B", a6: "#B5D450", a7: "#9BC133", dim: "rgba(200,227,107,0.14)" },
      coral: { a: "#FF9478", a6: "#F07A5C", a7: "#D96146", dim: "rgba(255,148,120,0.14)" },
      white: { a: "#F2F4F7", a6: "#D9DCE2", a7: "#B8BCC5", dim: "rgba(255,255,255,0.10)" },
    };
    const accent: Accent = tweaks.accent || "blue";
    const p = map[accent];
    const fg = accent === "white" && theme === "light" ? "#15181E" : "#0B0C0F";
    const root = document.documentElement.style;
    root.setProperty("--accent", p.a);
    root.setProperty("--accent-600", p.a6);
    root.setProperty("--accent-700", p.a7);
    root.setProperty("--accent-dim", p.dim);
    root.setProperty("--accent-fg", fg);
  }, [tweaks.accent, tweaks.theme]);

  const mobileTabClass = isMobile ? `mobile-tab-${mobileTab}` : "";
  const plannedCount = Object.values(current.plan).filter(Boolean).length;
  const basketCount = current.basket.length;
  const shopGroups = useMemo(
    () => buildShoppingList(current.plan, meals, current.basket),
    [current.plan, current.basket, meals],
  );
  const shopRemaining = shopGroups.reduce(
    (n, g) =>
      n +
      g.items.filter(
        (i) =>
          current.shopStates[i.id] !== "checked" &&
          current.shopStates[i.id] !== "pantry",
      ).length,
    0,
  );

  const issueWeekNum = Math.ceil(
    ((weekStart.getTime() - new Date(weekStart.getFullYear(), 0, 1).getTime()) /
      86400000 +
      1) /
      7,
  );

  const editing = editingMeal as Meal | null | {};
  const editingMealOrNull: Meal | null =
    editing && (editing as Meal).id ? (editing as Meal) : null;

  return (
    <div className={`app ${mobileTabClass}`}>
      <header className="masthead">
        <div className="masthead-left">
          <div className="wordmark">
            <span className="mark">M</span>Mise
          </div>
          <div className="issue-line">
            Week {issueWeekNum} · {weekStart.getFullYear()}
          </div>
        </div>
        <div className="masthead-right">
          <div className="avatars">
            {HOUSEHOLD.map((p, i) => (
              <div
                key={p.id}
                className={`avatar ${i === 0 ? "self" : ""}`}
                style={{ background: p.color }}
                title={p.name}
              >
                {p.initials}
              </div>
            ))}
          </div>
          <button
            className="btn icon"
            onClick={() =>
              applyTweak("theme", tweaks.theme === "light" ? "dark" : "light")
            }
            title={tweaks.theme === "light" ? "Switch to dark" : "Switch to light"}
            aria-label="Toggle theme"
          >
            {tweaks.theme === "light" ? <Icon.Moon /> : <Icon.Sun />}
          </button>
          <button className="btn" onClick={() => setShowShare(true)}>
            <Icon.Share /> Share
          </button>
        </div>
      </header>

      <main className="workspace">
        <Library
          meals={meals}
          onAdd={() => setEditingMeal({})}
          onEdit={(m) => setEditingMeal(m)}
          onDelete={deleteMeal}
          onDragStart={() => {}}
        />
        <Planner
          weekStart={weekStart}
          days={days}
          plan={current.plan}
          notes={current.notes}
          meals={meals}
          household={HOUSEHOLD}
          onSetPlan={setPlan}
          onRemoveMeal={removeMeal}
          onNoteChange={setNote}
          onMoveMeal={moveMeal}
          onOpenPicker={(dayKey) => setPickingFor(dayKey)}
          onAutoFill={autoFill}
          onClearWeek={clearWeek}
          onPrevWeek={prevWeek}
          onNextWeek={nextWeek}
          onThisWeek={thisWeek}
          basket={current.basket}
          onAddFruit={addFruit}
          onRemoveFruit={removeFruit}
          hideBasket={isMobile}
        />
        {isMobile && (
          <div className="col mobile-basket-view">
            <div className="col-header">
              <div className="col-kicker">No. 03 · For the week</div>
              <h2 className="col-title">
                <span>The fruit basket</span>
              </h2>
              <div className="col-sub">Add what should be around all week</div>
            </div>
            <div className="basket-wrap">
              <FruitBasket
                basket={current.basket}
                onAdd={addFruit}
                onRemove={removeFruit}
              />
            </div>
          </div>
        )}
        <ShoppingList
          plan={current.plan}
          meals={meals}
          basket={current.basket}
          states={current.shopStates}
          onToggle={toggleShop}
          onTogglePantry={togglePantry}
          onClearChecked={clearChecked}
          onExport={exportList}
          onPrint={() => window.print()}
        />
      </main>

      {editingMeal !== null && (
        <MealEditor
          meal={editingMealOrNull}
          onSave={saveMeal}
          onDelete={deleteMeal}
          onClose={() => setEditingMeal(null)}
        />
      )}
      {pickingFor && (
        <MealPicker
          meals={meals}
          onPick={(m) => setPlan(pickingFor, m.id)}
          onClose={() => setPickingFor(null)}
        />
      )}
      {showShare && (
        <ShareModal
          household={HOUSEHOLD}
          onClose={() => setShowShare(false)}
          onToast={showToast}
        />
      )}
      {toast && (
        <div className="toast">
          <Icon.Check /> {toast}
        </div>
      )}

      {isMobile && (
        <nav className="tabbar">
          <button
            className={`tab-btn ${mobileTab === "library" ? "active" : ""}`}
            onClick={() => setMobileTab("library")}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            Library
          </button>
          <button
            className={`tab-btn ${mobileTab === "planner" ? "active" : ""}`}
            onClick={() => setMobileTab("planner")}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            Week
            {plannedCount > 0 && <span className="tab-count">{plannedCount}</span>}
          </button>
          <button
            className={`tab-btn ${mobileTab === "basket" ? "active" : ""}`}
            onClick={() => setMobileTab("basket")}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m5 11 1-6h12l1 6" />
              <path d="M3 11h18l-1.5 9a2 2 0 0 1-2 1.7H6.5a2 2 0 0 1-2-1.7Z" />
              <path d="M10 15v3M14 15v3" />
            </svg>
            Basket
            {basketCount > 0 && <span className="tab-count">{basketCount}</span>}
          </button>
          <button
            className={`tab-btn ${mobileTab === "shopping" ? "active" : ""}`}
            onClick={() => setMobileTab("shopping")}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            List
            {shopRemaining > 0 && (
              <span className="tab-count">{shopRemaining}</span>
            )}
          </button>
        </nav>
      )}

      {showTweaks && (
        <div className="tweaks">
          <h4>Tweaks</h4>
          <div className="tweak-row">
            <label>Theme</label>
            <div className="seg">
              <button
                className={(tweaks.theme || "dark") === "dark" ? "active" : ""}
                onClick={() => applyTweak("theme", "dark")}
              >
                Dark
              </button>
              <button
                className={tweaks.theme === "light" ? "active" : ""}
                onClick={() => applyTweak("theme", "light")}
              >
                Light
              </button>
            </div>
          </div>
          <div className="tweak-row">
            <label>Accent</label>
            <div className="swatches">
              {(
                [
                  ["blue", "#7CC0FF"],
                  ["lime", "#C8E36B"],
                  ["coral", "#FF9478"],
                  ["white", "#F2F4F7"],
                ] as const
              ).map(([k, c]) => (
                <div
                  key={k}
                  className={`swatch ${(tweaks.accent || "blue") === k ? "active" : ""}`}
                  style={{ background: c }}
                  onClick={() => applyTweak("accent", k)}
                  title={k}
                />
              ))}
            </div>
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              color: "var(--text-mute)",
              letterSpacing: "0.1em",
              paddingTop: 8,
              borderTop: "1px dashed var(--line)",
            }}
          >
            Saved to this project
          </div>
        </div>
      )}
    </div>
  );
}
