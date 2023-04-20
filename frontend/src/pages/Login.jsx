import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  Grid,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

import logo from "../images/logo.png";
import bglogo from "../images/Group 85.png"

function Login () {
  const navigate = useNavigate()

  const onLogin = (e)=>{
    e.preventDefault()
    navigate('/Home')
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
        <Grid
          gap={{ base: 2, md: 12 }}
          placeItems="center"
        >
            <Image mt={-20} src={logo} alt="logo" w="192px" h="90px"/>
            <Text
              fontSize="lg"
              color="#1A237E"
              fontFamily={"noto-serif"}
              textAlign="center"
            >Welcome To GLS University <br></br>Attendance Management Application
            </Text>
        </Grid>
        <form>
           <Stack spacing={5} mt={10}>
            <FormControl >
            
               <Input type="text" 
              placeholder="Username" 
              fontFamily={"noto-serif"}
              focusBorderColor='#1A237E' 
              color="#1A237E"
              />
            </FormControl>
            <FormControl>
              
              <Input type="password" 
              placeholder="Password" 
              focusBorderColor='#1A237E'
              color="#1A237E"
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
};

export default Login;
