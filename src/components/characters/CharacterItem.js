import React from "react";
import styled from "styled-components";
import defaultImage from "../../img/spinner.gif";

const CharacterItem = ({ item }) => {
  return (
    <Card>
      <CardInner>
        <CardFront>
          <Img
            defaultSource={defaultImage}
            src={item.img}
            onError={(event) => (event.target.src = "")}
            alt={item.name}
          />
        </CardFront>
        <CardBack>
          <Head>{item.name}</Head>
          <ul>
            <List>
              <strong>Actor Name:</strong> {item.portrayed}
            </List>
            <List>
              <strong>Nickname:</strong> {item.nickname}
            </List>
            <List>
              <strong>Birthday:</strong> {item.birthday}
            </List>
            <List>
              <strong>Status:</strong> {item.status}
            </List>
          </ul>
        </CardBack>
      </CardInner>
    </Card>
  );
};

export default CharacterItem;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

const Card = styled.div`
  cursor: pointer;
  background-color: transparent;
  height: 300px;
  perspective: 1000px;
  &:hover {
    ${CardInner} {
      transform: rotateY(180deg);
    }
  }
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #333;
  color: white;
  padding: 20px;
  transform: rotateY(180deg);
`;

const Img = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;

  @media (max-width: 500px) {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
`;

const Head = styled.h1`
  font-size: 25px;
  border-bottom: 1px #fff solid;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;
const List = styled.li`
  list-style: none;
  padding-bottom: 10px;
`;
