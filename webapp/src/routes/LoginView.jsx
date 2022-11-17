import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Form = styled.div`
  text-align: center;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  margin-bottom: 21px;
  background: white;
  width: 300px;
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

function LoginView() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", password: "" });
  const [message, setMessage] = useState(null);

  const handleInputForm = (e) => {
    console.log(e.target);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      fetch("http://localhost:3002/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "true",
        },
        body: JSON.stringify({
          userId: form.name,
          userName: form.password,
        }),
        credentials: "include",
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.message === "userId & userName is required")
            setMessage(res.message);
          else {
            setMessage(null);
            navigate("/");
          }
        });
    } catch (error) {
      setMessage(error);
    }
  };

  function deleteCookie() {
    console.log("deleting");
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }

  const handleLogout = async () => {
    deleteCookie();
  };

  return (
    <div style={{ textAlign: "-webkit-center" }}>
      <Form>
        <h2>Ingrese usuario y contraseña</h2>
        <Input
          id="label"
          name="name"
          onChange={handleInputForm}
          type="text"
          placeholder="Nombre"
          value={form.name}
        />
        <Input
          id="label2"
          name="password"
          onChange={handleInputForm}
          type="text"
          placeholder="Contraseña"
          value={form.password}
        />
        <Button onClick={handleLogin}>Login</Button>
        <Button onClick={handleLogout}>Logout</Button>
        {message && <h3>Ingrese usuario y contraseña</h3>}
      </Form>
    </div>
  );
}

export default LoginView;
