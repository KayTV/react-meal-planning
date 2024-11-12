import {FieldError, FieldValues, RegisterOptions, UseFormRegister} from 'react-hook-form'

import { Form } from 'react-bootstrap';
import React from "react";

export type Props = {
    name: string;
    className?: string;
    inputLabel?: string;
    register: UseFormRegister<any>;
    errors: string | undefined;
    required?: boolean;
    type: string;
    validationSchema: RegisterOptions;
    disabled?: boolean;
};

export default function InputText({
    name,
    className = "",
    inputLabel,
    register,
    errors,
    required,
    type,
    validationSchema,
    disabled = false,
}: Props) {

    return (
        <>
        <Form.Label>{inputLabel} {required && "*"}</Form.Label>        
        <Form.Control
            type={type}
            className={className}
            {...register(name, validationSchema)}
            disabled={disabled} />
        <p>{errors}</p>
        </>
    );
};
