import { Badge } from "@chakra-ui/react";

function CriticScore({ score }) {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "red";

  return (
    <>
      <Badge colorScheme={color} fontSize="16px" borderRadius={5} paddingX={2}>
        {score}
      </Badge>
    </>
  );
}

export default CriticScore;
