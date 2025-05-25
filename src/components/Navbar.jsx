import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

function Navbar({ onSearch }) {
  return (
    <>
      <HStack>
        <Image src={logo} boxSize="90px" borderRadius={10} objectFit="cover" />
        <SearchBar onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
}

export default Navbar;
