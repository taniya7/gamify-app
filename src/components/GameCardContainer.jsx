import { Box } from "@chakra-ui/react";

function GameCardContainer({ children }) {
  return (
    <>
      <Box
        borderRadius={10}
        overflow={"hidden"} // Removing fixed width for responsiveness
      >
        {children}
      </Box>
    </>
  );
}

export default GameCardContainer;
