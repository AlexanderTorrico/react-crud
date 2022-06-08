import React from "react";
import { Button, Modal, Form } from 'react-bootstrap';

export const ModalPersona = ({ 
  show, handleClose, showData, postPersona,
  handleChangeName,inputName, 
  inputLastname, handleChangeLastname,
  inputHobby,  handleChangeHobby }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registro de persona</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="nombr">
            <Form.Label>Nombre</Form.Label>
            <Form.Control onChange={handleChangeName} value={inputName} type="text" placeholder="Ingrese su nombre" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control onChange={handleChangeLastname} value={inputLastname} type="text" placeholder="Ingrese su apellido" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPasatiempo">
            <Form.Label>Pasatiempo</Form.Label>
            <Form.Control onChange={handleChangeHobby} value={inputHobby} type="text" placeholder="Ingrese su pasatiempo" />
          </Form.Group>
          
          
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={postPersona}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}