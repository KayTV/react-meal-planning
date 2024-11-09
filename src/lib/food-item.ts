import { Month } from "./time";

export interface FoodItem {
    id: number;
    name: string;
    category: FoodCategory;
    season?: Season;
    months?: Month[];
}

export enum FoodCategory {
    DAIRY = 'Dairy',
    PRODUCE = 'Produce',
    MEAT = 'Meat',
    GROCERY = 'Grocery',
    SNACK = 'Snack',
    BAKERY = 'Bakery',
    FROZEN = 'Frozen',
    SPICE = 'Spice',
    MISC = 'Misc',
}

export enum Season {
    FALL = 'Fall',
    WINTER = 'Winter',
    SPRING = 'Spring',
    SUMMER = 'Summer',
}

export const ALL_FOOD_ITEMS: FoodItem[] = [
    {
        id: 1,
        name: "Steak",
        category: FoodCategory.MEAT,
    },
    {
        id: 2,
        name: 'Shiitake Mushrooms',
        category: FoodCategory.PRODUCE,
        season: Season.FALL,
        months: [Month.MAY, Month.JUNE, Month.JULY, Month.AUGUST, Month.SEPTEMBER, Month.OCTOBER, Month.NOVEMBER],
    },
    {
        id: 3,
        name: 'Bell Pepper',
        category: FoodCategory.PRODUCE,
        season: Season.SUMMER,
        months: [Month.JULY, Month.AUGUST, Month.SEPTEMBER, Month.OCTOBER],
    },
    {
        id: 4,
        name: 'Bok Choy',
        category: FoodCategory.PRODUCE,
        season: Season.SUMMER,
        months: [Month.JUNE, Month.JULY, Month.AUGUST, Month.SEPTEMBER, Month.OCTOBER],
    },
    {
        id: 5,
        name: 'Jasmine Rice',
        category: FoodCategory.GROCERY,
    },
    {
        id: 6,
        name: 'Ground Beef',
        category: FoodCategory.MEAT,
    },
    {
        id: 7,
        name: 'Onion',
        category: FoodCategory.PRODUCE,
        season: Season.SUMMER,
        months: [Month.JULY, Month.AUGUST, Month.SEPTEMBER],
    },
    {
        id: 8,
        name: 'Iceberg Lettuce',
        category: FoodCategory.PRODUCE,
        season: Season.FALL,
        months: [Month.APRIL, Month.MAY, Month.JUNE, Month.SEPTEMBER, Month.OCTOBER, Month.NOVEMBER],
    },
    {
        id: 9,
        name: 'Mexican Cheese',
        category: FoodCategory.DAIRY,
    },
    {
        id: 10,
        name: 'Sour Cream',
        category: FoodCategory.DAIRY,
    },
    {
        id: 11,
        name: 'Chicken',
        category: FoodCategory.MEAT,
    },
    {
        id: 12,
        name: 'Frozen Corn',
        category: FoodCategory.FROZEN,
    },
    {
        id: 13,
        name: 'Frozen Peas',
        category: FoodCategory.FROZEN,
    },
    {
        id: 14,
        name: 'Frozen Broccoli',
        category: FoodCategory.FROZEN,
    },
    {
        id: 15,
        name: 'Asparagus',
        category: FoodCategory.PRODUCE,
        season: Season.SPRING,
        months: [Month.MAY, Month.JUNE],
    },
    {
        id: 16,
        name: 'Russet Potatoes',
        category: FoodCategory.PRODUCE,
        season: Season.FALL,
        months: [Month.SEPTEMBER, Month.OCTOBER],
    },
    {
        id: 17,
        name: 'Jar Indian Sauce',
        category: FoodCategory.GROCERY,
    },
    {
        id: 18,
        name: 'Grape Tomatoes',
        category: FoodCategory.PRODUCE,
        season: Season.SUMMER,
        months: [Month.MAY, Month.JUNE, Month.JULY, Month.AUGUST, Month.SEPTEMBER, Month.OCTOBER],
    },
    {
        id: 19,
        name: 'Cucumber',
        category: FoodCategory.PRODUCE,
        season: Season.SUMMER,
        months: [Month.JULY, Month.AUGUST, Month.SEPTEMBER, Month.OCTOBER],
    },
    {
        id: 20,
        name: 'Dill Pickles',
        category: FoodCategory.GROCERY,
    },
    {
        id: 21,
        name: 'Hummus',
        category: FoodCategory.DAIRY,
    },
    {
        id: 22,
        name: 'Basmati Rice',
        category: FoodCategory.GROCERY,
    },
    {
        id: 23,
        name: 'Mini Red Potatoes',
        category: FoodCategory.PRODUCE,
        season: Season.FALL,
        months: [Month.AUGUST, Month.SEPTEMBER, Month.OCTOBER],
    },
    {
        id: 24,
        name: 'Cauliflower',
        category: FoodCategory.PRODUCE,
        season: Season.FALL,
        months: [Month.AUGUST, Month.SEPTEMBER, Month.OCTOBER, Month.NOVEMBER],
    },
    {
        id: 25,
        name: 'Potstickers',
        category: FoodCategory.FROZEN,
    },
    {
        id: 26,
        name: 'Soy Sauce',
        category: FoodCategory.GROCERY,
    },
    {
        id: 27,
        name: 'Perogies',
        category: FoodCategory.FROZEN,
    },
    {
        id: 28,
        name: 'Sausage',
        category: FoodCategory.MEAT,
    },
    {
        id: 29,
        name: 'Meatball',
        category: FoodCategory.FROZEN,
    },
    {
        id: 30,
        name: 'Pasta',
        category: FoodCategory.GROCERY,
    },
    {
        id: 31,
        name: 'Marinara Sauce',
        category: FoodCategory.GROCERY,
    },
    {
        id: 32,
        name: 'Parmesan Cheese',
        category: FoodCategory.DAIRY,
    },
    {
        id: 33,
        name: 'Sub Rolls',
        category: FoodCategory.BAKERY,
    },
    {
        id: 34,
        name: 'Mozzarella Cheese',
        category: FoodCategory.DAIRY,
    },
    {
        id: 35,
        name: 'Pesto',
        category: FoodCategory.GROCERY,
    },
    {
        id: 36,
        name: 'Tortilla',
        category: FoodCategory.GROCERY,
    },
    {
        id: 37,
        name: 'Pizza Dough',
        category: FoodCategory.BAKERY,
    },
    {
        id: 38,
        name: 'Pizza Sauce',
        category: FoodCategory.GROCERY,
    },
    {
        id: 39,
        name: 'Pepperoni',
        category: FoodCategory.GROCERY,
    },
    {
        id: 40,
        name: 'Pepperoni',
        category: FoodCategory.GROCERY,
    },
    {
        id: 41,
        name: 'Salsa',
        category: FoodCategory.GROCERY,
    },
    {
        id: 42,
        name: 'Chicken Nuggets',
        category: FoodCategory.FROZEN,
    },
    {
        id: 43,
        name: 'Ravioli',
        category: FoodCategory.FROZEN,
    },
    {
        id: 44,
        name: 'Salad Mix',
        category: FoodCategory.PRODUCE,
    },
    {
        id: 45,
        name: 'Gochujang',
        category: FoodCategory.GROCERY,
    },
    {
        id: 46,
        name: 'Sesame Oil',
        category: FoodCategory.GROCERY,
    },
    {
        id: 47,
        name: 'White Sugar',
        category: FoodCategory.GROCERY,
    },
    {
        id: 48,
        name: 'Sesame Seeds',
        category: FoodCategory.GROCERY,
    },
    {
        id: 49,
        name: 'Apple Cider Vinegar',
        category: FoodCategory.GROCERY,
    },
    {
        id: 50,
        name: 'Garlic',
        category: FoodCategory.PRODUCE,
    },
    {
        id: 51,
        name: 'Empanada Wrappers',
        category: FoodCategory.FROZEN,
    },
    {
        id: 52,
        name: 'Tomato Sauce',
        category: FoodCategory.GROCERY,
    },
    {
        id: 53,
        name: 'Red Onion',
        category: FoodCategory.PRODUCE,
    },
    {
        id: 54,
        name: 'Dried Apricot',
        category: FoodCategory.GROCERY,
    },
    {
        id: 55,
        name: 'Sweet Smoked Paprika',
        category: FoodCategory.SPICE,
    },
    {
        id: 56,
        name: 'Ancho Chili Powder',
        category: FoodCategory.SPICE,
    },
    {
        id: 57,
        name: 'Cumin',
        category: FoodCategory.SPICE,
    },
    {
        id: 58,
        name: 'Coriander',
        category: FoodCategory.SPICE,
    },
    {
        id: 59,
        name: 'Garlic Powder',
        category: FoodCategory.SPICE,
    },
    {
        id: 60,
        name: 'Oregano',
        category: FoodCategory.SPICE,
    },
    {
        id: 61,
        name: 'Cocoa Powder',
        category: FoodCategory.SPICE,
    },
    {
        id: 62,
        name: 'Cinnamon',
        category: FoodCategory.SPICE,
    },
    {
        id: 63,
        name: 'Olive Oil',
        category: FoodCategory.GROCERY,
    },
    {
        id: 64,
        name: 'Lemon Juice',
        category: FoodCategory.GROCERY,
    },
    {
        id: 65,
        name: 'Turmeric',
        category: FoodCategory.SPICE,
    },
    {
        id: 66,
        name: 'Red Pepper Flakes',
        category: FoodCategory.SPICE,
    },
    {
        id: 67,
        name: 'Black Pepper',
        category: FoodCategory.SPICE,
    },
    {
        id: 68,
        name: 'Salt',
        category: FoodCategory.SPICE,
    },
    {
        id: 69,
        name: 'Boneless/Skinless Chicken Thighs',
        category: FoodCategory.MEAT,
    },
    {
        id: 70,
        name: 'Head of Garlic',
        category: FoodCategory.PRODUCE,
    },
    {
        id: 71,
        name: 'Tahini',
        category: FoodCategory.GROCERY,
    },
    {
        id: 72,
        name: 'Vegetable Oil',
        category: FoodCategory.GROCERY,
    },
    {
        id: 73,
        name: 'Egg White',
        category: FoodCategory.DAIRY,
    },
    {
        id: 74,
        name: 'Creme Fraisce',
        category: FoodCategory.DAIRY,
    },
    {
        id: 75,
        name: 'Lime',
        category: FoodCategory.PRODUCE,
    },
    {
        id: 76,
        name: 'Crushed Tomatoes',
        category: FoodCategory.GROCERY,
    },
    {
        id: 77,
        name: 'Pinto Beans',
        category: FoodCategory.GROCERY,
    },
    {
        id: 78,
        name: 'Monterey Jack Cheese',
        category: FoodCategory.DAIRY,
    },
    {
        id: 71,
        name: 'Tahini',
        category: FoodCategory.GROCERY,
    },
    {
        id: 71,
        name: 'Tahini',
        category: FoodCategory.GROCERY,
    },
    {
        id: 71,
        name: 'Tahini',
        category: FoodCategory.GROCERY,
    },
    {
        id: 71,
        name: 'Tahini',
        category: FoodCategory.GROCERY,
    },
    {
        id: 71,
        name: 'Tahini',
        category: FoodCategory.GROCERY,
    },
]