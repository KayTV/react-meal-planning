 'use client';
import {meals} from '../../lib/meals';
import {Meal} from '../../lib/definitions';
import {days} from '../../lib/days';
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

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
            <Row>
                <Col md={3}>
                    <Button type="button" 
                            onClick={generateMeals}
                            variant="warning">
                            Generate Meal Plan
                    </Button>
                </Col>
            </Row>
            {mealsList.length === 7 ? (
                <Row>
                    {mealsList.map((meal, index) => (
                        <Col key={index}>
                        <Card className='card' style={{ width: '18rem' }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Title>{meal.day}</Card.Title>
                                <Card.Text>
                                    {meal.name}
                                </Card.Text>
                                <Button variant="link">Details</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                    ))} 
                </Row>
            ) : (
                <p>Generating Meals</p>
            )}
        </div>
    )

}