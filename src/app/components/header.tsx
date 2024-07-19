import './_header.scss';

import React from "react";

export type Props = {
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
};  

const Header = ({

}: Props) => {
  return (
    <div className="header-img">
      <h1>Meal Planning</h1>
      <p>Click the buttons below to generate a meal plan, fruit for the week, and a shopping list.</p>
    </div>
  );
}

export default Header;