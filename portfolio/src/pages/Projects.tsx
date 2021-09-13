import React from "react";
import {
  Center,
  Heading,
  Box,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";
import { things } from "../utils/data/things";

export const Projects: React.FC = () => {
  return (
    <Center height={"100vh"}>
      <Box>
        <Heading fontSize="24px" fontWeight={"bold"}>
          Things i've built.
        </Heading>
        <Box mt="10px">
          <UnorderedList>
            {things.map((thing) => (
              <ListItem>
                <Link isExternal href={thing.link}>
                  {thing.name ? thing.name : thing.link}
                </Link>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Box>
    </Center>
  );
};
