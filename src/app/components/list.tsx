import { ListGroup } from 'react-bootstrap';
import React from "react";
import { Trash } from "react-bootstrap-icons";

export type Props = {
    data: string[];
    deleteOption?: boolean;
    children?: React.ReactNode;
  };

const ListCommon = ({
    data,
    deleteOption = false,
    children,
    }: Props) => {

    return (
        <ListGroup>
            {data.map((value, i) => (
                <ListGroup.Item className="d-flex justify-content-between align-items-start" key={i}>
                        {value}
                        {deleteOption ? (
                            <Trash />
                        ): (<></>)}      
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};
  
  export default ListCommon;