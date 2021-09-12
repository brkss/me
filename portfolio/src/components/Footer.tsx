import React from "react";
import { Box, Link } from "@chakra-ui/react";
import * as ReactIcons from "react-icons/all";

export const Footer: React.FC = () => {
  return (
    <Box textAlign="center">
      <Link href="https://twitter.com/avocadoyouate" fontSize="21px" isExternal>
        <ReactIcons.FiTwitter
          style={{ display: "inline-block", marginRight: "10px" }}
        />
      </Link>
      <Link href="https://github.com/brkss" fontSize="21px" isExternal>
        <ReactIcons.FiGithub style={{ display: "inline-block" }} />
      </Link>
    </Box>
  );
};
