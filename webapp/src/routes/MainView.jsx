import { useState, useEffect } from "react";
import ItemPost from "../components/itemPost/itemPost";
import styled from "styled-components";
import { Container as GridContainer, Row, Col } from "react-grid-system";
import Hero from "../components/Hero/Hero";

function MainView() {
  const [items, setCars] = useState([]);

  useEffect(() => {
    updateCarList();
  }, []);

  function updateCarList() {
    fetch("http://localhost:3002/api/dealer/1/vehicles/", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCars(res);
      });
  }

  function getToken() {
    fetch("http://localhost:3002/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify({
        userId: "12121",
        userName: "Juan",
      }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        //setCars(res);
      });
  }

  const Title = styled.h2`
    text-align: left;
    background-color: #eb0a1e;
    color: #ffe4da;
  `;

  return (
    <>
      <Hero />

      <GridContainer style={{ marginTop: "50px", backgroundColor: "#f4f4f5" }}>
        <Row>
          {items.map((item, i) => {
            return (
              <Col xs={12} xl={6} xxl={4}>
                <ItemPost item={item} />
              </Col>
            );
          })}
        </Row>
      </GridContainer>
    </>
  );
}

export default MainView;
