import Header from "./components/header";
import Link from "next/link";
import MealPlan from "./pages/meal-plan";
import NavBarFunction from "./components/navbar";

export default function Home() {
  return (
    <>
      <NavBarFunction />
      <Header />
      <Link href="/pages/add-meal">Dashboard</Link>
      <MealPlan />
    </>
  );
}
