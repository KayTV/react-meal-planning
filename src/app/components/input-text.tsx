import { Form } from 'react-bootstrap';
import React from "react";

export type Props = {
    className?: string;
    inputLabel?: string;
    onClick: Function;
    disabled?: boolean;
    children?: React.ReactNode;
};

export default function InputText({
    className = "",
    inputLabel = "",
    onClick,
    children,
    disabled = false,
}: Props) {
    const handleOnClick = (event: React.MouseEvent) => {
        event.preventDefault();
        onClick(event);
    };

    return (
        <>
        <Form.Label>{inputLabel}</Form.Label>        
        <Form.Control
            type="text"
            className={className}
            onClick={handleOnClick}
            disabled={disabled}
        >
            {children}
        </Form.Control>
        </>
    );
};
