import { AppProps } from "next/app";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "../styles/globals.css";

const theme = extendTheme({
  colors: {
    background: {
      base: "rgba(0, 9, 19, 1)",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
