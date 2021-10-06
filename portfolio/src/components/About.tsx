import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export const About: React.FC = () => {
  return (
    <Box mt={5}>
      <Heading fontSize={{ base: "1.5rem", lg: "2.25rem" }} mb={2}>
        About.
      </Heading>
      <Text fontSize="16px">
        I'm a guy who love the internet i mean we all do right! most of time i
        work on full stack typescript apps some of them are corporate and some
        of them are made to help others or just for fun ! <br />
      </Text>
    </Box>
  );
};
