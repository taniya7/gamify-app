import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <HStack>
        <Switch isChecked={colorMode == "dark"} onChange={toggleColorMode} />
        <Text
          whiteSpace="nowrap" // 'nowrap' restricts text to come down to another line
        >
          {colorMode == "dark" ? "Dark" : "Light"} Mode
        </Text>
      </HStack>
    </>
  );
}

export default ColorModeSwitch;
