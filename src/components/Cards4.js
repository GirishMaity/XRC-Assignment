import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 80vh;
  margin-left: 270px;
  margin-right: 10px;
  margin-top: 12px;
`;

const Card = styled.div`
  width: 190px;
  height: 254px;
  border-radius: 20px;
  background-color: #333;
  position: relative;
  padding: 1.8rem;
  border: 2px solid #c3c6ce;
  transition: 0.5s ease-out;
  overflow: visible;
  &:hover {
    border-color: #008bf8;
    box-shadow: 5px 5px 8px #222, -5px -5px 8px #444;

    Button {
      transform: translate(-50%, 50%);
      opacity: 1;
    }
  }
`;

const CardDetails = styled.div`
  color: black;
  height: 100%;
  gap: 0.5em;
  display: grid;
  place-content: center;
`;

const Button = styled.button`
  transform: translate(-50%, 125%);
  width: 60%;
  border-radius: 1rem;
  border: none;
  background-color: #008bf8;
  color: 2d7d46;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.5),
    inset -3px -3px 7px rgba(255, 255, 255, 0.05);
  transition: 0.3s;
  &:focus {
    box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.5),
      inset -1px -1px 2px rgba(255, 255, 255, 0.05);
    transition: 0.3s;
  }
  transition: 0.3s ease-out;
`;

const Text = styled.p`
  font-size: 1.5em;
  font-weight: bold;
`;

const Cards4 = () => {
  return (
    <Container>
      <Card>
        <CardDetails>
          <Text>Project 1</Text>
        </CardDetails>
        <Button>Github</Button>
      </Card>
    </Container>
  );
};

export default Cards4;
