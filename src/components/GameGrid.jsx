import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useFetchGames from "../customHooks/useFetchGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  const { games, error, isLoading } = useFetchGames(); // 'isLoading' is destructured
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]; // 8 skeletons of card needs to be loaded because 1 page view shows 8 cards

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={10}
      >
        {isLoading && // when 'isLoading' is true then skeletons will be loaded and when its false cards will be loaded
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
