import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import useFetchData from "../customHooks/useFetchData";
import { BsChevronDown } from "react-icons/bs";

function PlatformSelector() {
  const { data, error } = useFetchData("/platforms/lists/parents"); // Fetching data from parent platforms

  if (error) return null; // if 'error' contains value then return nothing
  return (
    // if 'error' does not contains any value then return <Menu>
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Platforms
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem key={platform.id}>{platform.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

export default PlatformSelector;
