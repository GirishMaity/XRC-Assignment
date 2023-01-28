import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background: #2d3436;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Text = styled.h1`
  color: #fff;
  font-size: 4rem;
  text-shadow: 2px 2px #636e72;
  font-family: "Damion", cursive;
`;

const Button = styled.button`
  margin: 12px;
  height: 3rem;
  width: 20rem;
  border-radius: 10px;
  background: linear-gradient(315deg, #494949, #3d3d3d);
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5),
    -3px -3px 7px rgba(255, 255, 255, 0.05);
  font-family: "Damion", cursive;
  border: none;
  font-size: 16px;
  color: rgb(161, 161, 161);
  transition: 500ms;
  &:hover {
    box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.5),
      inset -3px -3px 7px rgba(255, 255, 255, 0.05);
    color: #3498db;
    transition: 500ms;
  }
`;

const LandingPage = () => {
  return (
    <Container>
      <Text>Welcome to XRC</Text>
      <br />
      <Link to="/login">
        <Button>Login</Button>
      </Link>
    </Container>
  );
};

export default LandingPage;
