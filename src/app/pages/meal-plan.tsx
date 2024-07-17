 'use client';

import { Accordion, Button, Card, Col, Container, Row } from 'react-bootstrap';
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
    let fullWeekMeals: Meal[] = [];
    let weekMeals: DataDisplay[] = [];
    let weekFruit: string[] = [];
    let weekShopping: string[] = [];
    const [mealsList, setMealsList] = React.useState(fullWeekMeals);
    const [mealsList2, setMealsList2] = React.useState(weekMeals);
    const [fruitList, setFruitList] = React.useState(weekFruit);
    const [shoppingList, setShoppingList] = React.useState(weekShopping);
    let mealsComplete: boolean = false;

    const generateMeals = () => {
        fullWeekMeals = [];
        weekMeals = [];
        setMealsList([]);
        setMealsList2([]);
        while (fullWeekMeals.length !== 7) {
            mealsComplete = false;
            const randomObject = mealsArray[Math.floor(Math.random() * mealsArray.length)];
            const isRepeat = fullWeekMeals.find(x => x.name === randomObject.name);
            if (isRepeat === undefined) {
                randomObject.index = fullWeekMeals.length;
                randomObject.day = days[randomObject.index];
                const test: DataDisplay = {
                    index: randomObject.index.toString(),
                    header: randomObject.day + ': ' + randomObject.name,
                    body: randomObject.description
                }
                fullWeekMeals.push(randomObject);
                weekMeals.push(test);
            } 
        }
        mealsComplete = true;
        setMealsList(fullWeekMeals);
        setMealsList2(weekMeals);
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

    const generateShoppingList = () => {
        weekShopping = [];
        setShoppingList([]);
        if (mealsList.length > 0) {
            mealsList.forEach((meal) => {
                if (meal.ingrediants) {
                    meal.ingrediants.forEach((item) => {
                        weekShopping.push(item);
                    });
                }
            });
        }
        if (fruitList.length > 0) {
            weekShopping = weekShopping.concat(fruitList);
        }
        setShoppingList(weekShopping);
    }

    const deleteItemFromList = (index: number) => {
        const newList = [...shoppingList];
        if (newList.length > 0) {
            newList.splice(index, 1);
        }
        setShoppingList(newList);
    }

    return (
        <Container className="containerClass" fluid>
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
                            onClick={generateShoppingList}
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
                                <ListCommon data={fruitList}>
                                </ListCommon>
                            </Col> 
                        </Row>
                    </>
                    ) : (
                        <p>Generating Fruit...</p>
                    )}
                </Col>
                <Col md={4}>
                    {shoppingList.length > 0 ? (
                    <>
                        <Row className='row-padding'>
                            <Col md={12}>
                                <h2>Shopping List</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <ListCommon data={shoppingList} 
                                            deleteOption={true}
                                            onClick={deleteItemFromList}>
                                </ListCommon>
                            </Col> 
                        </Row>
                    </>
                    ) : (
                        <p>Generating Shopping List...</p>
                    )}
                </Col>
            </Row>    
        </Container>
    )

}