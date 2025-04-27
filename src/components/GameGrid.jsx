import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useFetchData from "../customHooks/useFetchData";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid({ selectedGenre, selectedPlatform }) {
  const { data, error, isLoading } = useFetchData(
    // Passing 3 parameters to 'useFetchData' function
    "/games", // endpoint
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } }, // axios params as '?platforms=id' only when 'selectedPlatform' contains a valid value
    [selectedGenre?.id, selectedPlatform?.id] // 'useEffect' dependencies
  );

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}
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
