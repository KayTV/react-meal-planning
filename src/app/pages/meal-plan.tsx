 'use client';

import { Accordion, Button, Card, Col, Row } from 'react-bootstrap';
import {DataDisplay, Meal} from '../../lib/definitions';

import AccordionCommon from '../components/accordian';
import ButtonCommon from '../components/button';
import ListCommon from '../components/list';
import React from 'react';
import {days} from '../../lib/days';
import {fruit} from '../../lib/fruit';
import {meals} from '../../lib/meals';

const mealsArray: Meal[] = meals;
const daysOfTheWeek = days;
const fruitArray: string[] = fruit

// generate random meals for a week
export default function MealPlan() {
    let weekMeals: Meal[] = [];
    let weekMeals2: DataDisplay[] = [];
    let weekFruit: string[] = [];
    const [mealsList, setMealsList] = React.useState(weekMeals);
    const [mealsList2, setMealsList2] = React.useState(weekMeals2);
    const [fruitList, setFruitList] = React.useState(weekFruit);
    let mealsComplete: boolean = false;

    const generateMeals = () => {
        weekMeals = [];
        weekMeals2 = [];
        setMealsList([]);
        setMealsList2([]);
        while (weekMeals.length !== 7) {
            mealsComplete = false;
            const randomObject = mealsArray[Math.floor(Math.random() * mealsArray.length)];
            const isRepeat = weekMeals.find(x => x.name === randomObject.name);
            if (isRepeat === undefined) {
                randomObject.index = weekMeals.length;
                randomObject.day = days[randomObject.index];
                const test: DataDisplay = {
                    index: randomObject.index.toString(),
                    header: randomObject.day + ': ' + randomObject.name,
                    body: 'this is the body'
                }
                weekMeals.push(randomObject);
                weekMeals2.push(test);
            } 
        }
        mealsComplete = true;
        setMealsList(weekMeals);
        setMealsList2(weekMeals2);
    }

    const generateFruit = () => {
        weekFruit = [];
        setFruitList([]);
        while (weekFruit.length !== 3) {
            const randomObject = fruitArray[Math.floor(Math.random() * fruitArray.length)];
            const isRepeat = weekFruit.find(x => x === randomObject);
            if (isRepeat === undefined) {
                weekFruit.push(randomObject);
            } 
        }
        console.log(weekFruit);
        setFruitList(weekFruit);
    }

    return (
        <>
            <Row className='row-padding'>
                <Col md={4}>
                    <ButtonCommon
                            onClick={generateMeals}
                            className="warning">
                            Generate Meal Plan
                    </ButtonCommon>
                </Col>
                <Col md={4}>
                    <ButtonCommon
                            onClick={generateFruit}
                            className="warning">
                            Generate Fruit
                    </ButtonCommon>
                </Col>
                <Col md={4}>
                    <ButtonCommon
                            onClick={generateMeals}
                            className="warning">
                            Generate Shopping List
                    </ButtonCommon>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    {mealsList.length === 7 ? (
                    <>
                        <Row className='row-padding'>
                            <Col md={12}>
                                <h2>Week Menu</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <AccordionCommon key={0} data={mealsList2}>
                                </AccordionCommon>
                            </Col> 
                        </Row>
                    </>
                    ) : (
                        <p>Generating Meals...</p>
                    )}
                </Col>
                <Col md={4}>
                    {fruitList.length === 3 ? (
                    <>
                        <Row className='row-padding'>
                            <Col md={12}>
                                <h2>Fruit for the Week</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <ListCommon key={0} data={fruitList}>
                                </ListCommon>
                            </Col> 
                        </Row>
                    </>
                    ) : (
                        <p>Generating Fruit...</p>
                    )}
                </Col>
                <Col md={4}>
                    {mealsList.length === 7 ? (
                    <>
                        <Row className='row-padding'>
                            <Col md={12}>
                                <h2>Shopping List</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <ListCommon key={0} data={fruitArray}>
                                </ListCommon>
                            </Col> 
                        </Row>
                    </>
                    ) : (
                        <p>Generating Shopping List...</p>
                    )}
                </Col>
            </Row>
            
        </>
    )

}