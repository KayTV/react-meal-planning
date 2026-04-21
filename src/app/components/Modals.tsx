import { useState } from "react";
import type { Category, HouseholdMember, Meal } from "../data/types";
import { Icon } from "./Icons";

interface MealEditorProps {
  meal: Meal | null;
  onSave: (m: Meal) => void;
  onClose: () => void;
  onDelete: (id: string) => void;
}

export function MealEditor({ meal, onSave, onClose, onDelete }: MealEditorProps) {
  const isNew = !meal?.id;
  const [draft, setDraft] = useState<Meal>(
    () =>
      meal || {
        id: "m" + Date.now(),
        name: "",
        prep: 30,
        servings: 2,
        tags: [],
        ingredients: [{ name: "", qty: "", cat: "produce" }],
      },
  );

  const update = <K extends keyof Meal>(k: K, v: Meal[K]) =>
    setDraft((d) => ({ ...d, [k]: v }));

  const updateIng = (i: number, k: "name" | "qty" | "cat", v: string) =>
    setDraft((d) => {
      const ing = [...d.ingredients];
      ing[i] = { ...ing[i], [k]: v } as typeof ing[number];
      return { ...d, ingredients: ing };
    });

  const addIng = () =>
    setDraft((d) => ({
      ...d,
      ingredients: [...d.ingredients, { name: "", qty: "", cat: "produce" }],
    }));

  const removeIng = (i: number) =>
    setDraft((d) => ({
      ...d,
      ingredients: d.ingredients.filter((_, j) => j !== i),
    }));

  const save = () => {
    onSave({
      ...draft,
      name: draft.name.trim() || "Untitled meal",
      ingredients: draft.ingredients.filter((i) => i.name.trim()),
    });
  };

  return (
    <div className="modal-scrim" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <div>
            <div className="modal-kicker">{isNew ? "New recipe" : "Edit recipe"}</div>
            <h2 className="modal-title">
              {isNew ? "Add to library" : draft.name || "Untitled"}
            </h2>
          </div>
          <button className="btn ghost icon" onClick={onClose}>
            <Icon.X />
          </button>
        </div>
        <div className="modal-body">
          <div className="field">
            <label>Meal name</label>
            <input
              value={draft.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="e.g. Sheet-Pan Harissa Chicken"
              autoFocus
            />
          </div>
          <div className="field-row">
            <div className="field">
              <label>Prep time (min)</label>
              <input
                type="number"
                value={draft.prep}
                onChange={(e) => update("prep", +e.target.value)}
              />
            </div>
            <div className="field">
              <label>Servings</label>
              <input
                type="number"
                value={draft.servings}
                onChange={(e) => update("servings", +e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label>Tags (comma separated)</label>
            <input
              value={(draft.tags || []).join(", ")}
              onChange={(e) =>
                update(
                  "tags",
                  e.target.value.split(",").map((t) => t.trim()).filter(Boolean),
                )
              }
              placeholder="weeknight, vegetarian"
            />
          </div>
          <div className="field">
            <label>Ingredients</label>
            {draft.ingredients.map((ing, i) => (
              <div className="ing-row" key={i}>
                <input
                  placeholder="ingredient"
                  value={ing.name}
                  onChange={(e) => updateIng(i, "name", e.target.value)}
                />
                <input
                  placeholder="qty"
                  value={ing.qty}
                  onChange={(e) => updateIng(i, "qty", e.target.value)}
                />
                <select
                  value={ing.cat}
                  onChange={(e) => updateIng(i, "cat", e.target.value as Category)}
                >
                  <option value="produce">Produce</option>
                  <option value="meat">Meat & Fish</option>
                  <option value="dairy">Dairy & Eggs</option>
                  <option value="pantry">Pantry</option>
                  <option value="bakery">Bakery</option>
                  <option value="frozen">Frozen</option>
                  <option value="other">Other</option>
                </select>
                <button onClick={() => removeIng(i)} title="remove">
                  ×
                </button>
              </div>
            ))}
            <button className="btn sm ghost" onClick={addIng}>
              <Icon.Plus /> Add ingredient
            </button>
          </div>
        </div>
        <div className="modal-foot">
          {!isNew && (
            <button
              className="btn ghost"
              onClick={() => {
                onDelete(draft.id);
                onClose();
              }}
              style={{ color: "var(--danger)", marginRight: "auto" }}
            >
              <Icon.Trash /> Delete
            </button>
          )}
          <button className="btn" onClick={onClose}>
            Cancel
          </button>
          <button className="btn primary" onClick={save}>
            {isNew ? "Add to library" : "Save changes"}
          </button>
        </div>
      </div>
    </div>
  );
}

interface MealPickerProps {
  meals: Meal[];
  onPick: (m: Meal) => void;
  onClose: () => void;
}

export function MealPicker({ meals, onPick, onClose }: MealPickerProps) {
  const [q, setQ] = useState("");
  const filtered = meals.filter((m) =>
    m.name.toLowerCase().includes(q.toLowerCase()),
  );
  return (
    <div className="modal-scrim" onClick={onClose}>
      <div
        className="modal"
        style={{ maxWidth: 440, maxHeight: "70vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <div>
            <div className="modal-kicker">From the library</div>
            <h2 className="modal-title">Pick a meal</h2>
          </div>
          <button className="btn ghost icon" onClick={onClose}>
            <Icon.X />
          </button>
        </div>
        <div style={{ padding: "0 24px 12px" }}>
          <div className="search" style={{ flex: 1 }}>
            <Icon.Search />
            <input
              placeholder="Search…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              autoFocus
            />
          </div>
        </div>
        <div
          style={{
            maxHeight: 360,
            overflow: "auto",
            borderTop: "1px solid var(--line)",
          }}
        >
          {filtered.map((m) => (
            <div
              key={m.id}
              className="meal-card"
              onClick={() => {
                onPick(m);
                onClose();
              }}
              style={{ cursor: "pointer" }}
            >
              <h3 className="meal-name">{m.name}</h3>
              <div className="meal-meta">
                <span>
                  <Icon.Clock /> {m.prep} min
                </span>
                <span>
                  <Icon.People /> {m.servings}
                </span>
              </div>
            </div>
          ))}
          {!filtered.length && (
            <div
              style={{
                padding: 40,
                textAlign: "center",
                color: "var(--text-mute)",
              }}
            >
              No meals match &ldquo;{q}&rdquo;
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface ShareModalProps {
  household: HouseholdMember[];
  onClose: () => void;
  onToast: (msg: string) => void;
}

export function ShareModal({ household, onClose, onToast }: ShareModalProps) {
  const [email, setEmail] = useState("");
  const invite = () => {
    if (!email.trim()) return;
    onToast(`Invite sent to ${email}`);
    setEmail("");
  };
  const link = "https://meals.family/maya-jon/week-of-apr-20";

  return (
    <div className="modal-scrim" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <div>
            <div className="modal-kicker">Household</div>
            <h2 className="modal-title">Share this week</h2>
          </div>
          <button className="btn ghost icon" onClick={onClose}>
            <Icon.X />
          </button>
        </div>
        <div className="modal-body">
          <div className="field">
            <label>Shared link</label>
            <div style={{ display: "flex", gap: 6 }}>
              <input
                value={link}
                readOnly
                onFocus={(e) => e.currentTarget.select()}
              />
              <button
                className="btn"
                onClick={() => {
                  navigator.clipboard?.writeText(link);
                  onToast("Link copied");
                }}
              >
                <Icon.Copy />
              </button>
            </div>
          </div>
          <div className="field" style={{ marginBottom: 4 }}>
            <label>People with access</label>
            {household.map((p) => (
              <div className="member-row" key={p.id}>
                <div
                  className="avatar"
                  style={{ background: p.color, margin: 0 }}
                >
                  {p.initials}
                </div>
                <div className="member-info">
                  <div className="member-name">
                    {p.name}
                    {p.role === "owner" ? " (you)" : ""}
                  </div>
                  <div className="member-role">{p.role}</div>
                </div>
                {p.role !== "owner" && (
                  <button className="btn sm ghost">Remove</button>
                )}
              </div>
            ))}
          </div>
          <div className="invite-row">
            <input
              placeholder="Invite by email…"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && invite()}
            />
            <button className="btn primary" onClick={invite}>
              Send invite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
