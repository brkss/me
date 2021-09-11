import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
//import styled  from 'styled-component';

export const Intro: React.FC = () => {
  return (
    <Box mt={5}>
      <Heading mb={4} fontWeight={"bold"}>
        Hello! I'm
        <a href="https://github.com/brkss"> @brkss</a>.
      </Heading>
      <Text fontSize={18}>
        {" "}
        I love open source! <br />
        This is where i share updates, report things. You'll find stuff about
        code, music, food, health and whatever else i'm into these days.{" "}
      </Text>
    </Box>
  );
};
