import { extendTheme } from "@chakra-ui/react"; // 'extendTheme' is a hook used to customize default theme

const config = {
  // defining/customizing the theme
  initialColorMode: "dark", // sets 'dark' mode when the app first loads
  useSystemColorMode: false, // if 'true', it automatically applies the user's OS color preference.
};

const theme = extendTheme({ config }); // setting the customized theme

export default theme; // exporting the customized theme
