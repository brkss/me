import React from "react";
import {
  Intro,
  About,
  Inspiration,
  Things,
  Twitch,
  Github,
  Footer,
} from "../components";
import { Box } from "@chakra-ui/react";

export const Home: React.FC = () => {
  return (
    <Box>
      <Intro />
      <About />
      <Inspiration />
      <Things />
      <Twitch />
      <Github />
      <Footer />
    </Box>
  );
};
