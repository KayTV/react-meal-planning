import { Meal } from './definitions';
import { Unit } from './unit';

export const ALL_MEALS: Meal[] = [
  {
    index: 1,
    name: "Bimbimbop",
    description: "Korean dish with steak, mushrooms, peppers, bok choy, bimbimbop sauce, and rice",
    ingredients: [
      {
        id: 1,
        name: 'Steak',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
        id: 2,
        name: 'Shiitake Mushrooms',
        quantity: 12,
        unit: Unit.OUNCE,
      },
      {
        id: 3,
        name: 'Bell Peppers',
        quantity: 1,
        unit: Unit.WHOLE,
      },
      {
        id: 4,
        name: 'Bok Choy',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
        id: 5,
        name: 'Bimbimbop Sauce',
        quantity: 8,
        unit: Unit.OUNCE,
        recipe: [1],
      },
      {
        id: 6,
        name: 'Rice',
        quantity: 2,
        unit: Unit.CUP,
      },
    ]
  },
  {
    index: 2,
    name: "Burrito Bowls",
    description: "Mexican dish with meat, onions, peppers, lettuce, mexican cheese, sour cream, and rice",
    ingredients: [
      {
        id: 1,
        name: 'Meat',
        quantity: 1,
        unit: Unit.POUND,
      },
      {
        id: 2,
        name: 'Onion',
        quantity: 1,
        unit: Unit.WHOLE,
      },
      {
        id: 3,
        name: 'Bell Pepper',
        quantity: 2,
        unit: Unit.WHOLE,
      },
      {
        id: 4,
        name: 'Lettuce',
        quantity: 0.5,
        unit: Unit.WHOLE,
      },
      {
        id: 5,
        name: 'Mexican Cheese',
        quantity: 1,
        unit: Unit.AS_NEEDED,
      },
      {
        id: 6,
        name: 'Sour Cream',
        quantity: 8,
        unit: Unit.OUNCE,
      },
      {
        id: 7,
        name: 'Rice',
        quantity: 2,
        unit: Unit.CUP,
      },
    ],
  },
  {
    index: 3,
    name: "Simple Stirfry",
    description: "Really simple midweek meal",
    ingredients: [
      {
        id: 1,
        name: 'Stir Fry Protein',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
        id: 2,
        name: 'Stir Fry Vegetable',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
        id: 3,
        name: 'Rice',
        quantity: 1,
        unit: Unit.CUP,
      },
    ],
  },
  {
    index: 4,
    name: "Empanadas",
    description: "Mexican dish with frozen empanadas and asparagus",
    ingredients: [
      {
        id: 1,
        name: 'Empanada',
        quantity: 5,
        unit: Unit.WHOLE,
        recipe: [2],
      },
      {
        id: 2,
        name: 'Empanada Vegetable',
        quantity: 16,
        unit: Unit.OUNCE,
      },
    ]
  },
  {
    index: 5,
    name: "Indian One pan dish",
    description: "Indian dish with chicken, potatoes, carrots, onions, and indian sauce",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
        id: 2,
        name: 'Potatos',
        quantity: 8,
        unit: Unit.OUNCE,
      },
      {
        id: 3,
        name: 'Onion',
        quantity: 1,
        unit: Unit.WHOLE,
      },
      {
        id: 4,
        name: 'Bell Pepper',
        quantity: 1,
        unit: Unit.WHOLE,
      },
      {
        id: 5,
        name: 'Jar Indian Sauce',
        quantity: 16,
        unit: Unit.OUNCE,
      },
    ],
  },
  {
    index: 6,
    name: "Chicken Shawarma",
    description: "Middle Eastern dish with chicken, pita, garlic sauce, tomatoes, cucombers, and humus",
    ingredients: [
      {
        id: 1,
        name: 'Chicken Shawarma',
        quantity: 1,
        unit: Unit.WHOLE,
        recipe: [4],
      },
      {
        id: 2,
        name: 'Garlic Sauce',
        quantity: 1,
        unit: Unit.WHOLE,
        recipe: [5, 6, 7],
      },
      {
        id: 3,
        name: 'Grape Tomatoes',
        quantity: 8,
        unit: Unit.OUNCE,
      },
      {
        id: 4,
        name: 'Cucumber',
        quantity: 1,
        unit: Unit.WHOLE,
      },
      {
        id: 5,
        name: 'Pickles',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
        id: 6,
        name: 'Humus',
        quantity: 8,
        unit: Unit.OUNCE,
      },
    ],
  },
  {
    index: 7,
    name: "Butter Chicken",
    description: "Indian dish with chicken, butter chicken sauce, rice, potatoes, and cauliflower",
    ingredients: [
      {
        id: 1,
        name: 'Butter Chicken',
        quantity: 1,
        unit: Unit.WHOLE,
        recipe: [8],
      },
      {
        id: 2,
        name: 'Rice',
        quantity: 2,
        unit: Unit.CUP,
      },
      {
        id: 3,
        name: 'Potatoes',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
        id: 4,
        name: 'Cauliflower',
        quantity: 1,
        unit: Unit.WHOLE,
      },
    ],
  },
  {
    index: 8,
    name: "Potstickers",
    description: "Chinese dish with potstickers, brocolli, rice, and soy sauce. Can substitute veggies with a frozen veggie mix",
    ingredients: [
      {
        id: 1,
        name: 'Potstickers',
        quantity: 12,
        unit: Unit.WHOLE,
      },
      {
        id: 2,
        name: 'Broccoli',
        quantity: 1,
        unit: Unit.WHOLE,
      },
      {
        id: 3,
        name: 'Bell Pepper',
        quantity: 1,
        unit: Unit.WHOLE,
      },
      {
        id: 4,
        name: 'Corn',
        quantity: 4,
        unit: Unit.OUNCE,
      },
      {
        id: 5,
        name: 'Peas',
        quantity: 4,
        unit: Unit.OUNCE,
      },
      {
        id: 6,
        name: 'Rice',
        quantity: 1,
        unit: Unit.CUP,
      },
      {
        id: 7,
        name: 'Soy Sauce',
        quantity: 1,
        unit: Unit.AS_NEEDED,
      },
    ],
  },
  {
    index: 9,
    name: "Perogies and Sausage",
    description: "Ukrainian dish with perogies, sausage, sour cream, and onions",
    ingredients: [
      {
        id: 1,
        name: 'Perogies',
        quantity: 8,
        unit: Unit.WHOLE,
      },
      {
        id: 2,
        name: 'Sausage',
        quantity: 3,
        unit: Unit.WHOLE,
      },
      {
        id: 3,
        name: 'Sour Cream',
        quantity: 4,
        unit: Unit.OUNCE,
      },
      {
        id: 4,
        name: 'Onion',
        quantity: 0.5,
        unit: Unit.WHOLE,
      },
      {
        id: 5,
        name: 'Bell Pepper',
        quantity: 1,
        unit: Unit.WHOLE,
      },
    ],
  },
  {
    index: 10,
    name: "Pasta & meatballs",
    description: "Italian dish with meatballs, pasta, red sauce, and parmasan cheese",
    ingredients: [
      {
        id: 1,
        name: 'Meatball',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
        id: 2,
        name: 'Pasta',
        quantity: 8,
        unit: Unit.OUNCE,
      },
      {
        id: 3,
        name: 'Pasta Sauce',
        quantity: 8,
        unit: Unit.OUNCE,
      },
      {
        id: 4,
        name: 'Parmesan Cheese',
        quantity: 1,
        unit: Unit.AS_NEEDED,
      },
    ],
  },
  {
    index: 11,
    name: "Meatball Subs",
    description: "Italian sub with meatballs, sub buns, red sauce, and Mozerrela Cheese",
    ingredients: [
      {
        id: 1,
        name: 'Meatball',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
        id: 2,
        name: 'Sub Rolls',
        quantity: 3,
        unit: Unit.WHOLE,
      },
      {
        id: 3,
        name: 'Marinara Sauce',
        quantity: 8,
        unit: Unit.OUNCE,
      },
      {
        id: 4,
        name: 'Mozzarella Cheese',
        quantity: 4,
        unit: Unit.OUNCE,
      },
    ]
  },
  {
    index: 12,
    name: "Chicken Pesto Sandwich",
    description: "Chicken Pesto Sandwich with Mozzarella and a side of baked potato fries",
    ingredients: [
      {
        id: 1,
        name: 'Chicken Tenderloins',
        quantity: 1,
        unit: Unit.POUND,
      },
      {
        id: 2,
        name: 'Pesto',
        quantity: 1,
        unit: Unit.AS_NEEDED,
      },
      {
        id: 3,
        name: 'Sub Rolls',
        quantity: 3,
        unit: Unit.WHOLE,
      },
      {
        id: 4,
        name: 'Fresh Mozzarella Cheese',
        quantity: 8,
        unit: Unit.OUNCE,
      },
      {
        id: 5,
        name: 'Potatoes',
        quantity: 2,
        unit: Unit.WHOLE,
      },
    ],
  },
  {
    index: 13,
    name: "Rice & Bean Enchilladas",
    description: "Mexican dish with red sauce, tortillas, mexican cheese, sour cream",
    ingredients: [
      {
        id: 1,
        name: 'Rice & Bean Enchiladas',
        quantity: 1,
        unit: Unit.WHOLE,
        recipe: [9],
      },
    ],
  },
  {
    index: 14,
    name: "Tacos",
    description: "Mexican dish with meat, tortillas, mexican cheese, sour cream, and lettuce",
    ingredients: [
      {
        id: 1,
        name: 'Ground Meat',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
        id: 2,
        name: 'Tortillas',
        quantity: 8,
        unit: Unit.WHOLE,
      },
      {
        id: 3,
        name: 'Mexican Cheese',
        quantity: 4,
        unit: Unit.OUNCE,
      },
      {
        id: 4,
        name: 'Sour Cream',
        quantity: 4,
        unit: Unit.OUNCE,
      },
      {
        id: 5,
        name: 'Lettuce',
        quantity: 8,
        unit: Unit.OUNCE,
      },
      {
        id: 6,
        name: 'Bell Peppers',
        quantity: 1,
        unit: Unit.WHOLE,
      },
      {
        id: 7,
        name: 'Onions',
        quantity: 1,
        unit: Unit.WHOLE,
      },
    ],
  },
  {
    index: 15,
    name: "Pizza",
    description: "Italian dish with Pizza dough, Pizza sauce, mozerella cheese, pepperoni, and salad",
    ingredients: [
      {
        id: 1,
        name: 'Pizza Dough',
        quantity: 1,
        unit: Unit.WHOLE,
      },
      {
        id: 2,
        name: 'Pizza Sauce',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
        id: 3,
        name: 'Mozzarella Cheese',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
        id: 4,
        name: 'Pepperoni',
        quantity: 16,
        unit: Unit.OUNCE,
      },
    ],
  },
  {
    index: 16,
    name: "Quesadillas",
    description: "Mexican dish with tortillas, mexican cheese, sour cream, lettuce, and meat",
    ingredients: [
      {
        id: 1,
        name: 'Tortillas',
        quantity: 3,
        unit: Unit.WHOLE,
      },
      {
        id: 2,
        name: 'Mexican Cheese',
        quantity: 8,
        unit: Unit.OUNCE,
      },
      {
        id: 3,
        name: 'Sour Cream',
        quantity: 4,
        unit: Unit.OUNCE,
      },
      {
        id: 4,
        name: 'Ground Meat',
        quantity: 8,
        unit: Unit.OUNCE,
      },
      {
        id: 5,
        name: 'Bell Pepper',
        quantity: 1,
        unit: Unit.WHOLE,
      },
      {
        id: 6,
        name: 'Salsa',
        quantity: 1,
        unit: Unit.AS_NEEDED,
      },
    ],
  },
  {
    index: 17,
    name: "Chicken and Veggies",
    description: "Chicken dish with veggies and rice",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
        id: 2,
        name: 'Roast Vegetable',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
        id: 3,
        name: 'Rice',
        quantity: 1,
        unit: Unit.CUP,
      },
    ],
  },
  {
    index: 18,
    name: "chicken nuggets and fries",
    description: "Chicken nuggets with fries and seasonal vegetable",
    ingredients: [
      {
        id: 1,
        name: 'Chicken Nuggets',
        quantity: 8,
        unit: Unit.OUNCE,
      },
      {
        id: 2,
        name: 'Potatoes',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
        id: 3,
        name: 'Seasonal Vegetable',
        quantity: 16,
        unit: Unit.OUNCE,
      },
    ],
  },
  {
    index: 19,
    name: "Ravioli",
    description: "Italian dish with Ravioli, red sauce, parmasan cheese, and salad",
    ingredients: [
      {
        id: 1,
        name: 'Ravioli',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
        id: 2,
        name: 'Marinara Sauce',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
        id: 3,
        name: 'Parmesan Cheese',
        quantity: 1,
        unit: Unit.AS_NEEDED,
      },
      {
        id: 4,
        name: 'Salad',
        quantity: 1,
        unit: Unit.WHOLE,
      },
    ],
  },
];
