import { Accordion } from 'react-bootstrap';
import { DataDisplay } from '@/lib/definitions';
import React from "react";

export type Props = {
    key: number;
    data: DataDisplay[];
    children?: React.ReactNode;
  };

const AccordionCommon = <T,>({
    key = 0,
    data,
    children,
    }: Props) => {

    return (
        <Accordion>
            {data.map((value, i) => (
                <Accordion.Item key={value.index} eventKey={value.index}>
                    <Accordion.Header>{value.header}</Accordion.Header>
                    <Accordion.Body>
                        {value.body}
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
};
  
  export default AccordionCommon;