import React from "react";
import { Intro, About } from "../components";
import { Box } from "@chakra-ui/react";

export const Home: React.FC = () => {
  return (
    <Box>
      <Intro />
      <About />
    </Box>
  );
};
