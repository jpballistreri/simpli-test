import React from "react";
import styled from "styled-components";

function ItemCar({ car }) {
  const { model, description } = car.attributes;
  const picUrl =
    car.attributes.pics.data != null
      ? "http://localhost:8000" +
        car.attributes.pics.data[0].attributes.formats.thumbnail.url
      : "";

  const Container = styled.div`
    text-align: center;
    border: solid 1px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 10px;
  `;
  const Button = styled.button`
    &:hover {
      background-color: lightblue;
      cursor: pointer;
    }
  `;
  const Title = styled.h2``;
  const Description = styled.p``;
  const Image = styled.img`
    margin-left: auto;
    margin-right: auto;
    width: 200px;
  `;

  console.log(car);
  console.log(picUrl);
  return (
    <Container>
      <Title>{model}</Title>

      <Description>{description}</Description>
      <Image src={picUrl} />
      <Button>Comprar</Button>
    </Container>
  );
}

export default ItemCar;
