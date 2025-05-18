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

// 'onSelectPlatform' prop is called to send selected 'platform' value
// 'selectedPlatform' prop is called to receive selected 'platform' value
function PlatformSelector({ onSelectPlatform, selectedPlatform }) {
  const { data, error } = useFetchData("/platforms/lists/parents");

  if (error) return null;
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {
            selectedPlatform?.name || "Platforms" // selected 'platform' value is received from 'selectedPlatform prop'
          }
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => onSelectPlatform(platform)} // selected 'platform' value is passed to 'onSelectPlatform prop'
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
