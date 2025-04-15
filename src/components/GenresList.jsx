import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useFetchData from "../customHooks/useFetchData";
import CropImage from "../services/CropImage";

function GenresList() {
  const { data } = useFetchData("/genres");
  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="6px">
            <HStack>
              <Image
                boxSize="45px"
                borderRadius="5px"
                src={CropImage(genre.image_background)}
              />
              <Text>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenresList;
