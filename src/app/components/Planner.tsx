import { useState } from "react";
import type { DragEvent } from "react";
import type { Day, Fruit, HouseholdMember, Meal } from "../data/types";
import { Icon } from "./Icons";
import { FruitBasket } from "./FruitBasket";

interface DayRowProps {
  day: Day;
  meal: Meal | null;
  note: string | undefined;
  isToday: boolean;
  editBy: HouseholdMember | null;
  onDrop: (e: DragEvent<HTMLDivElement>) => void;
  onPickClick: () => void;
  onRemove: () => void;
  onNoteChange: (v: string) => void;
  onDragStartSlot?: (dayKey: string) => void;
}

function DayRow({
  day,
  meal,
  note,
  isToday,
  editBy,
  onDrop,
  onPickClick,
  onRemove,
  onNoteChange,
  onDragStartSlot,
}: DayRowProps) {
  const [dragOver, setDragOver] = useState(false);
  const canDragSlot =
    !!meal &&
    typeof window !== "undefined" &&
    !window.matchMedia("(max-width: 820px)").matches;

  return (
    <div className={`day-row ${isToday ? "today" : ""}`}>
      <div>
        <div className="day-label">
          {day.dayNum}
          <span className="dow">{day.dowLong}</span>
        </div>
        <div className="day-date">{day.monthAbbr}</div>
      </div>
      <div className="day-body">
        <div
          className={`dinner-slot ${meal ? "filled" : "empty"} ${dragOver ? "drag-over" : ""}`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
            e.dataTransfer.dropEffect = "copy";
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            onDrop(e);
          }}
          onClick={() => !meal && onPickClick()}
          draggable={canDragSlot}
          onDragStart={(e) => {
            if (!meal) return;
            e.dataTransfer.setData("fromDay", day.key);
            e.dataTransfer.setData("mealId", meal.id);
            e.dataTransfer.effectAllowed = "move";
            onDragStartSlot?.(day.key);
          }}
        >
          {meal ? (
            <>
              <div className="slot-content">
                <div className="slot-name">{meal.name}</div>
                <div className="slot-meta">
                  <span>{meal.prep} min</span>
                  <span>serves {meal.servings}</span>
                  {meal.ingredients.length > 0 && (
                    <span>{meal.ingredients.length} ingredients</span>
                  )}
                </div>
              </div>
              {editBy && (
                <div
                  className="slot-chef"
                  style={{ background: editBy.color }}
                  title={`added by ${editBy.name}`}
                >
                  {editBy.initials}
                </div>
              )}
              <div className="slot-actions">
                <button
                  className="btn icon sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onPickClick();
                  }}
                  title="Swap"
                >
                  <Icon.Edit />
                </button>
                <button
                  className="btn icon sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemove();
                  }}
                  title="Remove"
                >
                  <Icon.X />
                </button>
              </div>
            </>
          ) : (
            <span className="hint">Drop a meal here, or click to pick</span>
          )}
        </div>
        <div className="day-note">
          <span>Note</span>
          <input
            value={note || ""}
            onChange={(e) => onNoteChange(e.target.value)}
            placeholder="e.g. eating out, leftover night, potluck…"
          />
        </div>
      </div>
    </div>
  );
}

interface PlannerProps {
  weekStart: Date;
  days: Day[];
  plan: Record<string, string>;
  notes: Record<string, string>;
  meals: Meal[];
  household: HouseholdMember[];
  onSetPlan: (dayKey: string, mealId: string) => void;
  onRemoveMeal: (dayKey: string) => void;
  onNoteChange: (dayKey: string, v: string) => void;
  onMoveMeal: (fromDay: string, toDay: string, mealId: string) => void;
  onOpenPicker: (dayKey: string) => void;
  onAutoFill: () => void;
  onClearWeek: () => void;
  onPrevWeek: () => void;
  onNextWeek: () => void;
  onThisWeek: () => void;
  basket: Fruit[];
  onAddFruit: (f: Fruit) => void;
  onRemoveFruit: (name: string) => void;
  hideBasket: boolean;
}

export function Planner({
  weekStart,
  days,
  plan,
  notes,
  meals,
  household,
  onSetPlan,
  onRemoveMeal,
  onNoteChange,
  onMoveMeal,
  onOpenPicker,
  onAutoFill,
  onClearWeek,
  onPrevWeek,
  onNextWeek,
  onThisWeek,
  basket,
  onAddFruit,
  onRemoveFruit,
  hideBasket,
}: PlannerProps) {
  const end = new Date(weekStart);
  end.setDate(end.getDate() + 6);
  const fmt = (d: Date) => d.toLocaleDateString(undefined, { month: "long", day: "numeric" });
  const weekRange = `Week of ${fmt(weekStart)} — ${fmt(end)}`;
  const todayKey = new Date().toDateString();

  const onDropSlot = (dayKey: string) => (e: DragEvent<HTMLDivElement>) => {
    const mealId = e.dataTransfer.getData("mealId");
    const fromDay = e.dataTransfer.getData("fromDay");
    if (!mealId) return;
    if (fromDay && fromDay !== dayKey) {
      onMoveMeal(fromDay, dayKey, mealId);
    } else {
      onSetPlan(dayKey, mealId);
    }
  };

  return (
    <div className="col col-planner">
      <div className="col-header">
        <div className="col-kicker">No. 02 · The week</div>
        <h2 className="col-title">
          <span>This week</span>
        </h2>
        <div className="col-sub">
          Dinners, Monday through Sunday ·{" "}
          {Object.values(plan).filter(Boolean).length} of 7 planned
        </div>
      </div>
      <div className="planner-toolbar">
        <button className="btn icon sm" onClick={onPrevWeek} title="Previous week">
          <Icon.Chevron dir="left" />
        </button>
        <button className="btn sm" onClick={onThisWeek}>
          This week
        </button>
        <button className="btn icon sm" onClick={onNextWeek} title="Next week">
          <Icon.Chevron dir="right" />
        </button>
        <span className="week-range">{weekRange}</span>
        <button className="btn sm" onClick={onAutoFill}>
          <Icon.Wand /> Auto-fill
        </button>
        <button className="btn sm ghost desktop-only" onClick={onClearWeek}>
          Clear
        </button>
      </div>
      <div className="col-scroll">
        <div className="planner-scroll">
          {days.map((day) => {
            const mealId = plan[day.key];
            const meal = mealId ? meals.find((m) => m.id === mealId) || null : null;
            const editBy = meal
              ? household[day.date.getDate() % household.length]
              : null;
            return (
              <DayRow
                key={day.key}
                day={day}
                meal={meal}
                note={notes[day.key]}
                isToday={day.date.toDateString() === todayKey}
                editBy={editBy}
                onDrop={onDropSlot(day.key)}
                onPickClick={() => onOpenPicker(day.key)}
                onRemove={() => onRemoveMeal(day.key)}
                onNoteChange={(v) => onNoteChange(day.key, v)}
              />
            );
          })}

          <FruitBasket
            basket={basket}
            onAdd={onAddFruit}
            onRemove={onRemoveFruit}
            hidden={hideBasket}
          />
        </div>
      </div>
    </div>
  );
}
