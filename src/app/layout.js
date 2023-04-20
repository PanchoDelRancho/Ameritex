"use client";

import Navbar from "../components/navbar";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import "@fontsource/titillium-web";
import theme from "./theme";

import "./globals.css";

export const metadata = {
  title: "Ameritex Demo",
  description: "Made by Francisco Inspired by Ameritex Website",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <Navbar />
            {children}
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
