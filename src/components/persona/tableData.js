import React from "react";
import { Item } from "./Item";
import { Table } from 'react-bootstrap';


export const TableData =({list, handleModalEdit, deletePersona}) => {
  return (
    <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Hobby</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {list.map((obj, i) => (
            <Item
              handleModalEdit={handleModalEdit}
              deletePersona = {deletePersona}
              key={i}
              persona={obj} i={i} />
          ))}


        </tbody>
      </Table>
  );
}