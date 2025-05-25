import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useFetchData from "../customHooks/useFetchData";
import CropImage from "../services/CropImage";

function GenresList({ onSelectGenre, selectedGenre }) {
  const { data, error, isLoading } = useFetchData("/genres");
  return (
    <>
      <Heading
        fontSize="25px"
        paddingY={3} // adding heading to 'GenreList'
      >
        Genre
      </Heading>

      {error && null}
      {isLoading && <Spinner />}

      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="7px">
            <HStack spacing={3}>
              <Image
                boxSize="45px"
                borderRadius="5px"
                objectFit="cover" // image will be scaled w.r.t its container while preserving the aspect ratio
                src={CropImage(genre.image_background)}
              />
              <Button
                variant="link"
                onClick={() => onSelectGenre(genre)}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                textDecoration={
                  // adding another UI change when 'genre' is selected
                  genre.id === selectedGenre?.id ? "underline" : "normal"
                }
                fontSize="lg" // setting large font
                whiteSpace="normal" // text can wrap up to other line
                textAlign="left" // aliging text to left
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
