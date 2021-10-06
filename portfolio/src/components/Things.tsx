import React from "react";
import { Box, Heading, List, ListItem, Link } from "@chakra-ui/react";

const projects = [
  {
    txt: "🥗 OpenCC",
    link: "https://opencc.tech",
  },
  {
    txt: "🍕 Opium",
    link: "#",
  },
  {
    txt: "👁 Hexlemons",
    link: "#",
  },
];

export const Things: React.FC = () => {
  return (
    <Box mt={5}>
      <Heading fontSize={{ base: "1.5rem", lg: "2.25rem" }} mb={2}>
        Things I’m building.
      </Heading>
      <List>
        {projects.map((prj) => (
          <ListItem mb={1}>
            <Link
              fontWeight={"bold"}
              href={prj.link}
              fontSize={"18px"}
              isExternal
            >
              {prj.txt}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
