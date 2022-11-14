import { useState, useEffect } from "react";
import ItemCar from "../components/itemCar/itemCar";
import styled from "styled-components";
import { Container as GridContainer, Row, Col } from "react-grid-system";
import Hero from "../components/Hero/Hero";

function MainView() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // update update the list of cars
    // when the component is rendered for the first time
    update();
  }, []);

  // This function updates the component with the
  // current todo data stored in the server
  function update() {
    fetch("http://localhost:8000/api/cars?populate=*", {
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer d5ee6bce4d25bc83f5f3cf3c655ee5c344fe9f003d5c644f727db7ecc8bf68fb83c1c99ed988363887bd57b9d7ed5b920076c06b759ba6c03ab9be76f894733d550bc4ee89b566cf31c45e81283ca0ea0309e85376f37d5fe70b4af4ab428cf70573683db6b9b1fba1c31873038f5da22cebdb6224e15ccf3dae592b88217527",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setCars(res.data);
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

      <GridContainer>
        <Title>
          <Row>
            <Col xs={4}>Toyota</Col>
            <Col xs={4} style={{ textAlign: "center" }}>
              CARS
            </Col>
          </Row>
        </Title>
      </GridContainer>
      <GridContainer>
        <Row>
          {cars.map((car, i) => {
            return (
              <Col xs={12} xl={6} xxl={4}>
                <ItemCar car={car} />
              </Col>
            );
          })}
        </Row>
      </GridContainer>
    </>
  );
}

export default MainView;
