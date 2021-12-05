import React from "react";
import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { Things } from "../components";

export const Home: React.FC = () => {
  return (
    <Box>
      <Center h={"100vh"}>
        <Box textAlign={"center"}>
          <Heading fontSize={"50px"}>🧘‍♂️</Heading>
          <Text fontWeight={"bold"}>things i'm building 👇</Text>
          <Things />
        </Box>
      </Center>
    </Box>
  );
};
