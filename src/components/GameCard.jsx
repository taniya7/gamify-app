import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";

function GameCard({ game }) {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize={"xl"}>{game.name}</Heading>
          <PlatformIconsList
            iconsList={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
        </CardBody>
      </Card>
    </>
  );
}

export default GameCard;
