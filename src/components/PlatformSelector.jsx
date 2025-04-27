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

function PlatformSelector({ onSelectPlatform, selectedPlatform }) {
  // taking 'onSelectPlatform' and 'selectedPlatform' as props
  const { data, error } = useFetchData("/platforms/lists/parents");

  if (error) return null;
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {
            selectedPlatform?.name || "Platforms" // Changing text of Menu Button to selected platform
          }
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => onSelectPlatform(platform)} // passing 'platform' object to prop 'onSelectPlatform'
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

export default PlatformSelector;
