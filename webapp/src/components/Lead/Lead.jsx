import React, { useState } from "react";
import styled from "styled-components";
import { Container as GridContainer, Row, Col } from "react-grid-system";

const Form = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-bottom: 21px;
`;

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: #edf5fa;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: #6b747b;
  }
`;

const Button = styled.button`
  border-radius: 10px;
  width: 50%;
  background-color: #6a7fe6;
  font-size: 24px;
  color: white;
  padding: 10px;
  border-width: thin;
  :hover {
    cursor: pointer;
    background-color: #1a35b8;
  }
`;

function Lead({ post_id, setLeadSend }) {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    tel: "",
    query: "",
  });
  const [message, setMessage] = useState(null);

  const handleInputForm = (e) => {
    console.log(e.target);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePostLead = async () => {
    console.log(form);
    try {
      fetch("http://localhost:3002/api/dealer/1/leads/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "true",
        },
        body: JSON.stringify({ ...form, post_id: post_id }),
        credentials: "include",
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.message) {
            setMessage(res.message);
          } else {
            setMessage(null);
            console.log("lead ok");
            setLeadSend(true);
          }
        });
    } catch (error) {
      setMessage(error);
    }
  };

  return (
    <div
      style={{
        textAlign: "-webkit-center",
        background: "white",
        padding: "10px",
      }}
    >
      <Form>
        <h3>Compartinos algunos datos de contacto</h3>
        <GridContainer style={{ textAlign: "center" }}>
          <Row>
            <Col xs={12} xl={6} style={{ margin: 0 }}>
              <Input
                id="first_name"
                name="first_name"
                onChange={handleInputForm}
                type="text"
                placeholder="Nombre"
                value={form.first_name}
              />
            </Col>
            <Col xs={12} sm={6} style={{ margin: 0 }}>
              <Input
                id="last_name"
                name="last_name"
                onChange={handleInputForm}
                type="text"
                placeholder="Apellido"
                value={form.last_name}
              />
            </Col>
            <Col xs={12} sm={6} style={{ margin: 0 }}>
              <Input
                id="email"
                name="email"
                onChange={handleInputForm}
                type="text"
                placeholder="Email"
                value={form.email}
              />
            </Col>
            <Col xs={12} sm={6} style={{ margin: 0 }}>
              <Input
                id="tel"
                name="tel"
                onChange={handleInputForm}
                type="text"
                placeholder="Tel"
                value={form.tel}
              />
            </Col>
            <Col xs={12} sm={6} style={{ margin: 0 }}>
              <Input
                id="query"
                name="query"
                onChange={handleInputForm}
                type="text"
                placeholder="Radicacion del vehículo"
                value={form.query}
              />
            </Col>
          </Row>
        </GridContainer>
      </Form>
      <Button onClick={handlePostLead}>Cotizar</Button>
      {message && <h3>Ingrese todos los campos</h3>}
    </div>
  );
}

export default Lead;
