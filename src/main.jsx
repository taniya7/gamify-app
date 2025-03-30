import { StrictMode } from "react"; // 'StrictMode' is a React component that helps detect potential issues during development
import { createRoot } from "react-dom/client"; //  'createRoot' is a React 18 API for creating the root of the React application
import {
  ChakraProvider, // 'ChakraProvider' is the main provider that applies Chakra UI styles.
  ColorModeScript, // 'ColorModeScript' is a component that ensures the correct color mode (light/dark) is applied before React renders the app
} from "@chakra-ui/react";
import theme from "./config/Theme.js"; // importing customized theme
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // fetches root (<div id="root"></div>) and renders React application inside it
  <StrictMode>
    <ChakraProvider
      theme={theme} // applies customized theme across the application
    >
      <ColorModeScript
        initialColorMode={theme.config.initialColorMode} // ensures the correct color mode is applied on first load
      />
      <App />
    </ChakraProvider>
  </StrictMode>
);
