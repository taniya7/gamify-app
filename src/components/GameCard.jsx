import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import CropImage from "../services/CropImage";
import GameCardContainer from "./GameCardContainer";
import RatingEmoji from "./RatingEmoji";

function GameCard({ game }) {
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
            <Heading fontSize={"xl"}>
              {game.name}{" "}
              <RatingEmoji
                rating={game.rating_top} // passing 'rating' as prop with value 'game.rating_top'
              />
            </Heading>
          </CardBody>
        </Card>
      </GameCardContainer>
    </>
  );
}

export default GameCard;
