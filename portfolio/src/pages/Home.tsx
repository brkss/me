import React from "react";
import { Intro, About, Inspiration, Things, Twitch } from "../components";
import { Box } from "@chakra-ui/react";

export const Home: React.FC = () => {
  return (
    <Box>
      <Intro />
      <Twitch />
      <About />
      <Inspiration />
      <Things />
    </Box>
  );
};
