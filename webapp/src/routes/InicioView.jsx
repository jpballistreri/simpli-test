import { useState, useEffect } from "react";
import ItemPost from "../components/itemPost/itemPost";
import styled from "styled-components";
import { Container as GridContainer, Row, Col } from "react-grid-system";
import Hero from "../components/Hero/Hero";
import { Link } from "react-router-dom";

const Title = styled.h2`
  text-align: left;
  background-color: #eb0a1e;
  color: #ffe4da;
`;

const ButtonLoginContainer = styled.div`
  text-align: center;
  margin: 20px;
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

function MainView() {
  const [items, setCars] = useState([]);
  const [loged, setLoged] = useState(false);

  useEffect(() => {
    updateCarList();
  }, []);

  function updateCarList() {
    fetch("http://localhost:3002/api/dealer/1/posts/", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "Unauthorized") {
          setLoged(false);
        } else {
          setCars(res);
          setLoged(true);
        }
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

  if (loged === true)
    return (
      <>
        <Hero />
        {items.length > 0 ? (
          <GridContainer
            style={{ marginTop: "50px", backgroundColor: "#cdd7de" }}
          >
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
        ) : (
          <h2>No hay posts</h2>
        )}
      </>
    );
  else {
    return (
      <ButtonLoginContainer>
        <Link
          to={`/login`}
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <Button>Login</Button>
        </Link>
      </ButtonLoginContainer>
    );
  }
}

export default MainView;
