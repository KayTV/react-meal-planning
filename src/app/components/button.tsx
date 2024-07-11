import { Button } from 'react-bootstrap';
import React from "react";

export type Props = {
  className?: string;
  onClick: Function;
  disabled?: boolean;
  children?: React.ReactNode;
};

const ButtonCommon = ({
  className = "",
  onClick,
  children,
  disabled = false,
}: Props) => {
  const handleOnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    onClick(event);
  };

  return (
    <Button
      type="button"
      variant={className}
      onClick={handleOnClick}
      data-testid="button"
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default ButtonCommon;