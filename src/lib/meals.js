const meals = [
  {
    index: 1,
    name: "Bimbimbop",
    description: "Korean dish with steak, mushrooms, peppers, bok choy, bimbimbop sauce, and rice",
    ingredients: [
      "steak",
      "shiitake mushrooms",
      "peppers",
      "bok choy",
      "bimbimbop sauce",
      "rice"
    ],
    subRecipes: [
      {
        index: 1,
        name: "Bimbimbop Sauce",
        description: "Korean sauce with soy sauce, sesame oil, sugar, garlic, and ginger",
        ingrediants: [
          "soy sauce",
          "sesame oil",
          "sugar",
          "garlic",
          "ginger"
        ]
      }
    ]
  },
  {
    index: 2,
    name: "Burrito Bowls",
    description: "Mexican dish with meat, onions, peppers, lettuce, mexican cheese, sour cream, and rice",
    ingredients: [
      "meat",
      "onions",
      "peppers",
      "lettuce",
      "mexican cheese",
      "sour cream",
      "rice"
    ]
  },
  {
    index: 3,
    name: "Stirfry",
    description: "Chinese dish with chicken, mushrooms, peppers, onions, brocolli, and rice",
    ingredients: [
      "chicken",
      "mushrooms",
      "peppers",
      "onions",
      "brocolli",
      "rice"
    ]
  },
  {
    index: 4,
    name: "Empanadas",
    description: "Mexican dish with frozen empanadas and asparagus",
    ingredients: [
      "Frozen Empanadas",
      "Asparagus"
    ]
  },
  {
    index: 5,
    name: "Indian One pan dish",
    description: "Indian dish with chicken, potatoes, carrots, onions, and indian sauce",
    ingredients: [
      "Chicken",
      "Potatoes",
      "Carrots",
      "Onions",
      "Indian sauce"
    ]
  },
  {
    index: 6,
    name: "Schwarma",
    description: "Greek dish with chicken, pita, garlic sauce, tomatoes, cucombers, and humus",
    ingredients: [
      "4 lb boneless/skinless chicken thighs",
      "1/2 cup olive oil",
      "1/4 cup lemon juice",
      "2 tsp smoked paprika",
      "1/2 tsp turmeric",
      "2 tsp cumin",
      "1/2 tsp red pepper flakes",
      "4 cloves garlic",
      "2 tsp black pepper",
      "1 tsp salt",
      "1 onion",
      "Garlic sauce (p 257)",
      "Tomatoes",
      "Cucombers",
      "Pickles",
      "Humus"
    ]
  },
  {
    index: 7,
    name: "Butter Chicken",
    description: "Indian dish with chicken, butter chicken sauce, rice, potatoes, and cauliflower",
    ingredients: [
      "1-2 lb Chicken",
      "14oz Diced Tomatoes",
      "6 Cloves Garlic",
      "1 Tbsp Ginger",
      "1 tsp turmeric",
      "1 tsp cayenne pepper",
      "1 tsp paprika",
      "2 tsp Garam Masala",
      "1 tsp ground cumin",
      "1 tsp salt",
      "4 oz butter",
      "4 oz heavy cream / full-fat coconut milk",
      "1/2 cup fresh cilantro",
      "Rice",
      "Potatoes",
      "Cauliflower"
    ]
  },
  {
    index: 8,
    name: "Potstickers",
    description: "Chinese dish with potstickers, brocolli, rice, and soy sauce. Can substitute veggies with a frozen veggie mix",
    ingredients: [
      "Potstickers",
      "Brocolli",
      "Bell Pepper",
      "Onion",
      "Corn",
      "Rice",
      "Soy Sauce"
    ]
  },
  {
    index: 9,
    name: "Perogies and Sausage",
    description: "Ukrainian dish with perogies, sausage, sour cream, and onions",
    ingredients: [
      "Perogies",
      "Sausage",
      "Sour Cream",
      "Onions",
      "Bell Peppers"
    ]
  },
  {
    index: 10,
    name: "Pasta & meatballs",
    description: "Italian dish with meatballs, pasta, red sauce, and parmasan cheese",
    ingredients: [
      "meatballs",
      "pasta",
      "red sauce",
      "parmasan cheese"
    ]
  },
  {
    index: 11,
    name: "Meatball Subs",
    description: "Italian sub with meatballs, sub buns, red sauce, and Mozerrela Cheese",
    ingredients: [
      "Meatballs",
      "Sub Buns",
      "Marinara sauce",
      "Mozerrela Cheese"
    ]
  },
  {
    index: 12,
    name: "Chicken Pesto Sandwich",
    description: "Chicken Pesto Sandwich with Mozzarella and a side of baked potato fries",
    ingredients: [
      "Chicken Tenderloins",
      "Pesto",
      "Sub Buns",
      "Fresh Mozerrela Cheese",
      "Potatoes"
    ]
  },
  {
    index: 13,
    name: "Rice & Bean Enchilladas",
    description: "Mexican dish with red sauce, tortillas, mexican cheese, sour cream",
    ingredients: [
      "8 Tortillas",
      "1/2 lb peppers",
      "Yellow Onion",
      "1/2 cup Jasmine Rice",
      "4oz Sour Cream or Creme Fraisce",
      "2 Cloves Garlic",
      "1 Lime",
      "15oz Crushed Tomatoes",
      "15.5 oz Pinto Beans",
      "4oz Monterey Jack Cheese",
      "1 Tbsp Mexican Spice Blend"
    ]
  },
  {
    index: 14,
    name: "Tacos",
    description: "Mexican dish with meat, tortillas, mexican cheese, sour cream, and lettuce",
    ingredients: [
      "meat",
      "tortillas",
      "mexican cheese",
      "sour cream",
      "lettuce",
      "bell peppers",
      "onions"
    ]
  },
  {
    index: 15,
    name: "Pizza",
    description: "Italian dish with Pizza dough, Pizza sauce, mozerella cheese, pepperoni, and salad",
    ingredients: [
      "Pizza dough",
      "Pizza sauce",
      "mozerella cheese",
      "pepperoni"
    ]
  },
  {
    index: 16,
    name: "Quesadillas",
    description: "Mexican dish with tortillas, mexican cheese, sour cream, lettuce, and meat",
    ingredients: [
      "tortillas",
      "mexican cheese",
      "sour cream",
      "meat",
      "bell pepper",
      "salsa"
    ]
  },
  {
    index: 17,
    name: "Chicken and Veggies",
    description: "Chicken dish with veggies and rice",
    ingredients: [
      "chicken",
      "veggies",
      "rice"
    ]
  },
  {
    index: 18,
    name: "chicken nuggets and fries",
    description: "Chicken nuggets with fries and seasonal vegetable",
    ingredients: [
      "chicken nuggets",
      "fries",
      "seasonal vegetable"
    ]
  },
  {
    index: 19,
    name: "Ravioli",
    description: "Italian dish with Ravioli, red sauce, parmasan cheese, and salad",
    ingredients: [
      "Ravioli",
      "red sauce",
      "parmasan cheese",
      "salad"
    ]
  },
  {
    index: 20,
    name: "Pork and Veggies",
    description: "Pork dish with veggies and rice",
    ingredients: [
      "pork",
      "veggies",
      "rice"
    ]
  },
];

module.exports = {
  meals,
};
