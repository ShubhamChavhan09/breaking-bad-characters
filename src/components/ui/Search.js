import React, { useState } from "react";
import styled from "styled-components";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");
  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <Section>
      <form>
        <Input
          type="text"
          className="form-control"
          placeholder="Search characters"
          value={text}
          autoFocus
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </Section>
  );
};

export default Search;

const Section = styled.section`
  height: 100px;
`;

const Input = styled.input`
  display: block;
  padding: 10px;
  font-size: 20px;
  border: 0;
  border-radius: 5px;
  width: 60%;
  margin: auto;
  outline: none;
`;
