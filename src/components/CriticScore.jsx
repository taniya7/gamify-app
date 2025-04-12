import { Badge } from "@chakra-ui/react";

function CriticScore({ score }) {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  // if score > 75 then "green", if score > 65 then "yellow", if score <= 65 then "red"

  return (
    <>
      <Badge colorScheme={color} fontSize="16px" borderRadius={5} paddingX={2}>
        {score}
      </Badge>
    </>
  );
}

export default CriticScore;
