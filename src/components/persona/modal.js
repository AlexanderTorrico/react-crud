import React from "react";
import { Button, Modal } from "react-bootstrap";

import { Formik, Form, Field, ErrorMessage } from "formik";

export const ModalPersona = ({
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
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registro de persona</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={
            isAdd
              ? {
                  name: "",
                  lastName: "",
                  hobby: "",
                }
              : { name: inputName, lastName: inputLastname, hobby: inputHobby }
          }
          onSubmit={(values) => {
            isAdd ? postPersona(values) : putPersona(values);
          }}
          validate={(values) => {
            let errors = {};

            if (values.name === "")
              errors.name = "Ingrese el nombre del usuario";
            if (values.lastName === "")
              errors.lastName = "Ingrese el apellido del usuario";
            if (values.hobby === "")
              errors.hobby = "Ingrese el pasatiempo del usuario";

            return errors;
          }}
        >
          {() => (
            <Form id="formUsuario">
              <div className="row mb-3 px-3">
                <label htmlFor="inputNombre" className="form-label">
                  Nombre
                </label>
                <Field className="form-control" id="inputNombre" name="name" />
                <ErrorMessage name="name">
                  {(error) => <p className="text-danger">{error}</p>}
                </ErrorMessage>
              </div>

              <div className="row mb-3 px-3">
                <label htmlFor="inputLastname" className="form-label">
                  Apellido
                </label>
                <Field
                  className="form-control"
                  id="inputLastname"
                  name="lastName"
                />
                <ErrorMessage name="lastName">
                  {(error) => <p className="text-danger">{error}</p>}
                </ErrorMessage>
              </div>

              <div className="row mb-3 px-3">
                <label htmlFor="inputHobby" className="form-label">
                  Pasatiempo
                </label>
                <Field className="form-control" id="inputHobby" name="hobby" />
                <ErrorMessage name="hobby">
                  {(error) => <p className="text-danger">{error}</p>}
                </ErrorMessage>
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <div className="ms-auto">
          <Button variant="primary" type="submit" form="formUsuario">
            {isAdd ? "Añadir" : "Editar"}
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};
