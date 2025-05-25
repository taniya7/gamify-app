import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import platformData from "../data/platformData"; // importing 'platformData'

function PlatformSelector({ onSelectPlatform, selectedPlatform }) {
  // const { data, error } = useFetchData("/platforms/lists/parents");
  // if (error) return null;

  const data = platformData; // using 'platformData' as static data

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => onSelectPlatform(platform)}
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
