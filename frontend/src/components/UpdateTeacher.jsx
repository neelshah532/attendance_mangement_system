import React, { useEffect } from "react";
import {
  Box,
  Image,
  Stack,
  Input,
  Text,
  Button,
  Grid,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import bg from "../images/background.png";
import curveBackground from "../images/Rectangle 9.png";
import { useLocation } from "react-router-dom";
import { useGetAllDetailsEmployeesQuery } from "../service/amsSlice";
import { useState } from "react";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useUpdateEmployeeMutation } from "../service/amsSlice";
import { useToast } from "@chakra-ui/react";
import background from "../images/animation.gif";

function UpdateTeacher() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [updateEmployee, { isLoading: isUpdateLoding }] =
    useUpdateEmployeeMutation();
  const location = useLocation();
  const toast = useToast();
  const {
    data,
    isSuccess,
    isLoading: isDetailsLoading,
  } = useGetAllDetailsEmployeesQuery(location.state.id);

  const [employee, setEmployeeDetails] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    type: "",
    flatNo: "",
    area: "",
    city: "",
    state: "",
    gender: "",
    pincode: "",
    phone: "",
    email: "",
    password: "",
  });

  const {
    firstname,
    middlename,
    lastname,
    type,
    flatno,
    area,
    city,
    state,
    gender,
    pincode,
    phone,
    email,
    password,
  } = employee;

  const [selected, setSelected] = useState(employee.gender);

  const onChange = (e, value) => {
    setSelected(value);
    setEmployeeDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGenderChange = (value) => {
    setSelected(value);
    setEmployeeDetails((prevState) => ({
      ...prevState,
      gender: value,
    }));
  };

  useEffect(() => {
    setEmployeeDetails(isSuccess ? data.employee : skipToken);
    setSelected(isSuccess ? data.employee.gender : skipToken);
  }, [data]);

  const onUpdate = (e) => {
    e.preventDefault();
    updateEmployee(employee)
      .unwrap()
      .then((response) => {
        if (response.success == true) {
          toast({
            title: response.messege,
            status: "success",
            duration: 9000,
            isClosable: true,
            colorScheme: "blue",
          });
        } else {
          toast({
            title: response.messege,
            status: "warning",
            duration: 9000,
            isClosable: true,
            colorScheme: "blue",
          });
        }
      });
  };

  if (isDetailsLoading) {
    return (
      <Box bg="white" h="100vh" w="223vh" overflow="hidden">
        <Image src={background} alt="loader" h="100vh" ml="27%" mt="5dp" />
      </Box>
    );
  }
  if (isUpdateLoding) {
    return (
      <Box bg="white" h="100vh" w="223vh" overflow="hidden">
        <Image src={bg} alt="loader" h="100vh" ml="27%" mt="5dp" />
      </Box>
    );
  }
  return (
    <>
      <Box bg="#1A237E" h="100vh" w="206vh" overflow="hidden">
        <Image
          src={bg}
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
          top="-10"
          left="33%"
          transform="translate(-7%, -150%)"
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
            Update Teaching Staff
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
                  name="firstname"
                  placeholder="First Name"
                  focusBorderColor="#1A237E"
                  _placeholder={{ color: "#1A237E" }}
                  fontFamily={"noto-serif"}
                  color="#1A237E"
                  w={250}
                  onChange={onChange}
                  defaultValue={firstname}
                />

                <Input
                  type="text"
                  focusBorderColor="#1A237E"
                  placeholder="Middle Name"
                  _placeholder={{ color: "#1A237E" }}
                  fontFamily={"noto-serif"}
                  color="#1A237E"
                  w={250}
                  onChange={onChange}
                  name="middlename"
                  defaultValue={middlename}
                />
                <Input
                  type="text"
                  focusBorderColor="#1A237E"
                  placeholder="Last Name"
                  _placeholder={{ color: "#1A237E" }}
                  fontFamily={"noto-serif"}
                  color="#1A237E"
                  w={250}
                  onChange={onChange}
                  name="lastname"
                  defaultValue={lastname}
                />
                <Input
                  type="text"
                  focusBorderColor="#1A237E"
                  placeholder="Type"
                  _placeholder={{ color: "#1A237E" }}
                  fontFamily={"noto-serif"}
                  color="#1A237E"
                  w={250}
                  defaultValue={type}
                  name="type"
                  onChange={onChange}
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
                    <RadioGroup
                      name="gender"
                      onChange={(value) => handleGenderChange(value)}
                      value={selected}
                    >
                      <Radio value="male" m={1}>
                        Male
                      </Radio>
                      <Radio value="female" m={1}>
                        Female
                      </Radio>
                      <Radio value="other" m={1}>
                        Other
                      </Radio>
                    </RadioGroup>
                  </Text>
                </Stack>
              </Stack>
              <Stack>
                <Input
                  type="text"
                  focusBorderColor="#1A237E"
                  fontFamily={"noto-serif"}
                  placeholder="Flat No."
                  _placeholder={{ color: "#1A237E" }}
                  color="#1A237E"
                  w={250}
                  name="flatno"
                  onChange={onChange}
                  defaultValue={flatno}
                />
                <Input
                  type="text"
                  focusBorderColor="#1A237E"
                  fontFamily={"noto-serif"}
                  placeholder="Area"
                  _placeholder={{ color: "#1A237E" }}
                  color="#1A237E"
                  w={250}
                  name="area"
                  onChange={onChange}
                  defaultValue={area}
                />
                <Input
                  type="text"
                  focusBorderColor="#1A237E"
                  fontFamily={"noto-serif"}
                  placeholder="City"
                  _placeholder={{ color: "#1A237E" }}
                  color="#1A237E"
                  w={250}
                  name="city"
                  onChange={onChange}
                  defaultValue={city}
                />
                <Input
                  type="text"
                  focusBorderColor="#1A237E"
                  fontFamily={"noto-serif"}
                  placeholder="State"
                  _placeholder={{ color: "#1A237E" }}
                  color="#1A237E"
                  w={250}
                  name="state"
                  onChange={onChange}
                  defaultValue={state}
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
                  name="pincode"
                  onChange={onChange}
                  defaultValue={pincode}
                />
                <Input
                  type="tel"
                  focusBorderColor="#1A237E"
                  placeholder="Phone No."
                  fontFamily={"noto-serif"}
                  _placeholder={{ color: "#1A237E" }}
                  color="#1A237E"
                  w={250}
                  name="phone"
                  onChange={onChange}
                  defaultValue={phone}
                />
                <Input
                  type="email"
                  focusBorderColor="#1A237E"
                  fontFamily={"noto-serif"}
                  placeholder="Email"
                  _placeholder={{ color: "#1A237E" }}
                  color="#1A237E"
                  name="email"
                  onChange={onChange}
                  defaultValue={email}
                />
                <InputGroup>
                  <Input
                    type={show ? "text" : "password"}
                    fontFamily={"noto-serif"}
                    placeholder="Password"
                    focusBorderColor="#1A237E"
                    _placeholder={{ color: "#1A237E" }}
                    color="#1A237E"
                    name="password"
                    onChange={onChange}
                    defaultValue={password}
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
            left="20.5%"
            fontFamily={"noto-serif"}
            borderRadius={50}
            fontSize={20}
            mb="-110px"
            onClick={onUpdate}
          >
            UPDATE
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default UpdateTeacher;
