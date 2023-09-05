"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import dynamic from "next/dynamic";
import { type PropsWithChildren } from "react";

export function ThemeProvider({
  themeName = "basic",
  children,
}: {
  themeName?: string;
  children: React.ReactNode;
}) {
  const ChakraProvider = dynamic<PropsWithChildren>(
    () => import(`../../themes/${encodeURIComponent(themeName)}/Provider`)
  );
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
}
