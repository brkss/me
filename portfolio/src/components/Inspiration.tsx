import React from "react";
import { Box, Checkbox, Heading, Text, Grid } from "@chakra-ui/react";

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
      <Heading mb={2}>Who inspire me. </Heading>
      <Text mb={3}>
        Literally any one can inspire me those are just the ones i remember 🤓.
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={3}>
        {persons.map((pers) => (
          <Checkbox isDisabled defaultIsChecked>
            {pers.name}
          </Checkbox>
        ))}
      </Grid>
    </Box>
  );
};
