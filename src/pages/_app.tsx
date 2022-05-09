import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import "../styles/animations.css";

import "@fontsource/roboto-mono/";
import "@fontsource/roboto-mono/700.css";

import { theme } from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
