import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import "./App.css";

function App() {
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{ base: "1fr", lg: "200px 1fr" }} // giving defined width to 'aside' and allowing 'main' to acquire remaining width
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>

        <Show above="lg">
          <GridItem
            area="aside"
            paddingTop="15px" // giving common top padding to both aside and main
          >
            <GenresList />
          </GridItem>
        </Show>

        <GridItem
          area="main"
          paddingTop="15px" // giving common top padding to both aside and main
        >
          <GameGrid />
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
