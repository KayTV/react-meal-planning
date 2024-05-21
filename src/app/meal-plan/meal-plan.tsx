 'use client';
import {meals} from '../../lib/meals';
import {Meal} from '../../lib/definitions';
import GenerateMealsButton from '../buttons/generate-meals-button';
import React from 'react';

const mealsForWeek: Meal[] = meals;

// generate random meals for a week
export default function MealPlan() {
    let weekMeals: Meal[] = [];
    const [mealsList, setMealsList] = React.useState(weekMeals);
    let mealsComplete: boolean = false;
    const generateMeals = () => {
        weekMeals = [];
        setMealsList([]);
        while (weekMeals.length !== 7) {
            mealsComplete = false;
            const randomObject = mealsForWeek[Math.floor(Math.random() * mealsForWeek.length)];
            const isRepeat = weekMeals.find(x => x.name === randomObject.name);
            if (isRepeat === undefined) {
                weekMeals.push(randomObject);
            } 
        }
        mealsComplete = true;
        setMealsList(weekMeals);
        console.log(weekMeals);
    }
    return (
        <div>
            <button type="button" 
                    onClick={generateMeals}
                    className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Generate Meal Plan
            </button>
            {mealsList.length === 7 ? (
                <ul>
                    {mealsList.map((meal, index) => (
                        <li key={index}>{meal.name}</li>
                    ))} 
                </ul>
            ) : (
                <p>Generating Meals</p>
            )}
        </div>
    )

}