export type Meal = {
  index: number;
  name: string;
  description: string;
  picture?: string;
  ingredients: string[];
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
}
