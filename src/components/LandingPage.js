import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(44, 47, 51, 1) 33%,
    rgba(67, 67, 67, 1) 100%
  );

  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-size: 4rem;
  text-shadow: 2px 2px #636e72;
  font-style: normal;
  font-weight: 700;
`;

const Button = styled.button`
  margin: 12px;
  height: 3rem;
  width: 20rem;
  border-radius: 10px;

  justify-content: center;
  align-items: center;
  border: none;
  font-size: 16px;

  transition: 500ms;
  background-color: rgba(26, 145, 250, 1);
  color: #fff;
  border-radius: 12px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5),
    -3px -3px 7px rgba(255, 255, 255, 0.05);
  transition: 0.3s;
  &:focus {
    box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.5),
      inset -1px -1px 2px rgba(255, 255, 255, 0.05);
    transition: 0.3s;
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
