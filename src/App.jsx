import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);

  useEffect(() => {
    // Current Selected Genre value is consoled, only when 'selectedGenre' value is updated
    console.log("Current Selected Genre (after update):", selectedGenre);
  }, [selectedGenre]);

  function handleOnSelectGenre(genre) {
    setSelectedGenre(genre);
    // React updates state asynchronously. When clicked, it still consoles old value which is 'null'
    // console.log(selectedGenre);
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
              onSelectGenre={handleOnSelectGenre} // passing 'onSelectGenre' as prop which is a function 'handleOnSelectGenre' to fetch 'genre' value from 'GenreList' component
            />
          </GridItem>
        </Show>

        <GridItem area="main" paddingTop="15px">
          <GameGrid
            selectedGenre={selectedGenre} // passing 'selectedGenre' as prop with current value of 'selectedGenre' to 'GameGrid' component
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
