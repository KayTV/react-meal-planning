export type Category =
  | "produce"
  | "meat"
  | "dairy"
  | "bakery"
  | "pantry"
  | "frozen"
  | "other";

export interface Ingredient {
  name: string;
  qty: string;
  cat: Category;
}

export interface Meal {
  id: string;
  name: string;
  prep: number;
  servings: number;
  tags: string[];
  ingredients: Ingredient[];
}

export interface Fruit {
  name: string;
  qty?: string;
  cat: "produce";
}

export type Role = "owner" | "editor" | "viewer";

export interface HouseholdMember {
  id: string;
  name: string;
  initials: string;
  color: string;
  role: Role;
}

export type ShopState = "checked" | "pantry";

export interface WeekState {
  plan: Record<string, string>;
  notes: Record<string, string>;
  basket: Fruit[];
  shopStates: Record<string, ShopState>;
}

export interface Day {
  key: string;
  date: Date;
  dow: string;
  dowLong: string;
  dayNum: number;
  monthAbbr: string;
}

export type Theme = "dark" | "light";
export type Accent = "blue" | "lime" | "coral" | "white";

export interface Tweaks {
  theme: Theme;
  accent: Accent;
}
