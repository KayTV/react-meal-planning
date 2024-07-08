"use client";
import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

export default function FruitButton() {
  return (
    <Row>
      <Col md={3}>
        <Button type="button" onClick={generateMeals} variant="warning">
          Generate Meal Plan
        </Button>
      </Col>
    </Row>
  );
}
