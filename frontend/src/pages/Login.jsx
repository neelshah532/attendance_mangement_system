import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../service/amsSlice";
import {
  Box,
  Button,
  FormControl,
  Grid,
  Image,
  Input,
  Stack,
  Text,
  Toast,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";

import logo from "../images/logo.png";
import bglogo from "../images/Group 85.png";

function Login({setIsLoggedIn}) {

  const navigate = useNavigate();
  const [user, setCredentials] = useState({
    data: "",
    password: "",
    type: "employees",
  });

  const { data, password } = user;

  const [loginUser,{ isLoading }] = useLoginUserMutation()

  const toast = useToast();

  var validEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const onChange = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onLogin = (e) => {
    e.preventDefault();

    if (!user.data || !user.password) {
      toast({
        title: "Please Fill All Details",
        status: "warning",
        duration: 9000,
        isClosable: true,
        colorScheme: "blue",
      });
    } else {
      if (!user.data.match(validEmail)) {
        toast({
          title: "Please Enter Valid Email",
          status: "warning",
          duration: 9000,
          isClosable: true,
          colorScheme: "blue",
        });
      } else {
        if (user.data.includes("admin")) {
          const result = loginUser(user);
          result.unwrap().then((response) => {
            if (response.success == true) {
                sessionStorage.setItem("user",JSON.stringify(response.credentials))
                setIsLoggedIn(true);
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
        } else {
          toast({
            title: "Incorrect Username or Password",
            status: "warning",
            duration: 9000,
            isClosable: true,
            colorScheme: "blue",
          });
        }
      }
    }
  };

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <Grid
      minH="100vh"
      minW="206vh"
      templateColumns="1fr"
      templateRows="1fr"
      placeItems="center"
      bg="gray.100"
      backgroundImage={bglogo}
    >
      <Box
        bg="whiteAlpha.900"
        boxShadow="lg"
        p={32}
        maxW={{ base: "90%", sm: "80%", md: "645dp" }}
        maxH={{ base: "90%", sm: "80%", md: "776dp" }}
        w="400dp"
        h="800dp"
      >
        <Grid gap={{ base: 2, md: 12 }} placeItems="center">
          <Image mt={-20} src={logo} alt="logo" w="192px" h="90px" />
          <Text
            fontSize="lg"
            color="#1A237E"
            fontFamily={"noto-serif"}
            textAlign="center"
          >
            Welcome To GLS University <br></br>Attendance Management Application
          </Text>
        </Grid>
        <form>
          <Stack spacing={5} mt={10}>
            <FormControl>
              <Input
                type="text"
                placeholder="Username"
                fontFamily={"noto-serif"}
                focusBorderColor="#1A237E"
                color="#1A237E"
                name="data"
                onChange={onChange}
                value={data}
              />
            </FormControl>
            <FormControl>
              <Input
                type="password"
                placeholder="Password"
                focusBorderColor="#1A237E"
                color="#1A237E"
                name="password"
                value={password}
                onChange={onChange}
                fontFamily={"noto-serif"}
              />
            </FormControl>
            <Button
              type="submit"
              bg="#1A237E"
              color="white"
              _hover={{ bg: " #202A9A" }}
              w="70px"
              h="30px"
              rounded={"3xl"}
              fontFamily={"noto-serif"}
              alignSelf="center"
              onClick={onLogin}
            >
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Grid>
  );
}

export default Login;