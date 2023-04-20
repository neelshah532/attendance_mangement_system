import React from 'react';

import { Box, Button, Grid, HStack, Image , Input, Select, Stack, Text, VStack} from "@chakra-ui/react";
// import { Box, Image} from "@chakra-ui/react";
import background from "../images/background.png";
import curveBackground from "../images/Rectangle 9.png";

function AddProgram(){
  return (
    <Box bg="#1A237E" h="100vh" w="206vh" overflow="hidden">
        <Image src={background} alt="Logo" w="691dp" h="100vh" mx="auto" mt="5dp"  opacity={0.5}/>
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
      >
    <Grid
      gap={{base: "40px" , md:"110px"}}
      justifyContent="center"
      alignItems="center"
      position="absolute"
      top="30%"
      left="42%"
      transform="translate(-42%, -45%)"
      m={50}
    >
    <Text
     mt="-140"
     fontSize="45px"
   //   fontWeight="bold"
     color="#1A237E"
     w="280px"
     h="50px"
     fontFamily={"noto-serif"}
     textAlign="center"
     // top="0"
     // left="50%"
     // mt="10"
     transform="translateX(78%)"
    >
     Add Program
    </Text>
      <Stack direction={'row'} spacing={100}>
        <HStack>
          <Text
          ml="8"
          // mt="3"
          fontSize="13px"
          fontFamily={"noto-serif"}
          fontWeight="bold"
          color="#1A237E"
          // w="364px"
          h="20px"
          // textAlign="left"
          />
          <Input
            placeholder='Program Name'
            fontFamily={"noto-serif"}
            focusBorderColor='#1A237E'
            // size='md'
            width="300px"
            color="#1A237E"
            _placeholder={{ color:"#1A237E", fontFamily:"noto-serif"}}
          />
          
        </HStack>
        <VStack
        >
          <Text
           
           mt="-7"
           fontSize="13px"
           fontFamily={"noto-serif"}
           color="#1A237E"
           // w="364px"
           h="20px"
           textAlign="left"
          >
            Select No. of semester will be there in this program
          </Text>
          <Select focusBorderColor='#1A237E' placeholder='Semester' fontFamily={"noto-serif"} color="#1A237E" _placeholder={{ color:"#1A237E", fontFamily:"noto-serif"}} width="300px">
            <option value='semester1'>Semester 1</option>
            <option value='semester2'>Semester 2</option>
            <option value='semester3'>Semester 3</option>
            <option value='semester4'>Semester 4</option>
          </Select>
        </VStack>
      </Stack>
      
    </Grid>
    <Button
        type="submit"
        bg="#1A237E"
        color="white"
        _hover={{ bg: " #202A9A" }}
        w="100px"
        h="37px"
        alignSelf="center"
        left="38%"
        top="-75%"
        fontFamily={"noto-serif"}
        transform="translateX(120%)"
        mt="-80"
        size='md'
        borderRadius={50}
    >
      Add
    </Button>
  </Box>

  </Box>
  );
}

export default AddProgram;