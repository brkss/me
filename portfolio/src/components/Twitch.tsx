import React from "react";
import { Box, Heading, Link } from "@chakra-ui/react";
import * as ReactIcons from "react-icons/all";
export const Twitch: React.FC = () => {
  return (
    <Box padding={"10px 0 0"} mt={5}>
      <Link
        isExternal
        href="https://twitch.com/berkasse"
        d="block"
        padding="10px"
        rounded="4px"
        bg="#e3d4ff"
      >
        <Heading fontSize={{ md: "23px", base: "14px" }}>
          {" "}
          <ReactIcons.FiTwitch style={{ display: "inline" }} /> I stream often
          on twitch
        </Heading>
      </Link>
    </Box>
  );
};
