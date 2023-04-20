import { Box, Grid, GridItem, Image, Text, Button, HStack } from "@chakra-ui/react";
import background from "../images/background.png"; // replace with your own image

function ManagePrograme() {
  return (
    <Box bg="#1A237E" h="100vh" w="206vh" overflow="hidden">
        <Image src={background} alt="Logo" w="691dp" h="100vh" mx="auto" mt="5dp" opacity={0.5}/>
      <Box 
       maxW={{ base: "90%", sm: "80%", md: "250vh" }}
       maxH={{ base: "90%", sm: "80%", md: "150vh" }}
       justifyContent="center"
       alignItems="center"
       position="absolute"
       top="10%"
       left="23%"
      //  transform="translate(-7%, -280%)"
      //  zIndex="1"
      >
        <Text
                // left="10%"
                mt="-15px"
                mx="180px"
                fontSize="4xl"
               left="-50%"
                color="white"
                w="399px"
                h="62px"
                textAlign="center"
                fontFamily={"noto-serif"}
            >
                Manage Subject
            </Text>
           
          {/* <Box 
           bgColor="white" 
           width={800} 
           borderRadius={15}
           m={2}
           left="10%"
           align="center"
           mx="155px"
          >
            <HStack gap={5}>
              <Text mx={2} left= "20%" p={3} fontFamily={"noto-serif"} color="#1A237E" fontSize={20}>UserId</Text>
              <Text left= "20%" p={3} fontFamily={"noto-serif"} color="#1A237E" fontSize={20}>TeacherName</Text>
              <Text left= "20%" p={3} fontFamily={"noto-serif"} color="#1A237E" fontSize={20}>Programmes Name</Text>
              
              <Button 
              type="submit"
              bg="#1A237E"
                color="white"
                _hover={{ bg: " #202A9A" }}
                left= "8%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                p={3}
                w={110}
                h={8}
                fontSize={18}
              >Update</Button>
              <Button 
              type="submit"
              bg="#1A237E"
                color="white"
                _hover={{ bg: " #202A9A" }}
                left= "6%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                p={3}
                w={110}
                h={8}
                fontSize={18}
              >Delete</Button>
            </HStack>
            
          </Box> */}
          <Box 
           bgColor="white" 
           width={430} 
           borderRadius={15}
           m={2}
        //    left="10%"
           align="center"
           mx="155px"
          >
            <HStack gap={5}>
              <Text mx={2} left= "20%" p={3} fontFamily={"noto-serif"} color="#1A237E" fontSize={20}>Name</Text>

              
              <Button 
              type="submit"
              bg="#1A237E"
                color="white"
                _hover={{ bg: " #202A9A" }}
                left= "45%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                p={3}
                w={110}
                h={8}
                fontSize={18}
              >Delete</Button>
            </HStack>
            
          </Box>
          <Box 
           bgColor="white" 
           width={430} 
           borderRadius={15}
           m={2}
        //    left="10%"
           align="center"
           mx="155px"
          >
            <HStack gap={5}>
              <Text mx={2} left= "20%" p={3} fontFamily={"noto-serif"} color="#1A237E" fontSize={20}>Name</Text>

              
              <Button 
              type="submit"
              bg="#1A237E"
                color="white"
                _hover={{ bg: " #202A9A" }}
                left= "45%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                p={3}
                w={110}
                h={8}
                fontSize={18}
              >Delete</Button>
            </HStack>
            
          </Box>
      </Box>
    </Box>
  );
}

export default ManagePrograme;
