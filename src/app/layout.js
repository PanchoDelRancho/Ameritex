"use client";

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import "@fontsource/titillium-web";
import theme from "./theme";

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <Navbar />
            {children}
            <Footer />
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
