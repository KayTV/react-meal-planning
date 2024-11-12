import { Unit } from "./unit";

export type DataDisplay = {
  index: string;
  header: string;
  body: string;
};

export type Ingredient = {
  id: number;
  name: string;
  quantity: number;
  unit: Unit;
  recipe?: number[];
  itemId?: number;
};