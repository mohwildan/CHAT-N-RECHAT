import { extendTheme } from "@chakra-ui/react";
import { Button,Heading,Text } from "./components";

const components = {
  Button,
  Heading,
  Text
};

const colors = {
   dark: {
      50:"#0C1B4D"
   }
};

const styles = {
  global: {
    body: {
      bg: "#EEF2FF",
    },
  },
};

export const theme = extendTheme({ components, colors, styles });
