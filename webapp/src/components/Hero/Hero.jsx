import React from "react";
import styled from "styled-components";
import bgBanner from "./heroBg.png";

const WelcomeBanner = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${bgBanner});
  background-size: cover;
  background-position: center;
  color: white;
`;
const Title = styled.h1`
  text-align: left;
  margin: 0px;
`;
const Description = styled.h2`
  text-align: left;
`;

const Button = styled.button`
  border-radius: 10px;
  background-color: #6a7fe6;
  font-size: 24px;
  color: white;
  padding: 10px;
  border-width: thin;
`;

const TextContainer = styled.div`
  padding: 0;
  margin: 0px 15px 0px 15px;
`;

export default function Hero() {
  return (
    <>
      <WelcomeBanner>
        <TextContainer>
          <Title>SimpliTEC</Title>
          <Title>
            Conocé nuestras ofertas de vehiculos y adquirilo 100% online.
          </Title>
          <Description>
            No esperes más para obtener tu 0km, tenemos las mejores ofertas y
            planes de financiación
          </Description>
          <Button>Conocer ofertas</Button>
        </TextContainer>
      </WelcomeBanner>
    </>
  );
}
