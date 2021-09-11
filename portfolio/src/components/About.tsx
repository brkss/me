import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export const About: React.FC = () => {
  return (
    <Box mt={5}>
      <Heading mb={2}>About.</Heading>
      <Text>
        I'm a guy who love the internet i mean we all do right! how it changed
        the world all that stuff.
        <br /> most of time i work on full stack typescript apps some of them
        are corporate app and some of them are made to help othner or just for
        fun ! <br />
      </Text>
    </Box>
  );
};
