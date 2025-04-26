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

function GenresList({ onSelectGenre }) {
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
              <Button // Changing 'Text' to 'Button' with variant as 'link' for onClick changes
                variant="link"
                onClick={() => onSelectGenre(genre)} // passing 'genre' object to prop 'onSelectGenre'
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
