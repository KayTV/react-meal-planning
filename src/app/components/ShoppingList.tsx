import { useMemo } from "react";
import type { Fruit, Meal, ShopState } from "../data/types";
import { Icon } from "./Icons";
import { buildShoppingList, CAT_LABEL } from "../lib/shopping";

interface ShoppingListProps {
  plan: Record<string, string>;
  meals: Meal[];
  basket: Fruit[];
  states: Record<string, ShopState>;
  onToggle: (id: string) => void;
  onTogglePantry: (id: string) => void;
  onClearChecked: () => void;
  onExport: () => void;
  onPrint: () => void;
}

export function ShoppingList({
  plan,
  meals,
  basket,
  states,
  onToggle,
  onTogglePantry,
  onClearChecked,
  onExport,
  onPrint,
}: ShoppingListProps) {
  const groups = useMemo(
    () => buildShoppingList(plan, meals, basket),
    [plan, meals, basket],
  );
  const totalItems = groups.reduce((n, g) => n + g.items.length, 0);
  const checkedCount = groups.reduce(
    (n, g) => n + g.items.filter((i) => states[i.id] === "checked").length,
    0,
  );
  const pantryCount = groups.reduce(
    (n, g) => n + g.items.filter((i) => states[i.id] === "pantry").length,
    0,
  );
  const needCount = totalItems - checkedCount - pantryCount;

  if (totalItems === 0) {
    return (
      <div className="col col-shopping">
        <div className="col-header">
          <div className="col-kicker">No. 04 · Gather</div>
          <h2 className="col-title">
            <span>The list</span>
          </h2>
          <div className="col-sub">Auto-built from your week</div>
        </div>
        <div className="shop-empty">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--line)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ margin: "0 auto" }}
          >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <h3>Nothing to buy yet</h3>
          <p>Plan some meals (or fruit) to see your list.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="col col-shopping">
      <div className="col-header">
        <div className="col-kicker">No. 04 · Gather</div>
        <h2 className="col-title">
          <span>The list</span>
        </h2>
        <div className="col-sub">Auto-built from your week · grouped by aisle</div>
      </div>
      <div className="shop-stats">
        <span>
          <b>{needCount}</b> to buy
        </span>
        <span>{checkedCount} in cart</span>
        <span>{pantryCount} already have</span>
      </div>
      <div className="col-scroll">
        {groups.map((g) => (
          <div className="shop-category" key={g.cat}>
            <div className="shop-cat-head">
              <span>{CAT_LABEL[g.cat]}</span>
              <span className="shop-cat-count">{g.items.length}</span>
            </div>
            {g.items.map((it) => {
              const s = states[it.id];
              return (
                <div
                  key={it.id}
                  className={`shop-item ${s === "checked" ? "checked" : ""} ${
                    s === "pantry" ? "pantry" : ""
                  }`}
                  onClick={() => onToggle(it.id)}
                >
                  <div className="cb">
                    {s === "pantry" ? (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                    ) : (
                      <Icon.Check />
                    )}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      minWidth: 0,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                      <span className="shop-item-name">{it.name}</span>
                      {it.qty && <span className="shop-item-qty">{it.qty}</span>}
                    </div>
                    <div className="shop-item-source">
                      {it.sources.slice(0, 2).join(" · ")}
                      {it.sources.length > 2 ? ` · +${it.sources.length - 2}` : ""}
                    </div>
                  </div>
                  <div className="row-actions">
                    <button
                      title="I already have this"
                      onClick={(e) => {
                        e.stopPropagation();
                        onTogglePantry(it.id);
                      }}
                    >
                      Have
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="shop-footer">
        <button className="btn sm ghost" onClick={onClearChecked}>
          Clear checked
        </button>
        <div style={{ flex: 1 }} />
        <button className="btn sm" onClick={onExport}>
          <Icon.Copy /> Copy
        </button>
        <button className="btn sm" onClick={onPrint}>
          <Icon.Print /> Print
        </button>
      </div>
    </div>
  );
}
