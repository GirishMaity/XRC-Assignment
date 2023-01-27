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
  font-size: 2rem;
  text-shadow: 2px 2px #636e72;
`;

const Button = styled.button`
  display: flex;
 align-items: center;
 justify-content: center;
 gap: 10px;
 font-family: inherit;
 font-size: 13px;
 font-weight: 500;
 text-transform: uppercase;
 letter-spacing: 0.4px;
 color: #7e97b8;
 background-color: #e0e8ef;
 border-style: solid;
 border-width: 2px 100px 2px 100px;
 border-color: rgba(255, 255, 255, 0.333);
 border-radius: 40px 40px 40px 40px;
 padding: 16px 24px 16px 28px;
 transform: translate(0px, 0px) rotate(0deg);
 transition: 0.2s;
 box-shadow: -2px -1px 8px 0px #ffffff, 4px 2px 16px 0px rgb(95 157 231 / 48%);
}

  &:hover {
    color: #516d91;
 background-color: #E5EDF5;
 box-shadow: -1px -0.5px 4px 0px #ffffff, 2px 1px 8px 0px rgb(95 157 231 / 48%);
  }
  &:active {
     box-shadow: none;
  }
`;

const LandingPage = () => {
  return (
    <Container>
      <Text>Welcome to XRC</Text>
      <Link to="/login">
        <Button>Login</Button>
      </Link>
    </Container>
  );
};

export default LandingPage;
