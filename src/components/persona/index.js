import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button } from "react-bootstrap";

import { ModalDelete } from "./modalDelete";
import { ModalPersona } from "./modal";
import { Canvas } from "./offcanvas";
import { TableData } from "./tableData";
import { NavbarC } from "./../Navbar";

const url = "http://test3.merx.bo/";
const cod = 77;

export const Persona = () => {
  const [list, setList] = useState([]);
  const [persona, setPersona] = useState({});

  useEffect(() => getPersona(), []);
  //Input add person

  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [id, setId] = useState("");
  const [inputName, setName] = useState("");
  const [inputLastname, setLastname] = useState("");
  const [inputHobby, setHobbby] = useState("");
  const [isAdd, setIsAdd] = useState(true);

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeLastname = (e) => setLastname(e.target.value);
  const handleChangeHobby = (e) => setHobbby(e.target.value);

  const showData = () => console.log({ inputName, inputLastname, inputHobby });

  // funciones de modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleModalSave = () => {
    setHobbby("");
    setName("");
    setLastname("");
    setIsAdd(true);
    handleShow();
  };
  const handleModalEdit = (persona) => {
    setIsAdd(false);
    handleShow();
    setId(persona.id);
    setName(persona.name);
    setLastname(persona.lastName);
    setHobbby(persona.hobby);
  };
  const handleOpenModalDelete = (persona) => {
    setId(persona.id);
    setName(persona.name);
    setLastname(persona.lastName);
    setHobbby(persona.hobby);
    setModalDeleteOpen(true);
  };

  const getPersona = () => {
    axios
      .get(url + "?cod=" + cod)
      .then(function (response) {
        // handle success
        setList(response.data.data);
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        console.log("Siempre");
      });
  };
  const postPersona = (values) => {
    console.log(values);

    let obj = {
      name: values.name,
      lastName: values.lastName,
      hobby: values.hobby,
      other: "",
      cod: cod,
    };

    console.log(obj);

    axios
      .post(url, obj)
      .then(function (response) {
        // handle success

        getPersona();
        handleClose();
        setHobbby("");
        setName("");
        setLastname("");
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        console.log("Siempre");
      });
  };
  const putPersona = () => {
    let obj = {
      id: id,
      name: inputName,
      lastName: inputLastname,
      hobby: inputHobby,
      other: "",
      cod: cod,
    };
    axios
      .put(url, obj)
      .then(function (response) {
        // handle success

        getPersona();
        handleClose();
        setHobbby("");
        setName("");
        setLastname("");
        setId("");
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        console.log("Siempre");
      });
  };
  const deletePersona = (idx) => {
    let obj = {
      id: idx,
    };

    setModalDeleteOpen(false);

    axios
      .delete(url, { data: obj })
      .then(function (response) {
        // handle success
        console.log(response.data.message);

        getPersona();
        setHobbby("");
        setName("");
        setLastname("");
        setId("");
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        console.log("Siempre");
      });
  };

  return (
    <React.Fragment>
      <NavbarC />

      <Container className="mt-5">
        <Button className="mb-3" variant="primary" onClick={handleModalSave}>
          Agregar persona
        </Button>

        <TableData
          list={list}
          setModalDeleteOpen={setModalDeleteOpen}
          handleModalEdit={handleModalEdit}
          deletePersona={deletePersona}
          handleOpenModalDelete={handleOpenModalDelete}
        />

        <ModalPersona
          isAdd={isAdd}
          postPersona={postPersona}
          putPersona={putPersona}
          show={show}
          handleClose={handleClose}
          showData={showData}
          inputName={inputName}
          handleChangeName={handleChangeName}
          inputLastname={inputLastname}
          handleChangeLastname={handleChangeLastname}
          inputHobby={inputHobby}
          handleChangeHobby={handleChangeHobby}
        />

        <ModalDelete
          id={id}
          modalDeleteOpen={modalDeleteOpen}
          setModalDeleteOpen={setModalDeleteOpen}
          inputName={inputName}
          deletePersona={deletePersona}
        />
      </Container>
    </React.Fragment>
  );
};
