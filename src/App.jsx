import { Box, Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import "./App.css";
import { useState, useEffect } from "react";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [queryString, setQueryString] = useState({}); // initially empty
  /* 
  queryString = {
  genre : {},
  platform : {},  
  }
  */

  // 'queryString' object will be consoled whenever it will be updated
  useEffect(() => {
    console.log("Current Selected Field (after update):", queryString);
  }, [queryString]);

  function handleOnSelectGenre(genre) {
    setQueryString({ ...queryString, genre }); // spreading existing 'queryString' object as it is and adding selected 'genre' object into it
  }

  function handleOnSelectPlatform(platform) {
    setQueryString({ ...queryString, platform }); // spreading existing 'queryString' object as it is and adding selected 'platform' object into it
  }

  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{ base: "1fr", lg: "240px 1fr" }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" paddingTop="15px">
            <GenresList
              onSelectGenre={handleOnSelectGenre}
              selectedGenre={queryString.genre} // queryString = {genre : {}, platform : {}}
            />
          </GridItem>
        </Show>

        <GridItem area="main" paddingTop="15px">
          <HStack marginBottom={5} spacing={5}>
            <PlatformSelector
              onSelectPlatform={handleOnSelectPlatform}
              selectedPlatform={queryString.platform} // queryString = {genre : {}, platform : {}}
            />
          </HStack>
          <GameGrid
            queryString={queryString} // entire updated 'queryString' object is passed containing ‘genre’ and ‘platform’ objects
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

/* To add responsiveness :
const breakpoints = {
  base: 0px
  sm: ~480px
  md: ~768px
  lg: ~992px
  xl: ~1280px
  "2xl": ~1536px
}
*/
