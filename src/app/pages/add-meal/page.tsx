'use client'

import "./_add-meal.scss";

import { Badge, Button, Col, Container, Form, Row } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";

import InputText from "@/app/components/input-text";
import React from 'react';

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface FormInput {
  firstName: string
  lastName: string
  gender: GenderEnum
  age: number
  test: string
  radio: string
  dob: Date
  notes: string
}

export const AddMeal = (_props: any) => {
  const [formData, updateFormData] = React.useState<FormInput>();
  const { register, handleSubmit, formState: {errors}, setFocus, reset } = useForm<FormInput>();
  console.log(errors)

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
    updateFormData(data);
    reset();
  }

  React.useEffect(() => {
    setFocus("firstName")
  }, [setFocus])

  return (
    <Container className="containerClass" fluid>
      <Row>
        <Col md={12}>
          <h2 className="header">React-Hook-Forms</h2>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col md={6}>
                <InputText name="firstName" 
                          type="text" 
                          inputLabel="First Name" 
                          register={register} 
                          validationSchema={{ required: "First Name is required"}} 
                          errors={errors.firstName?.message} 
                          required></InputText>
              </Col>
              <Col md={6}>
                <InputText name="lastName" 
                            type="text" 
                            inputLabel="Last Name" 
                            register={register} 
                            validationSchema={{ required: "Last Name is required"}} 
                            errors={errors.lastName?.message} 
                            required></InputText>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <InputText name="age" 
                            type="number" 
                            inputLabel="Age" 
                            register={register} 
                            validationSchema={{valueAsNumber: true, min: { value: 18, message: "You must be over 18"}, max: 99}} 
                            errors={errors.age?.message}></InputText>
              </Col>
              <Col md={5}>
                <label>Gender Selection: </label>
                  <Form.Select aria-label="Default select example" {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                  </Form.Select>
              </Col>
              <Col md={5}>
                <InputText name="dob" 
                            type="date" 
                            inputLabel="Date of Birth" 
                            register={register} 
                            validationSchema={{valueAsDate: true}} 
                            errors={errors.dob?.message}></InputText>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <InputText name="test" 
                            type="text" 
                            inputLabel="RegEx Expression Test" 
                            register={register} 
                            validationSchema={{ required: "Test is required", pattern: {value: /[A-Za-z]{3}/, message: 'an error occured'}}} 
                            errors={errors.test?.message}></InputText>
                <Badge bg="warning" text="dark">Regex expression: /[A-Za-z]{3}/</Badge>
              </Col>
              <Col md={6} className="radioButtons">
                <>
                  <Form.Check {...register("radio")} type="radio" value="A" label="Choice A" inline />
                  <Form.Check {...register("radio")} type="radio" value="B" label="Choice B" inline />
                  <Form.Check {...register("radio")} type="radio" value="C" label="Choice C" inline />
                </>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <label>Notes:</label>
                <textarea {...register("notes", {minLength: { value: 4, message: "Message is too short" }})} />
                <p>{errors.notes?.message}</p>
              </Col>
            </Row>
            <Row>
              <Col md={12} className='submitButton'>
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </form>
          <Row>
            <Col md={12}>
              <div>Submitted Form: {JSON.stringify(formData)}</div>
            </Col>
          </Row>
        </Col>
      </Row>
      
    </Container>
    
  )
}

export default AddMeal;
