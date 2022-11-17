import React from "react";
import styled from "styled-components";
import { AiFillCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  align-items: center;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  margin-bottom: 21px;
  background: white;
`;

const Button = styled.button`
  border-radius: 10px;
  background-color: #575757;
  font-size: 24px;
  color: white;
  padding: 10px;
  border-width: thin;
  :hover {
    cursor: pointer;
    background-color: #162543;
  }
  width: 300px;
`;

const Text = styled.h2`
  margin: 10px 0px;
`;

function LeadOk() {
  const navigate = useNavigate();
  return (
    <Container>
      <AiFillCheckCircle style={{ fontSize: "100px", color: "#162543" }} />
      <Text>Gracias!</Text>
      <Text>Nos contactaremos a la brevedad.</Text>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Volver al inicio
      </Button>
    </Container>
  );
}

export default LeadOk;
