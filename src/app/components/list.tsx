import React, { ReactElement, useEffect, useMemo, useState } from "react";

import { ListGroup } from 'react-bootstrap';
import { Trash } from "react-bootstrap-icons";

export type Props = {
    data: string[] | ReactElement[];
    onClick?: Function;
    deleteOption?: boolean;
    children?: React.ReactNode;
  };

const ListCommon = ({
    data,
    deleteOption = false,
    onClick = () => {},
    children,
    }: Props) => {
        const handleOnClick = (event: number) => {
            // event.preventDefault();
            onClick(event);
        };

    return (
        <ListGroup>
            {data.map((value, i) => (
                <ListGroup.Item className="d-flex justify-content-between align-items-start" key={i}>
                        {value}
                        {deleteOption ? (
                            <Trash onClick={() => handleOnClick(i)} />
                        ): (<></>)}      
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};
  
  export default ListCommon;

function fetchData() {
    throw new Error('Function not implemented.');
}
