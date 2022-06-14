import React from "react";
import { Button } from "react-bootstrap";

export const Item = ({
  persona,
  i,
  handleModalEdit,
  handleOpenModalDelete,
  deletePersona,
  setModalDeleteOpen,
}) => {
  return (
    <tr>
      <td>{i + 1}</td>
      <td>{persona.name}</td>
      <td>{persona.lastName}</td>
      <td>{persona.hobby}</td>
      <td>
        <Button
          onClick={() => handleModalEdit(persona)}
          className="mx-1"
          size="sm"
          variant="warning"
        >
          Editar
        </Button>
        <Button
          onClick={() => {
            handleOpenModalDelete(persona);
          }}
          size="sm"
          variant="danger"
        >
          Eliminar
        </Button>
      </td>
    </tr>
  );
};
