import { Box } from "@chakra-ui/react";

function GameCardContainer({ children }) {
  // taking 'children' as prop because other component will be wrapped in this component
  return (
    <>
      <Box // common container for both GameCard and GameCardSkeleton with same styling
        width="300px" // (optional) this can affect the responsiveness of both GameCard and GameCardSkeleton
        borderRadius={10}
        overflow={"hidden"}
      >
        {children}
      </Box>
    </>
  );
}

export default GameCardContainer;
