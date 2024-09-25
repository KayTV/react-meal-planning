import { Meal, Unit } from './definitions';

const meals: Meal[] = [
  {
    index: 1,
    name: "Bimbimbop",
    description: "Korean dish with steak, mushrooms, peppers, bok choy, bimbimbop sauce, and rice",
    ingredients: [
      {
        name: "steak",
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
        name: 'Shiitake Mushrooms',
        quantity: 12,
        unit: Unit.OUNCE,
      },
      {
        name: 'Bell Peppers',
        quantity: 1,
        unit: Unit.WHOLE,
      },
      {
        name: 'Bok Choy',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
        name: 'Bimbimbop Sauce',
        quantity: 8,
        unit: Unit.OUNCE,
        recipe: [1],
      },
      {
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
        name: 'Meat',
        quantity: 1,
        unit: Unit.POUND,
      },
      {
        name: 'Onion',
        quantity: 1,
        unit: Unit.WHOLE,
      },
      {
        name: 'Bell Pepper',
        quantity: 2,
        unit: Unit.WHOLE,
      },
      {
        name: 'Lettuce',
        quantity: 0.5,
        unit: Unit.WHOLE,
      },
      {
        name: 'Mexican Cheese',
        quantity: 1,
        unit: Unit.AS_NEEDED,
      },
      {
        name: 'Sour Cream',
        quantity: 8,
        unit: Unit.OUNCE,
      },
      {
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
        name: 'Stir Fry Protein',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
        name: 'Stir Fry Vegetable',
        quantity: 16,
        unit: Unit.OUNCE,
      }
      {
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
        name: 'Empanada',
        quantity: 5,
        unit: Unit.WHOLE,
        recipe: [2],
      },
      {
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
        name: 'Chicken',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
        name: 'Potatos',
        quantity: 8,
        unit: Unit.OUNCE,
      },
      {
        name: 'Onion',
        quantity: 1,
        unit: Unit.WHOLE,
      },
      {
        name: 'Bell Pepper',
        quantity: 1,
        unit: Unit.WHOLE,
      },
      {
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
        name: 'Chicken Shawarma',
        quantity: 1,
        unit: Unit.WHOLE,
        recipe: [4],
      },
      {
        name: 'Garlic Sauce',
        quantity: 1,
        unit: Unit.WHOLE,
        recipe: [5, 6, 7],
      },
      {
        name: 'Grape Tomatoes',
        quantity: 8,
        unit: Unit.OUNCE,
      },
      {
        name: 'Cucumber',
        quantity: 1,
        unit: Unit.WHOLE,
      },
      {
        name: 'Pickles',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
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
        name: 'Butter Chicken',
        quantity: 1,
        unit: Unit.WHOLE,
        recipe: [8],
      },
      {
        name: 'Rice',
        quantity: 2,
        unit: Unit.CUP,
      },
      {
        name: 'Potatoes',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
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
        name: 'Potstickers',
        quantity: 12,
        unit: Unit.WHOLE,
      },
      {
        name: 'Broccoli',
        quantity: 1,
        unit: Unit.WHOLE,
      },
      {
        name: 'Bell Pepper',
        quantity: 1,
        unit: Unit.WHOLE,
      },
      {
        name: 'Corn',
        quantity: 4,
        unit: Unit.OUNCE,
      },
      {
        name: 'Peas',
        quantity: 4,
        unit: Unit.OUNCE,
      },
      {
        name: 'Rice',
        quantity: 1,
        unit: Unit.CUP,
      },
      {
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
        name: 'Perogies',
        quantity: 8,
        unit: Unit.WHOLE,
      },
      {
        name: 'Sausage',
        quantity: 3,
        unit: Unit.WHOLE,
      },
      {
        name: 'Sour Cream',
        quantity: 4,
        unit: Unit.OUNCE,
      },
      {
        name: 'Onion',
        quantity: 0.5,
        unit: Unit.WHOLE,
      },
      {
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
        name: 'Meatball',
        quantity: 8,
        unit: Unit.WHOLE,
      },
      {
        name: 'Pasta',
        quantity: 8,
        unit: Unit.OUNCE,
      },
      {
        name: 'Pasta Sauce',
        quantity: 8,
        unit: Unit.OUNCE,
      },
      {
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
        name: 'Meatball',
        quantity: 8,
        unit: Unit.WHOLE,
      },
      {
        name: 'Sub Rolls',
        quantity: 3,
        unit: Unit.WHOLE,
      },
      {
        name: 'Marinara Sauce',
        quantity: 8,
        unit: Unit.OUNCE,
      },
      {
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
        name: 'Chicken Tenderloins',
        quantity: 1,
        unit: Unit.POUND,
      },
      {
        name: 'Pesto',
        quantity: 1,
        unit: Unit.AS_NEEDED,
      },
      {
        name: 'Sub Rolls',
        quantity: 3,
        unit: Unit.WHOLE,
      },
      {
        name: 'Fresh Mozzarella Cheese',
        quantity: 8,
        unit: Unit.OUNCE,
      },
      {
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
        name: 'Ground Meat',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
        name: 'Tortillas',
        quantity: 8,
        unit: Unit.WHOLE,
      },
      {
        name: 'Mexican Cheese',
        quantity: 4,
        unit: Unit.OUNCE,
      },
      {
        name: 'Sour Cream',
        quantity: 4,
        unit: Unit.OUNCE,
      },
      {
        name: 'Lettuce',
        quantity: 8,
        unit: Unit.OUNCE,
      },
      {
        name: 'Bell Peppers',
        quantity: 1,
        unit: Unit.AS_NEEDED,
      },
      {
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
        name: 'Pizza Dough',
        quantity: 1,
        unit: Unit.WHOLE,
      },
      {
        name: 'Pizza Sauce',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
        name: 'Mozzarella Cheese',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
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
        name: 'Tortillas',
        quantity: 3,
        unit: Unit.WHOLE,
      },
      {
        name: 'Mexican Cheese',
        quantity: 8,
        unit: Unit.OUNCE,
      },
      {
        name: 'Sour Cream',
        quantity: 4,
        unit: Unit.OUNCE,
      },
      {
        name: 'Ground Meat',
        quantity: 8,
        unit: Unit.OUNCE,
      },
      {
        name: 'Bell Pepper',
        quantity: 1,
        unit: Unit.WHOLE,
      },
      {
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
        name: 'Chicken',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
        name: 'Roast Vegetable',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
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
        name: 'Chicken Nuggets',
        quantity: 8,
        unit: Unit.OUNCE,
      },
      {
        name: 'Potatoes',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
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
        name: 'Ravioli',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
        name: 'Marinara Sauce',
        quantity: 16,
        unit: Unit.OUNCE,
      },
      {
        name: 'Parmesan Cheese',
        quantity: 1,
        unit: Unit.AS_NEEDED,
      },
      {
        name: 'Salad',
        quantity: 1,
        unit: Unit.WHOLE,
      },
    ],
  },
];

module.exports = {
  meals,
};
