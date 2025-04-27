import { Box, Button, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import "./App.css";
import { useState, useEffect } from "react";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  useEffect(() => {
    console.log("Current Selected Genre (after update):", selectedGenre);
    console.log("Current Selected Platform (after update):", selectedPlatform); // Current selected Platform value is consoled, only when 'selectedPlatform' value is updated
  }, [selectedGenre, selectedPlatform]);

  function handleOnSelectGenre(genre) {
    setSelectedGenre(genre);
  }

  function handleOnSelectPlatform(platform) {
    // Defining 'handleOnSelectPlatform' function
    setSelectedPlatform(platform);
  }

  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" paddingTop="15px">
            <GenresList
              onSelectGenre={handleOnSelectGenre}
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Show>

        <GridItem area="main" paddingTop="15px">
          <Box marginBottom={4}>
            <PlatformSelector
              onSelectPlatform={handleOnSelectPlatform} // Passing 'onSelectPlatform' as prop which is a function 'handleOnSelectPlatform' to fetch 'platform' value from 'PlatformSelector' component
              selectedPlatform={selectedPlatform} // Passing 'selectedPlatform' as prop to 'PlatformSelector' component to handle clicked effect
            />
          </Box>
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform} // Passing 'selectedPlatform' as prop with current value  to 'GameGrid' component to pass selected platform id as query string with endpoint
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
