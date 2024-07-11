import { ListGroup } from 'react-bootstrap';
import React from "react";

export type Props = {
    key: number;
    data: string[];
    children?: React.ReactNode;
  };

const ListCommon = ({
    key,
    data,
    children,
    }: Props) => {

    return (
        <ListGroup>
            {data.map((value, i) => (
                <ListGroup.Item key={i}>
                        {value}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};
  
  export default ListCommon;