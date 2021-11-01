import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";
import styled from "styled-components";

function App() {
  const [items, setItems] = useState([]);
  const [isLLoading, setIsLLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [query]);

  const fetchData = async () => {
    await fetch(`https://www.breakingbadapi.com/api/characters/?name=${query}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
        setIsLLoading(false);
      });
  };

  return (
    <Container>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLLoading={isLLoading} items={items} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 0 20px;
`;
