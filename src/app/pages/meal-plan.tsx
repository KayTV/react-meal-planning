 'use client';

import { Col, Container, Row } from 'react-bootstrap';
import { DataDisplay, Ingredient, Meal } from '@/lib/definitions';

import AccordionCommon from '../components/accordian';
import ButtonCommon from '../components/button';
import ListCommon from '../components/list';
import React, { ReactElement } from 'react';
import { Days, getDayByIndex } from '@/lib/days';
import { ALL_FRUIT } from '@/lib/fruit';
import { ALL_MEALS } from '@/lib/meals';
import { convertUnit, Unit } from '@/lib/unit';
import { recipes } from '@/lib/recipe';

// generate random meals for a week
export default function MealPlan() {
    const [mealsList, setMealsList] = React.useState<Meal[]>([]);
    const [fruitList, setFruitList] = React.useState<string[]>([]);
    const [shoppingList, setShoppingList] = React.useState<Ingredient[]>([]);

    const generateMeals = () => {
        const _mealsList: Meal[] = [];
        while (_mealsList.length !== 7) {
            const randomMeal: Meal = ALL_MEALS[Math.floor(Math.random() * ALL_MEALS.length)];
            const isRepeat = _mealsList.find(x => x.name === randomMeal.name);
            if (isRepeat === undefined) {
                randomMeal.index = _mealsList.length;
                randomMeal.day = getDayByIndex(randomMeal.index);
                _mealsList.push(randomMeal);
            } 
        }
        setMealsList(_mealsList);
    }

    const generateFruit = () => {
        const _fruitList: string[] = [];
        while (_fruitList.length !== 3) {
            const randomFruit = ALL_FRUIT[Math.floor(Math.random() * ALL_FRUIT.length)];
            if (!_fruitList.find(x => x === randomFruit)) {
                _fruitList.push(randomFruit);
            }
        }
        setFruitList(_fruitList);
    }

    const generateShoppingList = () => {
        let _shoppingList: Ingredient[] = [];
        if (mealsList.length > 0) {
            mealsList.forEach((meal) => {
                if (meal.ingredients) {
                    _shoppingList = updateIngredientsList(_shoppingList, meal.ingredients);
                }
            });
        }
        if (fruitList.length > 0) {
            _shoppingList = _shoppingList
                .concat(fruitList.map(
                    (fruit) => ({
                        name: `${fruit} for week`,
                        quantity: 1,
                        unit: Unit.AS_NEEDED,
                    })),
                );
        }
        setShoppingList(_shoppingList);
    }

    const updateIngredientsList = (ingredientsList: Ingredient[], ingredients: Ingredient[]) => {
        let updatedIngredients = [...ingredientsList];
        ingredients.forEach((item) => {
            const existingIngredient = updatedIngredients.find((value) => value.name === item.name);
            if (existingIngredient) {
                updateQuantity(existingIngredient, item);
            } else {
                if (item.recipe && item.recipe.length > 0) {
                    // if there are multiple recipes then pick a random one
                    const recipeId = item.recipe[Math.floor(Math.random() * item.recipe.length)]
                    const recipeIngredients = recipes.find((recipe) => recipe.id === recipeId)!.ingredients;
                    updatedIngredients = updateIngredientsList(updatedIngredients, recipeIngredients);
                } else {
                    updatedIngredients.push(item);
                }
            }
        });

        return updatedIngredients;
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
        setFruitList([]);
        setShoppingList([]);
    }

    const refreshMealOption = (index: number) => {
        const newMeals = [...mealsList];
        const randomMeal = ALL_MEALS[Math.floor(Math.random() * ALL_MEALS.length)];
        randomMeal.index = index;
        randomMeal.day = getDayByIndex(randomMeal.index);
        newMeals[index] = randomMeal;
        setMealsList(newMeals);
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

    const buildDisplayData = (mealList: Meal[]): DataDisplay[] => {
        return mealList.map((meal) => (
            {
                index: meal.index.toString(),
                header: meal.day + ': ' + meal.name,
                body: meal.description,
            }
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
                                <AccordionCommon key={0} data={buildDisplayData(mealsList)}
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