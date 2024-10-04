import { Ingredient, Recipe } from "./definitions";
import { Unit } from '@/lib/unit';

export const recipes: Recipe[] = [
    {
        id: 1,
        name: "Bimbimbop Sauce",
        description: "Spicy Korean inspired sauce",
        ingredients: [
            {
                name: 'Gochujang',
                quantity: 2,
                unit: Unit.TABLESPOON,
            },
            {
                name: 'Sesame Oil',
                quantity: 1,
                unit: Unit.TABLESPOON,
            },
            {
                name: 'Sugar',
                quantity: 1,
                unit: Unit.TABLESPOON,
            },
            {
                name: 'Water',
                quantity: 1,
                unit: Unit.TABLESPOON,
            },
            {
                name: 'Sesame Seeds (Toasted)',
                quantity: 1,
                unit: Unit.TABLESPOON,
            },
            {
                name: 'Vinegar / Apple Vinegar',
                quantity: 1,
                unit: Unit.TEASPOON,
            },
            {
                name: 'Minced Garlic',
                quantity: 1,
                unit: Unit.TEASPOON,
            },
        ],
        directions: ['Combine'],
    },
    {
        id: 2,
        name: 'Beef Empanada',
        description: 'Beef Emapanadas originally made from a Blue Apron recipe',
        ingredients: [
            {
                name: 'Gound Beef',
                quantity: 1.125,
                unit: Unit.POUND,
            },
            {
                name: 'Empanada Wrappers',
                quantity: 10,
                unit: Unit.WHOLE,
            },
            {
                name: 'Tomato Sauce',
                quantity: 8,
                unit: Unit.OUNCE,
            },
            {
                name: 'Red Onion',
                quantity: 1,
                unit: Unit.WHOLE,
            },
            {
                name: 'Dried Apricots',
                quantity: 1.25,
                unit: Unit.CUP,
            },
            {
                name: 'Mexican Spice Blend',
                quantity: 1,
                unit: Unit.TABLESPOON,
                recipe: [3],
            },
        ],
        directions: [
            'Dice up red onion',
            'Brown the ground beef. Then add in red onion',
            'Add in spice blend',
            'Add in apricots, tomato sauce and 1/2 cup water',
            'Allow to cook for 3-5 minutes until thoroughly coated',
            'Take off heat and allow to thicken a little bit to more easily fill emapanda wrappers',
            'Use water around the edges of the wrappers to allow them to seal, fill wrappers then fold a crimp with a fork',
            'Bake at 425F for 18 minutes (22 minutes when from frozen)',
        ],
    },
    {
        id: 3,
        name: "Mexican Spice Blend",
        description: "Mexican Spice Blend",
        ingredients: [
            {
                name: 'Sweet Smoked Paprika',
                quantity: 4,
                unit: Unit.TABLESPOON,
            },
            {
                name: 'Ancho Chile Powder',
                quantity: 4,
                unit: Unit.TABLESPOON,
            },
            {
                name: 'Cumin',
                quantity: 2,
                unit: Unit.TABLESPOON,
            },
            {
                name: 'Coriander',
                quantity: 2,
                unit: Unit.TABLESPOON,
            },
            {
                name: 'Garlic Powder',
                quantity: 2,
                unit: Unit.TABLESPOON,
            },
            {
                name: 'Oregano',
                quantity: 2,
                unit: Unit.TABLESPOON,
            },
            {
                name: 'Cocoa Powder',
                quantity: 1,
                unit: Unit.TABLESPOON,
            },
            {
                name: 'Cinnamon',
                quantity: 1,
                unit: Unit.TABLESPOON,
            },
        ],
        directions: ['Combine'],
    },
    {
        id: 4,
        name: 'Chicken Shawarma',
        description: 'Instant pot chicken shawarma',
        ingredients: [
            {
                name: 'Olive Oil',
                quantity: 0.5,
                unit: Unit.CUP,
            },
            {
                name: 'Lemon Juice',
                quantity: 0.25,
                unit: Unit.CUP,
            },
            {
                name: 'Smoked Paprika',
                quantity: 2,
                unit: Unit.TEASPOON,
            },
            {
                name: 'Turmeric',
                quantity: 0.5,
                unit: Unit.TEASPOON,
            },
            {
                name: 'Cumin',
                quantity: 2,
                unit: Unit.TEASPOON,
            },
            {
                name: 'Red Pepper Flakes',
                quantity: 0.5,
                unit: Unit.TEASPOON,
            },
            {
                name: 'Garlic',
                quantity: 4,
                unit: Unit.WHOLE,
            },
            {
                name: 'Black Pepper',
                quantity: 2,
                unit: Unit.TEASPOON,
            },
            {
                name: 'Salt',
                quantity: 1,
                unit: Unit.TEASPOON,
            },
            {
                name: 'Onion',
                quantity: 1,
                unit: Unit.WHOLE,
            },
            {
                name: 'Boneless/Skinless Chicken Thigh',
                quantity: 4,
                unit: Unit.POUND,
            },
        ],
        directions: [
            'Add all ingredients together and marinate for 24 hours',
            'Cook in Instant Pot 15 minutes on High Pressure',
            'Let naturally release',
            'Optional: Reduce Instant Pot time to 10 minutes and sear chicken 1-2 min per side',
        ],
    },
    {
        id: 5,
        name: 'Garlic Tahini Sauce',
        description: 'Garlic Tahini Sauce',
        ingredients: [
            {
                name: 'Head of Garlic',
                quantity: 1,
                unit: Unit.WHOLE,
            },
            {
                name: 'Lemon Juice',
                quantity: 0.667,
                unit: Unit.CUP,
            },
            {
                name: 'Cumin',
                quantity: 0.5,
                unit: Unit.TEASPOON,
            },
            {
                name: 'Tahini Paste',
                quantity: 10,
                unit: Unit.OUNCE,
            },
            {
                name: 'Salt',
                quantity: 1,
                unit: Unit.AS_NEEDED,
            },
            {
                name: 'Cold Water',
                quantity: 1,
                unit: Unit.AS_NEEDED,
            },
        ],
        directions: [
            'Combine garlic and lemon juice',
            'Blend until a pulpy purree, strain out solids',
            'Add in cumin and tahini',
            'Whisk together adding water slowly until desired consistency',
        ],
    },
    {
        id: 6,
        name: 'Garlic Sauce',
        description: 'Simple garlic sauce using egg white as an emulsifier',
        ingredients: [
            {
                name: 'Vegetable Oil',
                quantity: 1,
                unit: Unit.CUP,
            },
            {
                name: 'Lemon Juice',
                quantity: 0.333,
                unit: Unit.CUP,
            },
            {
                name: 'Garlic Clove',
                quantity: 6,
                unit: Unit.WHOLE,
            },
            {
                name: 'Egg White',
                quantity: 1,
                unit: Unit.WHOLE,
            },
            {
                name: 'Salt',
                quantity: 1,
                unit: Unit.TEASPOON,
            },
        ],
        directions: ['Combine and blend for 1-2 minutes'],
    },
    {
        id: 7,
        name: 'Toum',
        description: 'Lebanese Garlic Sauce',
        ingredients: [
            {
                name: 'Garlic Cloves',
                quantity: 1,
                unit: Unit.CUP,
            },
            {
                name: 'Salt',
                quantity: 2,
                unit: Unit.TEASPOON,
            },
            {
                name: 'Neutral Oil (Safflower Oil)',
                quantity: 3,
                unit: Unit.CUP,
            },
            {
                name: 'Lemon Juice',
                quantity: 0.5,
                unit: Unit.CUP,
            },
        ],
        directions: [
            'Slice the garlic cloves in half lengthwise and remove any green sprouts',
            'Transfer the sliced garlic cloves into a food processor and add the kosher salt to the garlic cloves. Process for a minute until the garlic becomes finely minced. Make sure to scrape down the sides of the food processor afterwards',
            'While the food processor is running, slowly pour one to two tablespoons of oil, then stop and scrape down the bowl. Continue adding another tablespoon or two until the garlic starts looking creamy.',
            'Once the garlic looks emulsified by the few tablespoons of oil, increase the speed of pouring the oil and alternate with the ½ cup of lemon juice until all the oil and lemon juice is incorporated. This will take about 15 minutes to complete.',
            'Transfer the sauce into a glass container and cover with a paper towel in the fridge overnight. Makes about 4 cups.',
            'The next day, replace the paper towel with an airtight lid and keep in the fridge for up to 3 months.',
        ],
    },
    {
        id: 8,
        name: 'Butter Chicken',
        description: 'Instant Pot Butter Chicken',
        ingredients: [
            {
                name: 'Boneless/Skinless Chicken Thigh',
                quantity: 4,
                unit: Unit.POUND,
            },

        ],
        directions: [],
    },
    {
        id: 9,
        name: "Rice & Bean Enchilladas",
        description: "Mexican dish with red sauce, tortillas, mexican cheese, sour cream",
        ingredients: [
            {
                name: 'Flour Tortillas',
                quantity: 8,
                unit: Unit.WHOLE,
            },
            {
                name: 'Bell Peppers',
                quantity: 0.5,
                unit: Unit.POUND,
            },
            {
                name: 'Yellow Onion',
                quantity: 1,
                unit: Unit.WHOLE,
            },
            {
                name: 'Jasmine Rice',
                quantity: 0.5,
                unit: Unit.CUP,
            },
            {
                name: 'Creme Fraisce',
                quantity: 4,
                unit: Unit.OUNCE,
            },
            {
                name: 'Garlic Clove',
                quantity: 2,
                unit: Unit.WHOLE,
            },
            {
                name: 'Lime',
                quantity: 1,
                unit: Unit.WHOLE,
            },
            {
                name: 'Crushed Tomatoes',
                quantity: 15,
                unit: Unit.OUNCE,
            },
            {
                name: 'Pinto Beans',
                quantity: 15.5,
                unit: Unit.OUNCE,
            },
            {
                name: 'Monterey Jack Cheese',
                quantity: 4,
                unit: Unit.OUNCE,
            },
            {
                name: 'Mexican Spice Blend',
                quantity: 1,
                unit: Unit.TABLESPOON,
                recipe: [3],
            },
        ],
        directions: [
            'Thinly slice pepper and onion',
            'Cook rice with 1/2 spice blend',
            'Cook pepper and onions. Add in pinto beans and cook another minute',
            'Combine rice, peppers, onions and beans in a bowl and add creme fraische',
            'Add tomato sauce to pan with remaining spice blend and garlic. Cook out for a couple minutes',
            'Fill and wrap tortillas w. veg mix and put in a glass pan',
            'Pour tomato sauce overtop the enchiladas',
            'Add cheese on top',
            'Bake 9-11 mins at 450F',
        ],
    }
];

export const getRecipeIngredients = (id: number): Ingredient[] => {
    return recipes.find((value) => value.id === id)?.ingredients ?? [];
}
