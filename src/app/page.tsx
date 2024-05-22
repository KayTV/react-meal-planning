
import { Container } from "react-bootstrap";
import MealPlan from "./meal-plan/meal-plan";
import NavBarFunction from "./navbar/navbar";

export default function Home() {
  return (
    <>
      <NavBarFunction />
      <Container className="containerClass">
          <MealPlan />
      </Container>
    </>
  );
}
