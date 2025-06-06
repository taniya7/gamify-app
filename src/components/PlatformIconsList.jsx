import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  // importing icons from 'react-icons' package
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

function PlatformIconsList({ iconsList }) {
  const iconMap = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <>
      <HStack marginY={2}>
        {iconsList.map((icon) => (
          <Icon key={icon.id} as={iconMap[icon.slug]} />
        ))}
      </HStack>
    </>
  );
}

export default PlatformIconsList;
