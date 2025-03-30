import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <HStack>
        <Switch isChecked={colorMode == "dark"} onChange={toggleColorMode} />
        <Text>{colorMode == "dark" ? "Dark" : "Light"} Mode</Text>
      </HStack>
    </>
  );
}

export default ColorModeSwitch;
