import React from "react";
import { Box, Link } from "@chakra-ui/react";
import * as ReactIcons from "react-icons/all";

export const Footer: React.FC = () => {
  return (
    <Box mt={10} textAlign="center">
      <Link
        href="https://instagram.com/brahimberkasse"
        fontSize="21px"
        isExternal
      >
        <ReactIcons.FiInstagram
          style={{
            display: "inline-block",
            fontSize: "18px",
            marginRight: "10px",
          }}
        />
      </Link>
      <Link href="https://twitter.com/avocadoyouate" fontSize="21px" isExternal>
        <ReactIcons.FiTwitter
          style={{
            display: "inline-block",

            fontSize: "18px",
            marginRight: "10px",
          }}
        />
      </Link>
      <Link href="https://github.com/brkss" fontSize="21px" isExternal>
        <ReactIcons.FiGithub
          style={{
            display: "inline-block",

            fontSize: "18px",
          }}
        />
      </Link>
    </Box>
  );
};
