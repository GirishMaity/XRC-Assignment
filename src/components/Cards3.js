import React from "react";
import styled from "styled-components";

const FlipCard = styled.div`
  background-color: transparent;
  width: 190px;
  height: 254px;
  perspective: 1000px;
  font-family: sans-serif;
  &:hover {
    transform: rotateY(180deg);
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

const FlipCardFront = styled.div`
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid coral;
  border-radius: 1rem;
  background: linear-gradient(
    120deg,
    bisque 60%,
    rgb(255, 231, 222) 88%,
    rgb(255, 211, 195) 40%,
    rgba(255, 127, 80, 0.603) 48%
  );
  color: coral;
`;

const FlipCardBack = styled.div`
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid coral;
  border-radius: 1rem;
  background: linear-gradient(
    120deg,
    rgb(255, 174, 145) 30%,
    coral 88%,
    bisque 40%,
    rgb(255, 185, 160) 78%
  );
  color: white;
  transform: rotateY(180deg);
`;

const Title = styled.p`
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
`;

const Cards3 = () => {
  return (
    <div className="ml-72">
      <FlipCard>
        <FlipCardInner>
          <FlipCardFront>
            <Title>Flip card</Title>
          </FlipCardFront>
          <FlipCardBack>
            <Title>back side</Title>
          </FlipCardBack>
        </FlipCardInner>
      </FlipCard>
    </div>
  );
};

export default Cards3;
