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
                onClick={() => onSelectGenre(genre)}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
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
