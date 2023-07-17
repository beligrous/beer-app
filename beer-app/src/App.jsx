import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Card from "./components/card";
import "./App.css";

function App() {
  const [recepies, setRecepies] = useState([]);

  const getBeerRecipes = useCallback(async (page) => {
    const res = await axios.get(
      `https://api.punkapi.com/v2/beers?page=${page}`
    );
    setRecepies(res.data);
  }, []);

  useEffect(() => {
    getBeerRecipes(1);
  }, [getBeerRecipes]);

  const renderRecepies = recepies.filter((element, index) => index < 15);

  return (
    <>
      <h1>Recepies</h1>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          width: "700px",
        }}
      >
        {renderRecepies.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </ul>
    </>
  );
}

export default App;
