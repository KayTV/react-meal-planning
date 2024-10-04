 'use client';

import { Col, Container, Row } from 'react-bootstrap';
import { DataDisplay, Ingredient, Meal } from '@/lib/definitions';

import AccordionCommon from '../components/accordian';
import ButtonCommon from '../components/button';
import ListCommon from '../components/list';
import React, { ReactElement } from 'react';
import { days } from '@/lib/days';
import { fruit } from '@/lib/fruit';
import { meals } from '@/lib/meals';
import { convertUnit, Unit } from '@/lib/unit';
import { recipes } from '@/lib/recipe';

const mealsArray: Meal[] = meals;
const daysOfTheWeek = days;
const fruitArray: string[] = fruit

// generate random meals for a week
export default function MealPlan() {
    let fullWeekMeals: Meal[] = [];
    let weekMeals: DataDisplay[] = [];
    let weekFruit: string[] = [];
    const [mealsList, setMealsList] = React.useState(fullWeekMeals);
    const [mealsList2, setMealsList2] = React.useState(weekMeals);
    const [fruitList, setFruitList] = React.useState(weekFruit);
    const [shoppingList, setShoppingList] = React.useState<Ingredient[]>([]);
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
            const randomFruit = fruitArray[Math.floor(Math.random() * fruitArray.length)];
            if (!weekFruit.find(x => x === randomFruit)) {
                weekFruit.push(randomFruit);
            }
        }
        console.log(weekFruit);
        setFruitList(weekFruit);
    }

    const generateShoppingList = () => {
        let weekShopping: Ingredient[] = [];
        setShoppingList([]);
        if (mealsList.length > 0) {
            mealsList.forEach((meal) => {
                if (meal.ingredients) {
                    weekShopping = updateIngredientsList(weekShopping, meal.ingredients);
                }
            });
        }
        if (fruitList.length > 0) {
            weekShopping = weekShopping
                .concat(fruitList.map(
                    (fruit) => ({
                        name: `${fruit} for week`,
                        quantity: 1,
                        unit: Unit.AS_NEEDED,
                    })),
                );
        }
        setShoppingList(weekShopping);
    }

    const updateIngredientsList = (ingredientsList: Ingredient[], ingredients: Ingredient[]) => {
        let masterList = [...ingredientsList];
        ingredients.forEach((item) => {
            const existingIngredient = masterList.find((value) => value.name === item.name);
            if (existingIngredient) {
                updateQuantity(existingIngredient, item);
            } else {
                if (item.recipe && item.recipe.length > 0) {
                    // if there are multiple recipes then pick a random one
                    const recipeId = item.recipe[Math.floor(Math.random() * item.recipe.length)]
                    const recipeIngredients = recipes.find((recipe) => recipe.id === recipeId)!.ingredients;
                    masterList = updateIngredientsList(masterList, recipeIngredients);
                } else {
                    masterList.push(item);
                }
            }
        });

        return masterList;
    }

    const deleteItemFromList = (index: number) => {
        const newList = [...shoppingList];
        if (newList.length > 0) {
            newList.splice(index, 1);
        }
        setShoppingList(newList);
    }

    const clearAll = () => {
        setMealsList([]);
        setMealsList2([]);
        setFruitList([]);
        setShoppingList([]);
    }

    const refreshMealOption = (index: number) => {
        const newMeals = [...mealsList];
        const newMeals2 = [...mealsList2];
        const randomObject = mealsArray[Math.floor(Math.random() * mealsArray.length)];
        randomObject.index = index;
        randomObject.day = days[randomObject.index];
        const test: DataDisplay = {
            index: randomObject.index.toString(),
            header: randomObject.day + ': ' + randomObject.name,
            body: randomObject.description
        }
        newMeals[index] = randomObject;
        newMeals2[index] = test;
        setMealsList(newMeals);
        setMealsList2(newMeals2);
    }
    
    const updateQuantity = (existingIngredient: Ingredient, newIngredient: Ingredient): Ingredient => {
        // Updating quantity for "As Needed" items feels wonky...
        if (newIngredient.unit === Unit.AS_NEEDED) {
            return existingIngredient;
        } else if (existingIngredient.unit === Unit.AS_NEEDED) {
            existingIngredient.quantity = newIngredient.quantity;
            existingIngredient.unit = newIngredient.unit;
        }
        existingIngredient.quantity += convertUnit(newIngredient.unit, existingIngredient.unit, newIngredient.quantity);
        return existingIngredient;
    }

    const createShoppingListItems = (): ReactElement[] => {
        return shoppingList.map(item => (
            <Row>
                <Col md={6}>{item.name}</Col>
                <Col md={2}>{toFixedDecimals(item.quantity)}</Col>
                <Col md={4}>{item.unit}</Col>
            </Row>
        ));
    }

    // TODO: Move to utility file
    const toFixedDecimals = (num: number, decimals = 2): number => {
        return Math.round((num + Number.EPSILON) * Math.pow(10, decimals)) / Math.pow(10, decimals);
    }

    return (
        <Container className="containerClass" fluid>
            <Row>
                <Col md={12} className='clearButton'>
                    <ButtonCommon
                            onClick={clearAll}
                            className="dark"
                            disabled={mealsList.length === 0 && fruitList.length === 0 && shoppingList.length === 0}>
                        Clear All
                    </ButtonCommon>
                </Col>
            </Row>
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
                            className="warning"
                            disabled={mealsList.length === 0 && fruitList.length === 0}>
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
                                <AccordionCommon key={0} data={mealsList2}
                                            onClick={refreshMealOption}>
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
                                <ListCommon data={createShoppingListItems()} 
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