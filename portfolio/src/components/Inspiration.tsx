import React from "react";
import { Box, Checkbox, Heading, Text, SimpleGrid } from "@chakra-ui/react";

const persons = [
  {
    name: "Kanye West",
    checked: true,
  },
  {
    name: "George Hotz",
    checked: false,
  },
  {
    name: "Luke Smith",
    checked: false,
  },
  {
    name: "Jay Z",
    checked: true,
  },
  {
    name: "Russ",
    checked: false,
  },
  {
    name: "Ivan Zhao",
    checked: false,
  },
  {
    name: "Ben awad",
    checked: false,
  },
  {
    name: "Steve Huffman",
    checked: false,
  },
  {
    name: "Justin Kan",
    checked: false,
  },
];

export const Inspiration: React.FC = () => {
  return (
    <Box mt={5}>
      <Heading fontSize={{ base: "1.5rem", lg: "2.25rem" }} mb={2}>
        Who inspire me.{" "}
      </Heading>
      <Text fontSize="16px" mb={3}>
        Literally any one can inspire me those are just the ones i remember 🤓.
      </Text>
      <SimpleGrid columns={[2, null, 3]} spacing="9px">
        {persons.map((pers) => (
          <Checkbox colSpan={2} isDisabled defaultIsChecked>
            {pers.name}
          </Checkbox>
        ))}
      </SimpleGrid>
    </Box>
  );
};
