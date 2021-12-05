import React from "react";
import { Box, Heading, List, ListItem, Link } from "@chakra-ui/react";

const projects = [
  {
    txt: "🥗 opencc",
    link: "https://opencc.tech",
  },
  {
    txt: "🍕 opium",
    link: "#",
  },
];

export const Things: React.FC = () => {
  return (
    <Box textAlign={"left"} mt={5}>
      <List>
        {projects.map((prj) => (
          <ListItem mb={1}>
            <Link
              fontWeight={"bold"}
              href={prj.link}
              fontSize={"14px"}
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
