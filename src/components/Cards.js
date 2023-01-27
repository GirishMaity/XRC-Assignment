import React, { useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  left: 270px;
`;

const Card = styled.div`
  width: 300px;
  height: 200px;
  background-color: #2d3436;
  box-shadow: 5px 5px 8px #222, -5px -5px 8px #444;
  transition: all 0.3s ease;
  border-radius: 15px 15px 15px 15px;
  margin: 10px;
  padding: 10px;
`;

const CardTitle = styled.div`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;

const AddCardContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  background-color: #2d3436;
  color: #ffffff;
  border-radius: 10px;
  border: none;
  box-shadow: 2px 2px 10px #000000, -2px -2px 10px #ffffff;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #2d3436;
  color: #ffffff;
  border-radius: 10px;
  border: none;
  box-shadow: 2px 2px 10px #000000, -2px -2px 10px #ffffff;
  cursor: pointer;
  &:disabled {
    background-color: #a4b0be;
    cursor: not-allowed;
  }
`;

const Cards = (projectName) => {
  const [cards, setCards] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addCard = (projectName) => {
    const newCard = { projectName };
    setCards([...cards, newCard]);
    setInputValue("");
  };
  return (
    <div className="ml-72">
      <CardContainer>
        {cards.map((card, index) => (
          <Card key={index}>
            <CardTitle>{card.projectName}</CardTitle>
          </Card>
        ))}
      </CardContainer>
      <AddCardContainer>
        <Input
          placeholder="Enter project name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button onClick={() => addCard(inputValue)} disabled={!inputValue}>
          Add Card
        </Button>
      </AddCardContainer>
    </div>
  );
};

export default Cards;
