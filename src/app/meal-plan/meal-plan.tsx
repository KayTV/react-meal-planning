 'use client';
import {meals} from '../../lib/meals';
import {Meal} from '../../lib/definitions';
import {days} from '../../lib/days';
import React from 'react';
import { Button } from 'react-bootstrap';

const mealsForWeek: Meal[] = meals;
const daysOfTheWeek = days;

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
                randomObject.index = weekMeals.length;
                randomObject.day = days[randomObject.index];
                weekMeals.push(randomObject);
            } 
        }
        mealsComplete = true;
        setMealsList(weekMeals);
        console.log(weekMeals);
    }
    return (
        <div>
            <Button type="button" 
                    onClick={generateMeals}
                    variant="warning">
                    Generate Meal Plan
            </Button>
            {mealsList.length === 7 ? (
                <ul>
                    {mealsList.map((meal, index) => (
                        <li key={index}>{meal.day}: {meal.name}</li>
                    ))} 
                </ul>
            ) : (
                <p>Generating Meals</p>
            )}
        </div>
    )

}