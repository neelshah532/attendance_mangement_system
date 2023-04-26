// import React from "react";
import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import bg from "../images/background.png"; // replace with your own image
import { useState } from "react";
import background from "../images/animation.gif";
import "../index.css"

function ViewQueries({ queries }) {
  console.log(queries)
  return (
    <Box bg="Transparent" paddingTop={32} overflow="hidden">
      <Box
        mt={-5}
        ml={20}
        className="scrollview"
         > 
      {queries.queries.map((items) => {
        return (
          <Box
            bgColor="white"
            width={950}
            borderRadius={15}
            ml="86"
            mt={2}
            align="center"
            key={items.enrollmentno}
          >
            <HStack gap={8}>
              <Text
                mx={2}
                p={3}
                fontFamily={"noto-serif"}
                color="#1A237E"
                fontSize={20}
              >
                {items.enrollmentno}
              </Text>
              <Text
                w={250}
                fontFamily={"noto-serif"}
                color="#1A237E"
                fontSize={20}
              >
                {items.firstname +
                  " " +
                  items.middlename +
                  " " +
                  items.lastname}
              </Text>
              <Text
                w={150}
                fontFamily={"noto-serif"}
                color="#1A237E"
                fontSize={20}
              >
                {items.description}
              </Text>
              <Text
              w={180}
                fontFamily={"noto-serif"}
                color="#1A237E"
                fontSize={20}
              >
                {items.subjectname}
              </Text>
            </HStack>
          </Box>
        );
      })}
    </Box>
    </Box>
  );
}

export default ViewQueries;
