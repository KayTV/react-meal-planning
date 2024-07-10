"use client";
import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { fruit } from "../../lib/fruit";

const fruitProvided: string[] = fruit;

export default function FruitButton() {
  let fruitForTheWeek: string[] = [];

  const generateFruit = () => {
    fruitForTheWeek = [];
    while (fruitForTheWeek.length !== 2) {
      const randomObject =
        fruitProvided[Math.floor(Math.random() * fruitProvided.length)];
      fruitForTheWeek.push(randomObject);
    }
  };

  return (
    <Row>
      <Col md={3}>
        <Button type="button" onClick={generateFruit} variant="warning">
          Generate Meal Plan
        </Button>
      </Col>
    </Row>
  );
}
