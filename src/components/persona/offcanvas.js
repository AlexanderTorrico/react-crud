import React from "react";
import { Button, Offcanvas, Form } from "react-bootstrap";

export const Canvas = ({
  show,
  handleClose,
  isAdd,
  postPersona,
  putPersona,
  handleChangeName,
  inputName,
  inputLastname,
  handleChangeLastname,
  inputHobby,
  handleChangeHobby,
}) => {
  return (
    <Offcanvas show={show} onHide={handleClose} placement={"end"}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{isAdd ? "Añadir" : "Editar"} persona</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form>
          <Form.Group className="mb-3" controlId="nombr">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              onChange={handleChangeName}
              value={inputName}
              type="text"
              placeholder="Ingrese su nombre"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              onChange={handleChangeLastname}
              value={inputLastname}
              type="text"
              placeholder="Ingrese su apellido"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPasatiempo">
            <Form.Label>Pasatiempo</Form.Label>
            <Form.Control
              onChange={handleChangeHobby}
              value={inputHobby}
              type="text"
              placeholder="Ingrese su pasatiempo"
            />
          </Form.Group>

          <Button className="mx-1" variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={isAdd ? postPersona : putPersona}>
            {isAdd ? "Guardar" : "Editar"}
          </Button>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
