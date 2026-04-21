import { useState } from "react";
import { FRUITS } from "../data/meals";
import type { Fruit } from "../data/types";
import { Icon } from "./Icons";

interface FruitBasketProps {
  basket: Fruit[];
  onAdd: (f: Fruit) => void;
  onRemove: (name: string) => void;
  hidden?: boolean;
}

export function FruitBasket({ basket, onAdd, onRemove, hidden }: FruitBasketProps) {
  const [showAll, setShowAll] = useState(false);
  const [custom, setCustom] = useState("");
  const [customQty, setCustomQty] = useState("");

  if (hidden) return null;

  const addedNames = new Set(basket.map((f) => f.name));
  const suggestions = FRUITS.filter((f) => !addedNames.has(f.name));
  const visible = showAll ? suggestions : suggestions.slice(0, 8);

  const addCustom = () => {
    if (!custom.trim()) return;
    onAdd({
      name: custom.trim().toLowerCase(),
      qty: customQty.trim() || "some",
      cat: "produce",
    });
    setCustom("");
    setCustomQty("");
  };

  return (
    <div className="basket">
      <div className="basket-head">
        <div>
          <div className="basket-kicker">No. 03 · For the week</div>
          <div className="basket-title">The fruit basket</div>
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--text-mute)",
            letterSpacing: "0.08em",
          }}
        >
          {basket.length} {basket.length === 1 ? "fruit" : "fruits"}
        </div>
      </div>
      <div className="basket-fruits">
        {basket.length === 0 && (
          <div style={{ color: "var(--text-mute)", fontSize: 13 }}>
            An empty basket. Add what should stay stocked all week →
          </div>
        )}
        {basket.map((f, i) => (
          <span key={f.name + i} className="fruit-chip">
            {f.name}
            <span className="qty">{f.qty}</span>
            <button onClick={() => onRemove(f.name)} title="remove">
              <Icon.X />
            </button>
          </span>
        ))}
      </div>
      <div className="fruit-picker">
        {visible.map((f) => (
          <button
            key={f.name}
            onClick={() => onAdd({ name: f.name, qty: "1 bunch", cat: "produce" })}
          >
            + {f.name}
          </button>
        ))}
        {suggestions.length > 8 && (
          <button onClick={() => setShowAll((s) => !s)}>
            {showAll ? "less" : `+ ${suggestions.length - 8} more`}
          </button>
        )}
      </div>
      <div
        style={{
          marginTop: 10,
          display: "flex",
          gap: 6,
          paddingTop: 10,
          borderTop: "1px dashed var(--line)",
        }}
      >
        <input
          placeholder="other fruit…"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addCustom()}
          style={{
            flex: 2,
            padding: "6px 10px",
            border: "1px solid var(--line)",
            borderRadius: 6,
            fontSize: 12,
            background: "var(--surface-2)",
            color: "var(--text)",
          }}
        />
        <input
          placeholder="qty"
          value={customQty}
          onChange={(e) => setCustomQty(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addCustom()}
          style={{
            flex: 1,
            padding: "6px 10px",
            border: "1px solid var(--line)",
            borderRadius: 6,
            fontSize: 12,
            background: "var(--surface-2)",
            color: "var(--text)",
          }}
        />
        <button className="btn sm" onClick={addCustom}>
          Add
        </button>
      </div>
    </div>
  );
}
