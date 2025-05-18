import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useFetchData from "../customHooks/useFetchData";
import CropImage from "../services/CropImage";

// 'onSelectGenre' prop is called to send selected 'genre' value
// 'selectedGenre' prop is called to receive selected 'genre' value
function GenresList({ onSelectGenre, selectedGenre }) {
  const { data, error, isLoading } = useFetchData("/genres");
  return (
    <>
      {error && null}
      {isLoading && <Spinner />}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="6px">
            <HStack>
              <Image
                boxSize="45px"
                borderRadius="5px"
                src={CropImage(genre.image_background)}
              />
              <Button
                variant="link"
                onClick={() => onSelectGenre(genre)} // selected 'genre' value is passed to 'onSelectGenre prop'
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"} // selected 'genre' value is received from 'selectedGenre prop'
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
