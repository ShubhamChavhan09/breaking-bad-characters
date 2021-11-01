import React from "react";
import CharacterItem from "./CharacterItem";
import styled from "styled-components";

const CharacterGrid = ({ isLLoading, items }) => {
  return isLLoading ? (
    <h1>Loading...</h1>
  ) : (
    <Cards>
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </Cards>
  );
};

export default CharacterGrid;

const Cards = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
