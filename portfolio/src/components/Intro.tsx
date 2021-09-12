import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import draw from "../inc/scrach.png";
//import styled  from 'styled-component';

export const Intro: React.FC = () => {
  return (
    <Box mt={5}>
      <Box textAlign="center" w="100%">
        <Image opacity={0.45} src={draw} margin="auto" />
      </Box>
      <Heading
        mb={4}
        fontSize={{ base: "1.5rem", lg: "2.25rem" }}
        fontWeight={"bold"}
      >
        Hello! I'm
        <a href="https://github.com/brkss"> @brkss</a>.
      </Heading>
      <Text fontSize={"16px"}>
        {" "}
        I love open source! <br />
        This is where i share updates, report things. You'll find stuff about
        code, music, food, health and whatever else i'm into these days.{" "}
      </Text>
    </Box>
  );
};
