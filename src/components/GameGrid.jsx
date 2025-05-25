import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useFetchData from "../customHooks/useFetchData";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid({ queryString }) {
  const { data, error, isLoading } = useFetchData(
    "/games",
    {
      params: {
        genres: queryString.genre?.id,
        platforms: queryString.platform?.id,
        ordering: queryString.sortOrder,
        search: queryString.searchText,
      },
    },
    [queryString]
  );

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  {
    error && <Text>{error}</Text>;
  } // error will not be rendered on UI

  return (
    <>
      {
        error && <Text>{error}</Text> // error will be rendered on UI
      }

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={7}>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
