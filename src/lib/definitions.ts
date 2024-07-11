export type Meal = {
  index: number;
  name: string;
  picture?: string;
  ingrediants?: string;
  directions?: string[];
  day?: string;
};

export type DataDisplay = {
  index: number;
  header: string;
  body: string;
}
