import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: { intialColorMode: "light", useSystemColorMode: false },
  fonts: {
    body: `'Titillium Web', sans-serif`,
  },
  colors: {
    ame: {
      100: "#000000",
      200: "#ffffff",
      300: "#ED1C24",
    },
  },
});

export default theme;
