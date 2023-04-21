import React from "react";
import {
  Box,
  Image,
  Stack,
  Input,
  Text,
  Select,
  Button,
  Grid,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
// import {DatePicker} from 'chakra-ui-date-picker'
// import { Box, Image} from "@chakra-ui/react";
import background from "../images/background.png";
import curveBackground from "../images/Rectangle 9.png";

function AddTeacher() {
  const [value, setValue] = React.useState("1");
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
    <Box bg="#1A237E" h="100vh" w="206vh" overflow="hidden">
      <Image
        src={background}
        alt="Logo"
        w="691dp"
        h="100vh"
        mx="auto"
        mt="5px"
        opacity={0.5}
      />

      <Box
        maxW={{ base: "90%", sm: "80%", md: "300vh" }}
        maxH={{ base: "90%", sm: "80%", md: "100vh" }}
        justifyContent="center"
        alignitem="center"
        position="absolute"
        top="15%"
        left="13%"
        transform="translate(-8%, -15%)"
      >
        <Image src={curveBackground} top="10%" w="300vh" h="100vh" />
      </Box>
      <Box
        maxW={{ base: "90%", sm: "80%", md: "250vh" }}
        maxH={{ base: "90%", sm: "80%", md: "200vh" }}
        justifyContent="center"
        position="relative"
        top="3%"
        left="31%"
        transform="translate(-7%, -150%)"
        zIndex="10"
      >
        <Text
          mt="3"
          fontSize="50px"
          fontFamily={"noto-serif"}
          color="#1A237E"
          w="720px"
          h="85px"
          textAlign="center"
          pb={50}
          left="40%"
        >
          Add Teaching Staff
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={30}
          mx="-85px"
          mt={25}
        >
          <Stack spacing={65} direction={["row"]}>
            <Stack
            // spacing={8}
            // direction={['row']}
            >
              <Input
                type="text"
                placeholder="First Name"
                focusBorderColor="#1A237E"
                _placeholder={{ color: "#1A237E" }}
                fontFamily={"noto-serif"}
                color="#1A237E"
                w={250}
              />
              <Input
                type="text"
                focusBorderColor="#1A237E"
                placeholder="Middle Name"
                _placeholder={{ color: "#1A237E" }}
                fontFamily={"noto-serif"}
                color="#1A237E"
                w={250}
              />
              <Input
                type="text"
                focusBorderColor="#1A237E"
                placeholder="Last Name"
                _placeholder={{ color: "#1A237E" }}
                fontFamily={"noto-serif"}
                color="#1A237E"
                w={250}
              />
              <Input
                type="text"
                focusBorderColor="#1A237E"
                placeholder="Type"
                _placeholder={{ color: "#1A237E" }}
                fontFamily={"noto-serif"}
                color="#1A237E"
                w={250}
              />
              <Stack direction="row" fontFamily={"noto-serif"}>
                <Text
                  fontFamily={"noto-serif"}
                  color="#1A237E"
                  fontSize={18}
                  textAlign="center"
                  w={250}
                >
                  Gender
                  <RadioGroup onChange={setValue} value={value}>
                    <Radio value="1" m={1}>
                      Male
                    </Radio>
                    <Radio value="2" m={1}>
                      Female
                    </Radio>
                    <Radio value="3" m={1}>
                      Other
                    </Radio>
                  </RadioGroup>
                </Text>
              </Stack>
            </Stack>
            <Stack
            // spacing={8}
            // direction={['row']}
            >
              <Input
                type="text"
                focusBorderColor="#1A237E"
                fontFamily={"noto-serif"}
                placeholder="Flat No."
                _placeholder={{ color: "#1A237E" }}
                color="#1A237E"
                w={250}
              />
              <Input
                type="text"
                focusBorderColor="#1A237E"
                fontFamily={"noto-serif"}
                placeholder="Area"
                _placeholder={{ color: "#1A237E" }}
                color="#1A237E"
                w={250}
              />
              <Input
                type="text"
                focusBorderColor="#1A237E"
                fontFamily={"noto-serif"}
                placeholder="City"
                _placeholder={{ color: "#1A237E" }}
                color="#1A237E"
                w={250}
              />
              <Input
                type="text"
                focusBorderColor="#1A237E"
                fontFamily={"noto-serif"}
                placeholder="State"
                _placeholder={{ color: "#1A237E" }}
                color="#1A237E"
                w={250}
              />
            </Stack>
            <Stack>
              <Input
                type="number"
                focusBorderColor="#1A237E"
                fontFamily={"noto-serif"}
                placeholder="Pincode"
                _placeholder={{ color: "#1A237E" }}
                color="#1A237E"
              />
              <Input
                type="tel"
                focusBorderColor="#1A237E"
                placeholder="Phone No."
                fontFamily={"noto-serif"}
                _placeholder={{ color: "#1A237E" }}
                color="#1A237E"
                w={250}
              />
              <Input
                type="email"
                focusBorderColor="#1A237E"
                fontFamily={"noto-serif"}
                placeholder="Email"
                _placeholder={{ color: "#1A237E" }}
                color="#1A237E"
              />
              <InputGroup>
                <Input
                  type={show ? "text" : "password"}
                  fontFamily={"noto-serif"}
                  placeholder="Password"
                  focusBorderColor="#1A237E"
                  _placeholder={{ color: "#1A237E" }}
                  color="#1A237E"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Stack>
          </Stack>
        </Grid>
        <Button
          type="submit"
          bg="#1A237E"
          color="white"
          _hover={{ bg: " #202A9A" }}
          w="100px"
          h="35px"
          fontWeight={"normal"}
          alignItem="center"
          left="22%"
          fontFamily={"noto-serif"}
          borderRadius={50}
          fontSize={20}
          mb="-110px"
        >
          Add
        </Button>
      </Box>
    </Box>
    </>
  );
}

export default AddTeacher;
