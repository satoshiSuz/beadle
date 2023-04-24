import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme, useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";

const theme = {
  config: {
    initialColorMode: "dark", // ダークモードをデフォルトに設定
    useSystemColorMode: false, // OSの設定を使わせない
  },
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};
export default App;
