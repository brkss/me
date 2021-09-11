import React from "react";
import { Intro, About, Inspiration } from "../components";
import { Box } from "@chakra-ui/react";

export const Home: React.FC = () => {
  return (
    <Box>
      <Intro />
      <About />
      <Inspiration />
    </Box>
  );
};
