import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import CropImage from "../services/CropImage";
import GameCardContainer from "./GameCardContainer";

function GameCard({ game }) {
  // Moved Game Heading below Hstack
  // Added paddingBottom to Hstack to add space between Game Heading and Platform Icons
  return (
    <>
      <GameCardContainer>
        <Card>
          <Image src={CropImage(game.background_image)} />
          <CardBody>
            <HStack justifyContent="space-between" paddingBottom={2}>
              <PlatformIconsList
                iconsList={game.parent_platforms.map((i) => i.platform)}
              />
              <CriticScore score={game.metacritic} />
            </HStack>
            <Heading fontSize={"xl"}>{game.name}</Heading>
          </CardBody>
        </Card>
      </GameCardContainer>
    </>
  );
}

export default GameCard;
