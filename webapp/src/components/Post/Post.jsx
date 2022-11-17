import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container as GridContainer, Row, Col } from "react-grid-system";
import { AiOutlineCalendar } from "react-icons/ai";
import { TbSteeringWheel, TbEngine } from "react-icons/tb";
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
  const Title = styled.h1`
    margin: 10px 0px;
  `;
  const Stock = styled.p`
    margin: 0px 0px 10px;
  `;
  const Price = styled.h2`
    margin: 0;
  `;
  const Image = styled.img`
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  `;

  return (
    <GridContainer style={{}}>
      <Row>
        <Col
          xs={12}
          xl={6}
          style={{
            borderRight: "1px solid #ccc",
            textAlign: "center",
          }}
        >
          <div style={{ backgroundColor: "#cdd7de", borderRadius: "5px" }}>
            <Image src={post.post_vehicles[0].vehicle.pic_url} />
          </div>
          <Price>Caracteristicas destacadas</Price>
          <GridContainer style={{ fontSize: "10px" }}>
            <Row>
              <Col
                xs={2}
                style={{
                  borderRight: "1px solid #ccc",
                  textAlign: "center",
                }}
              >
                <AiOutlineCalendar style={{ fontSize: "30px" }} />{" "}
                <Title>{post.post_vehicles[0].vehicle.year}</Title>
              </Col>
              <Col
                style={{
                  borderRight: "1px solid #ccc",
                  borderLeft: "1px solid #ccc",
                  textAlign: "center",
                }}
                xs={2}
              >
                <TbEngine style={{ fontSize: "30px" }} />
                <Title>{post.post_vehicles[0].vehicle.motor}</Title>
              </Col>
              <Col
                style={{
                  borderRight: "1px solid #ccc",
                  borderLeft: "1px solid #ccc",
                  textAlign: "center",
                }}
                xs={2}
              >
                <TbSteeringWheel style={{ fontSize: "30px" }} />
                <Title>{post.post_vehicles[0].vehicle.type_gear_box}</Title>
              </Col>
              <Col
                style={{
                  borderRight: "1px solid #ccc",
                  borderLeft: "1px solid #ccc",
                  textAlign: "center",
                }}
                xs={2}
              >
                <BiCar style={{ fontSize: "30px" }} />
                <Title>{post.post_vehicles[0].vehicle.type}</Title>
              </Col>
              <Col
                style={{ borderLeft: "1px solid #ccc", textAlign: "center" }}
                xs={3}
              >
                <BsDoorClosed style={{ fontSize: "30px" }} />
                <Title>{post.post_vehicles[0].vehicle.doors}</Title>
              </Col>
            </Row>
          </GridContainer>
        </Col>

        <Col
          xs={12}
          xl={6}
          style={{
            borderRight: "1px solid #ccc",
            textAlign: "center",
          }}
        >
          <Container>
            <Title>{post.post_vehicles[0].vehicle.title}</Title>
            <Stock>
              {post.stock > 0 ? "Stock disponible" : "No hay stock"}{" "}
            </Stock>
            <Price>${post.price}</Price>
            <Price>Reserva este auto por ${post.advance}</Price>
          </Container>
        </Col>
      </Row>
    </GridContainer>
  );
}

export default Post;
