import React from "react";

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
// import { Box, Image} from "@chakra-ui/react";
import bg from "../images/background.png";
import curveBackground from "../images/Rectangle 9.png";
import {useState} from "react"
import background from "../images/animation.gif";

function AddSubject() {
  const [value, setValue] = useState("1");
  return (
    <Box bg="#1A237E" h="100vh" w="206vh" overflow={"hidden"}>
      <Image
        src={bg}
        alt="Logo"
        w="691dp"
        h="100vh"
        mx="auto"
        mt="5dp"
        opacity={0.5}
      />
      <Box
        maxW={{ base: "90%", sm: "80%", md: "300vh" }}
        maxH={{ base: "90%", sm: "80%", md: "100vh" }}
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="15%"
        left="13%"
        transform="translate(-8%, -15%)"
      >
        <Image
          // objectFit='fi'
          src={curveBackground}
          // left="20%"
          top="10%"
          w="300vh"
          h="100vh"
          opacity={1}
        />
      </Box>

      <Box
        maxW={{ base: "90%", sm: "80%", md: "560vh" }}
        maxH={{ base: "90%", sm: "80%", md: "150vh" }}
        justifyContent="center"
      >
        <Grid
          gap={{ base: "90%", sm: "80%", md: "110px" }}
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="30%"
          left="45%"
          transform="translate(-42%, -45%)"
          m={50}
        >
          <Text
            mt="-120"
            fontSize="45px"
            fontFamily={"noto-serif"}
            color="#1A237E"
            w="250px"
            h="50px"
            textAlign="center"
            // top="0"
            // left="50%"
            // mt="10"
            transform="translateX(85%)"
          >
            Add Subject
          </Text>
          <Stack direction={"row"} spacing={100}>
            <VStack>
              <Input
                placeholder="Subject Name"
                // size='md'
                color="#1A237E"
                focusBorderColor="#1A237E"
                fontFamily={"noto-serif"}
                _placeholder={{ color: "#1A237E", fontFamily: "noto-serif" }}
                width="300px"
              />
              <RadioGroup onChange={setValue} value={value}>
                <Stack direction="row">
                  <Radio value="1">Regular</Radio>
                  <Radio value="2">Elective</Radio>
                </Stack>
              </RadioGroup>
            </VStack>
          </Stack>
        </Grid>
        <Button
          type="submit"
          bg="#1A237E"
          color="white"
          _hover={{ bg: " #202A9A" }}
          w="120px"
          h="38px"
          alignSelf="center"
          left="34%"
          top="-75%"
          fontFamily={"noto-serif"}
          transform="translateX(120%)"
          mt="-80"
          size="md"
          borderRadius={50}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
}

export default AddSubject;
