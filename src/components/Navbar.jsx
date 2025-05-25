import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.jpeg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./searchBar";

function Navbar({ onSearch }) {
  return (
    <>
      <HStack>
        <Image src={logo} boxSize="80px" borderRadius={10} />
        <SearchBar onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
}

export default Navbar;
