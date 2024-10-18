import { Accordion, Button, Col, Container, Row } from 'react-bootstrap';
import { ArrowClockwise } from 'react-bootstrap-icons';
import { DataDisplay } from '@/lib/definitions';
import React from "react";

export type Props = {
    key: number;
    data: DataDisplay[];
    onClick?: Function;
    children?: React.ReactNode;
  };

const AccordionCommon = ({
    // key = 0,
    data,
    onClick = () => {},
    children,
    }: Props) => {

    const handleOnClick = (event: number) => {
        // event.preventDefault();
        onClick(event);
    };

    return (
        <Accordion>
            {data.map((value, i) => (
                <Accordion.Item key={value.index} eventKey={value.index}>
                    <Accordion.Header>
                        <Container fluid>
                            <Row>
                                <Col sm={9}>{value.header}</Col>
                                <Col sm={2}>
                                    <Button variant="outline-primary" size="sm" onClick={() => handleOnClick(i)}>
                                        <ArrowClockwise />
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p><b>Description: </b>{value.body}</p>
                        <p>{children}</p>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
};
  
  export default AccordionCommon;