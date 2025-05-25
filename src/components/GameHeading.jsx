import { Heading } from "@chakra-ui/react";

function GameHeading({ queryString }) {
  const heading = `${queryString.genre?.name || ""} ${
    queryString.platform?.name || ""
  } Games`;
  return (
    <>
      <Heading as="h1" marginBottom={4} fontSize="5xl">
        {heading}
      </Heading>
    </>
  );
}

export default GameHeading;
