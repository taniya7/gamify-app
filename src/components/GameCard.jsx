import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import CropImage from "../services/CropImage";

function GameCard({ game }) {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"}>
        <Image src={CropImage(game.background_image)} />
        <CardBody>
          <Heading fontSize={"xl"}>{game.name}</Heading>
          <HStack justifyContent="space-between">
            <PlatformIconsList
              iconsList={game.parent_platforms.map((i) => i.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
}

export default GameCard;
