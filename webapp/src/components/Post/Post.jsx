import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container as GridContainer, Row, Col } from "react-grid-system";
import { AiOutlineCalendar } from "react-icons/ai";
import { TbSteeringWheel } from "react-icons/tb";
import { BiCar } from "react-icons/bi";
import { BsDoorClosed } from "react-icons/bs";

function Post({ post }) {
  const Container = styled.div`
    text-align: left;

    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 10px;
    margin-bottom: 21px;
    background: white;
  `;
  const Button = styled.button`
    &:hover {
      background-color: lightblue;
      cursor: pointer;
    }
  `;
  const Title = styled.p``;
  const Price = styled.h2`
    margin: 0;
  `;
  const Image = styled.img`
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  `;

  return (
    <Container>
      <div style={{ backgroundColor: "#cdd7de", borderRadius: "5px" }}>
        <Image src={"https://freepngimg.com/thumb/car/4-2-car-png-hd.png"} />
      </div>
      <Title>{post.post_vehicles[0].vehicle.title}</Title>
      <Price>${post.price}</Price>
      <Title>Anticipo ${post.advance}</Title>

      <GridContainer style={{}}>
        <Row>
          <Col
            xs={3}
            style={{
              borderRight: "1px solid #ccc",
              textAlign: "center",
            }}
          >
            <AiOutlineCalendar />{" "}
            <Title>{post.post_vehicles[0].vehicle.year}</Title>
          </Col>
          <Col
            style={{
              borderRight: "1px solid #ccc",
              borderLeft: "1px solid #ccc",
              textAlign: "center",
            }}
            xs={3}
          >
            <TbSteeringWheel />
            <Title>{post.post_vehicles[0].vehicle.gear_box}</Title>
          </Col>
          <Col
            style={{
              borderRight: "1px solid #ccc",
              borderLeft: "1px solid #ccc",
              textAlign: "center",
            }}
            xs={3}
          >
            <BiCar />
            <Title>{post.post_vehicles[0].vehicle.type}</Title>
          </Col>
          <Col
            style={{ borderLeft: "1px solid #ccc", textAlign: "center" }}
            xs={3}
          >
            <BsDoorClosed />
            <Title>{post.post_vehicles[0].vehicle.doors}</Title>
          </Col>
        </Row>
      </GridContainer>
    </Container>
  );
}

export default Post;
