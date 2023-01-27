import React, { useState } from "react";
import styled from "styled-components";
import { Plus } from "react-feather";

const CardWrapper = styled.div`
  /* Neomorphism styling for card */
  background: #2d3436;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3), -2px -2px 10px #ffffff;

  /* Additional styling for project card */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const AddButton = styled(CardWrapper)`
  /* Additional styling for add button */
  background: #6c5ce7;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 150px;
  height: 150px;
`;

const Cards2 = () => {
  const [cards, setCards] = useState([]);

  const addCard = (name) => {
    setCards([...cards, { name }]);
  };

  return (
    <div>
      {cards.map((card) => (
        <CardWrapper key={card.name}>
          <h3>{card.name}</h3>
        </CardWrapper>
      ))}
      <AddButton onClick={() => addCard("")}>
        <Plus size={40} />
        <h3>Add Card</h3>
      </AddButton>
    </div>
  );
};

export default Cards2;
