"use client";
import {
  extendBaseTheme,
  type ChakraTheme,
  type ThemeConfig,
} from "@chakra-ui/react";
const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "gamma",
};
export const theme = extendBaseTheme({
  config,
  fonts: {
    body: "var(--font--plaak-regular)",
    heading: "var(--font--plaak-heavy)",
  },
}) as ChakraTheme;
