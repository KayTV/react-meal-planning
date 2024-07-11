export type Meal = {
  index: number;
  name: string;
  picture?: string;
  ingrediants?: string;
  directions?: string[];
  day?: string;
};

export type DataDisplay = {
  index: string;
  header: string;
  body: string;
}
