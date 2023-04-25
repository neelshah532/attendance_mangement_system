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
    <Box bg="Transparent" paddingTop={32} overflow="hidden">
      <Box
        mt={10}
        ml={4}
           style={{ overflowY:"scroll", height: "50vh" }}
         > 
      {getAllQueries.queries.map((items) => {
        return (
          <Box
            bgColor="white"
            width={950}
            borderRadius={15}
            mt={2}
            align="center"
            mx="40px"
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
