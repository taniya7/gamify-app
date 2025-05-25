import { Heading } from "@chakra-ui/react";

function GameHeading({ queryString }) {
  // taking 'queryString' as prop to access the current selected values
  const heading = `${queryString.genre?.name || ""} ${
    queryString.platform?.name || ""
  } Games`; // using template string for dynamic rendering based on if values are present or not
  return (
    <>
      <Heading as="h1" marginBottom={4} fontSize="5xl">
        {heading}
      </Heading>
    </>
  );
}

export default GameHeading;
