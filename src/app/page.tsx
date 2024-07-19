import Header from "./components/header";
import MealPlan from "./pages/meal-plan";
import NavBarFunction from "./components/navbar";

export default function Home() {
  return (
    <>
      <NavBarFunction />
      <Header />
      <MealPlan />
    </>
  );
}
