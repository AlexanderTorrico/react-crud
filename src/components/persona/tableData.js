import React from "react";
import { Item } from "./Item";
import { Table } from "react-bootstrap";

export const TableData = ({
  list,
  handleModalEdit,
  handleOpenModalDelete,
  deletePersona,
  setModalDeleteOpen,
}) => {
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
            handleOpenModalDelete={handleOpenModalDelete}
            handleModalEdit={handleModalEdit}
            deletePersona={deletePersona}
            key={i}
            persona={obj}
            i={i}
          />
        ))}
      </tbody>
    </Table>
  );
};
