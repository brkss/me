import React from "react";
import { Box, Heading, Link } from "@chakra-ui/react";
import * as ReactIcons from "react-icons/all";

export const Github: React.FC = () => {
  return (
    <Box padding={"10px 0"}>
      <Link
        isExternal
        href="https://github.com/brkss"
        d="block"
        padding="10px"
        rounded="4px"
        bg="#333"
      >
        <Heading color="white" fontSize={{ md: "23px", base: "14px" }}>
          {" "}
          <ReactIcons.FiGithub style={{ display: "inline" }} /> Everything i'm
          working on
        </Heading>
      </Link>
    </Box>
  );
};
