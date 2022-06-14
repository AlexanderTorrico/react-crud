import React from "react";
import { Modal } from "react-bootstrap";

export const ModalDelete = ({
  modalDeleteOpen,
  setModalDeleteOpen,
  inputName,
  id,
  deletePersona,
}) => {
  return (
    <Modal show={modalDeleteOpen} onHide={() => setModalDeleteOpen(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>¿Estás seguro de eliminar al usuario {inputName}?</h5>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-secondary"
          onClick={() => setModalDeleteOpen(false)}
        >
          Cancelar
        </button>
        <button className="btn btn-warning" onClick={() => deletePersona(id)}>
          Eliminar
        </button>
      </Modal.Footer>
    </Modal>
  );
};
