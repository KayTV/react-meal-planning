import { Accordion } from 'react-bootstrap';
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
    key = 0,
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
                    <Accordion.Header>{value.header}</Accordion.Header>
                    <Accordion.Body>
                        <p><b>Description: </b>{value.body}</p>
                        <p>{children}</p>
                        <p><b>Refresh?</b> <ArrowClockwise onClick={() => handleOnClick(i)} /></p>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
};
  
  export default AccordionCommon;