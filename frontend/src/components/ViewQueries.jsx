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
import { useGetAllQueriesQuery } from "../service/amsSlice";
import background from "../images/animation.gif";

function ViewQueries({ employeeid }) {
  const { data: getAllQueries, isLoading: isQueriesDataLoading } =
    useGetAllQueriesQuery(employeeid);

  if (isQueriesDataLoading) {
    return (
      <Box bg="white" h="100vh" w="223vh" overflow="hidden">
        <Image src={bg} alt="loader" h="100vh" ml="27%" mt="5dp" />
      </Box>
    );
  }
  return (
    <Box bg="#1A237E" h="100vh" w="206vh" overflow="hidden">
      {getAllQueries.queries.map((items) => {
        return (
          <Box
            bgColor="white"
            width={650}
            borderRadius={15}
            m={2}
            align="center"
            mx="222px"
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
                p={3}
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
                p={3}
                fontFamily={"noto-serif"}
                color="#1A237E"
                fontSize={20}
              >
                {items.description}
              </Text>
              <Text
                p={3}
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
  );
}

export default ViewQueries;
