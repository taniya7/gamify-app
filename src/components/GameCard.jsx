import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

function GameCard({ game }) {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize={"xl"}>{game.name}</Heading>
        </CardBody>
      </Card>
    </>
  );
}

export default GameCard;
