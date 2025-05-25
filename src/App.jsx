import { Box, Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import "./App.css";
import { useState, useEffect } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  const [queryString, setQueryString] = useState({});

  useEffect(() => {
    console.log("Current Selected Field (after update):", queryString);
  }, [queryString]);

  function handleOnSelectGenre(genre) {
    setQueryString({ ...queryString, genre });
  }

  function handleOnSelectPlatform(platform) {
    setQueryString({ ...queryString, platform });
  }

  function handleOnSelectSortOrder(sortOrder) {
    setQueryString({ ...queryString, sortOrder });
  }

  function handleOnSearch(searchText) {
    // 4. updating current 'searchText' value in 'queryString' object using 'handleOnSearch' function
    setQueryString({ ...queryString, searchText });
  }
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{ base: "1fr", lg: "240px 1fr" }}
      >
        <GridItem area="nav">
          <Navbar
            onSearch={handleOnSearch} // 1. passing 'onSearch' as prop to 'Navbar' component
          />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" paddingTop="15px">
            <GenresList
              onSelectGenre={handleOnSelectGenre}
              selectedGenre={queryString.genre}
            />
          </GridItem>
        </Show>

        <GridItem area="main" paddingTop="15px">
          <HStack marginBottom={5} spacing={5}>
            <PlatformSelector
              onSelectPlatform={handleOnSelectPlatform}
              selectedPlatform={queryString.platform}
            />
            <SortSelector
              onSelectSortOrder={handleOnSelectSortOrder}
              selectedSortOrder={queryString.sortOrder}
            />
          </HStack>

          <GameGrid
            queryString={queryString} // 5. passing updated 'querString' object with current 'searchText' value to 'GameGrid' component in order to fetch filtered games using 'queryString' and display on 'GameGrid'
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
