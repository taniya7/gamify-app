import { Text } from "@chakra-ui/react";
import useFetchGames from "../customHooks/useFetchGames";

function GameGrid() {
  const { games, error } = useFetchGames(); // destructuring 'games' and 'error' from 'useFetchGames()'

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
