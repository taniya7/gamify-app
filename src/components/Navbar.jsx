import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.jpeg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./searchBar";

function Navbar({ onSearch }) {
  return (
    <>
      <HStack>
        <Image src={logo} boxSize="80px" borderRadius={10} />
        <SearchBar
          onSearch={onSearch} // 2. passing same 'onSearch' prop to 'SearchBar' component
        />
        <ColorModeSwitch />
      </HStack>
    </>
  );
}

export default Navbar;

/*
'onSearch' on the left is the prop name you're passing to SearchBar. 
'onSearch' on the right is the function reference(variable) of 'handleOnSearch', defined in the parent component (App).
*/
