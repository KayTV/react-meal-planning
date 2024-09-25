export type Meal = {
  index: number;
  name: string;
  description: string;
  picture?: string;
  ingredients: Ingredient[];
  directions?: string[];
  subRecipes?: SubRecipe[];
  day?: string;
};

export type SubRecipe = {
  name: string;
  description: string;
  picture?: string;
  ingrediants: string[];
  directions?: string[];
};

export type DataDisplay = {
  index: string;
  header: string;
  body: string;
};

export type Ingredient = {
  name: string;
  quantity: number;
  unit: Unit;
  recipe?: number[];
};

export type Recipe = {
  id: number;
  name: string;
  description: string;
  ingredients: Ingredient[];
  directions: string[];
};

export enum Unit {
  TABLESPOON = 'tbsp',
  TEASPOON = 'tsp',
  CUP = 'cup',
  OUNCE = 'oz',
  POUND = 'lb',
  WHOLE = 'whole',
  AS_NEEDED = 'as needed',
}