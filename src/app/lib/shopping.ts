import type { Category, Fruit, Meal } from "../data/types";

export const CAT_ORDER: Category[] = [
  "produce",
  "meat",
  "dairy",
  "bakery",
  "pantry",
  "frozen",
  "other",
];

export const CAT_LABEL: Record<Category, string> = {
  produce: "Produce & fruit",
  meat: "Meat & fish",
  dairy: "Dairy & eggs",
  bakery: "Bakery",
  pantry: "Pantry & dry",
  frozen: "Frozen",
  other: "Other",
};

export interface ShopItem {
  id: string;
  name: string;
  qty: string;
  sources: string[];
}

export interface ShopGroup {
  cat: Category;
  items: ShopItem[];
}

interface AggregatedItem {
  name: string;
  cat: Category;
  qtys: string[];
  sources: Set<string>;
}

export function buildShoppingList(
  plan: Record<string, string>,
  meals: Meal[],
  basket: Fruit[],
): ShopGroup[] {
  const agg: Record<string, AggregatedItem> = {};

  Object.entries(plan).forEach(([, mealId]) => {
    if (!mealId) return;
    const meal = meals.find((m) => m.id === mealId);
    if (!meal) return;
    meal.ingredients.forEach((ing) => {
      const cat = (ing.cat || "other") as Category;
      const key = cat + "|" + ing.name.toLowerCase();
      if (!agg[key]) agg[key] = { name: ing.name, cat, qtys: [], sources: new Set() };
      if (ing.qty) agg[key].qtys.push(ing.qty);
      agg[key].sources.add(meal.name);
    });
  });

  basket.forEach((f) => {
    const key = "produce|" + f.name.toLowerCase();
    if (!agg[key]) agg[key] = { name: f.name, cat: "produce", qtys: [], sources: new Set() };
    if (f.qty) agg[key].qtys.push(f.qty);
    agg[key].sources.add("fruit basket");
  });

  const byCat: Partial<Record<Category, ShopItem[]>> = {};
  Object.entries(agg).forEach(([key, item]) => {
    const c = item.cat;
    if (!byCat[c]) byCat[c] = [];
    byCat[c]!.push({
      id: key,
      name: item.name,
      qty: item.qtys.join(" + "),
      sources: Array.from(item.sources),
    });
  });

  Object.keys(byCat).forEach((c) =>
    byCat[c as Category]!.sort((a, b) => a.name.localeCompare(b.name)),
  );

  return CAT_ORDER.filter((c) => byCat[c]?.length).map((c) => ({
    cat: c,
    items: byCat[c]!,
  }));
}
