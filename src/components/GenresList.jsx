import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";

import CropImage from "../services/CropImage";
import genreData from "../data/genreData";

function GenresList({ onSelectGenre, selectedGenre }) {
  const data = genreData;

  return (
    <>
      <Heading fontSize="25px" paddingY={3}>
        Genres
      </Heading>

      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="7px">
            <HStack spacing={3}>
              <Image
                boxSize="45px"
                borderRadius="5px"
                objectFit="cover"
                src={CropImage(genre.image_background)}
              />
              <Button
                variant="link"
                onClick={() => onSelectGenre(genre)}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                textDecoration={
                  genre.id === selectedGenre?.id ? "underline" : "normal"
                }
                fontSize="lg"
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenresList;
