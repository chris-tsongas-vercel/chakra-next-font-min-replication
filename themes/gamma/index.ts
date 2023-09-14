"use client";
import {
  extendBaseTheme,
  type ChakraTheme,
  type ThemeConfig,
} from "@chakra-ui/react";
import fonts from "./fonts";
const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "gamma",
};
export const theme = extendBaseTheme({
  config,
  fonts,
}) as ChakraTheme;
