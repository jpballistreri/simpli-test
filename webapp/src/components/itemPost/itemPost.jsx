import React from "react";
import styled from "styled-components";

function ItemPost({ item }) {
  const { title, description, pic_url, price } = item;

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
  const Title = styled.p``;
  const Price = styled.h2``;
  const Image = styled.img`
    margin-left: auto;
    margin-right: auto;
    width: 200px;
  `;

  return (
    <Container>
      <Title>{title}</Title>

      <Price>{price}</Price>
      <Image src={pic_url} />
      <Button>Comprar</Button>
    </Container>
  );
}

export default ItemPost;
