import { useState } from "react";
import type { Meal } from "../data/types";
import { Icon } from "./Icons";

interface LibraryProps {
  meals: Meal[];
  onAdd: () => void;
  onEdit: (m: Meal) => void;
  onDelete: (id: string) => void;
  onDragStart: (id: string) => void;
}

export function Library({ meals, onAdd, onEdit, onDragStart }: LibraryProps) {
  const [q, setQ] = useState("");
  const filtered = meals.filter(
    (m) =>
      m.name.toLowerCase().includes(q.toLowerCase()) ||
      (m.tags || []).some((t) => t.toLowerCase().includes(q.toLowerCase())),
  );

  return (
    <div className="col col-library">
      <div className="col-header">
        <div className="col-kicker">No. 01 · Pantry</div>
        <h2 className="col-title">
          <span>The library</span>
          <button className="btn sm primary" onClick={onAdd}>
            <Icon.Plus /> New
          </button>
        </h2>
        <div className="col-sub">
          {meals.length} recipes · drag onto a day, or click-to-add
        </div>
      </div>
      <div className="library-toolbar">
        <div className="search">
          <Icon.Search />
          <input
            placeholder="Search recipes, tags…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
      </div>
      <div className="col-scroll">
        {filtered.map((m) => (
          <div
            key={m.id}
            className="meal-card"
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("mealId", m.id);
              e.dataTransfer.effectAllowed = "copy";
              onDragStart(m.id);
            }}
          >
            <h3 className="meal-name">{m.name}</h3>
            <div className="meal-meta">
              <span>
                <Icon.Clock /> {m.prep} min
              </span>
              <span>
                <Icon.People /> serves {m.servings}
              </span>
              <span>{m.ingredients.length} ingredients</span>
            </div>
            {m.tags?.length > 0 && (
              <div className="meal-tags">
                {m.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            )}
            <div className="card-actions">
              <button
                className="btn icon sm"
                title="Edit"
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit(m);
                }}
              >
                <Icon.Edit />
              </button>
            </div>
          </div>
        ))}
        {!filtered.length && (
          <div
            style={{
              padding: 40,
              textAlign: "center",
              color: "var(--text-mute)",
              fontSize: 13,
            }}
          >
            No recipes match &ldquo;{q}&rdquo;
          </div>
        )}
      </div>
    </div>
  );
}
