import { Container } from "react-bootstrap";
import MealPlan from "./pages/meal-plan";
import NavBarFunction from "./components/navbar";

export default function Home() {
  return (
    <>
      <NavBarFunction />
      <MealPlan />
    </>
  );
}
