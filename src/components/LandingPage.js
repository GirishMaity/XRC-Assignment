import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background: rgba(234, 243, 244, 1);

  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h1`
  color: #3f455a;
  font-size: 4rem;
  text-shadow: 2px 2px #636e72;
  font-family: "SF Pro Text";
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
  color: rgb(161, 161, 161);
  transition: 500ms;
  background-color: #008bf8;
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
