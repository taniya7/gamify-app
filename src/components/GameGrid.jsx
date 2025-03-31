import { useEffect, useState } from "react";
import ClientAPI from "../services/ClientAPI";
import { Text } from "@chakra-ui/react";

function GameGrid() {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    ClientAPI.get("/games")
      .then((res) => {
        setGames(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err.message);
      });
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
