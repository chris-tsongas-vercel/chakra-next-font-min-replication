import { ChakraProvider } from "@chakra-ui/react";
import { type PropsWithChildren } from "react";
import { theme } from ".";

const Provider = ({ children }: PropsWithChildren) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);
export default Provider;
