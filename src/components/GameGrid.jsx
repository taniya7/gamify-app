import { SimpleGrid, Text } from "@chakra-ui/react";
import useFetchGames from "../customHooks/useFetchGames";
import GameCard from "./GameCard";

function GameGrid() {
  const { games, error } = useFetchGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={10}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
