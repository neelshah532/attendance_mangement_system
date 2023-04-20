import { Box, Grid, GridItem, Image, Text, Button, HStack } from "@chakra-ui/react";
import background from "../images/background.png"; // replace with your own image

function ViewTeacher() {
  return (
    <Box bg="#1A237E" h="100vh" w="206vh" overflow="hidden">
        <Image src={background} alt="Logo"h="100vh" mx="auto" mt="5dp" opacity={0.5}/>
      <Box 
       maxW={{ base: "90%", sm: "80%", md: "250vh" }}
       maxH={{ base: "90%", sm: "80%", md: "150vh" }}
       justifyContent="center"
       alignItems="center"
       position="absolute"
       top="10%"
       left="10%"
      //  transform="translate(-7%, -280%)"
      //  zIndex="1"
      >
        <Text
                // left="10%"
                mt="-15px"
                mx="210px"
                fontSize="4xl"
               
                color="white"
                w="680px"
                h="62px"
                textAlign="center"
                fontFamily={"noto-serif"}
            >
                View Teachers
            </Text>
           
          <Box 
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
                left= "15%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                p={3}
                h={10}
                fontSize={18}
              >Update</Button>
              <Button 
              type="submit"
              bg="#1A237E"
                color="white"
                _hover={{ bg: " #202A9A" }}
                left= "15%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                p={3}
                h={10}
                fontSize={18}
              >Delete</Button>
            </HStack>
            
          </Box>
          <Box 
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
                left= "15%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                p={3}
                h={10}
                fontSize={18}
              >Update</Button>
              <Button 
              type="submit"
              bg="#1A237E"
                color="white"
                _hover={{ bg: " #202A9A" }}
                left= "15%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                p={3}
                h={10}
                fontSize={18}
              >Delete</Button>
            </HStack>
            
          </Box>
          <Box 
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
                left= "15%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                p={3}
                h={10}
                fontSize={18}
              >Update</Button>
              <Button 
              type="submit"
              bg="#1A237E"
                color="white"
                _hover={{ bg: " #202A9A" }}
                left= "15%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                p={3}
                h={10}
                fontSize={18}
              >Delete</Button>
            </HStack>
            
          </Box>
          <Box 
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
                left= "15%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                p={3}
                h={10}
                fontSize={18}
              >Update</Button>
              <Button 
              type="submit"
              bg="#1A237E"
                color="white"
                _hover={{ bg: " #202A9A" }}
                left= "15%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                p={3}
                h={10}
                fontSize={18}
              >Delete</Button>
            </HStack>
            
          </Box>
          <Box 
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
                left= "15%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                p={3}
                h={10}
                fontSize={18}
              >Update</Button>
              <Button 
              type="submit"
              bg="#1A237E"
                color="white"
                _hover={{ bg: " #202A9A" }}
                left= "15%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                p={3}
                h={10}
                fontSize={18}
              >Delete</Button>
            </HStack>
            
          </Box>
          <Box 
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
                left= "15%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                p={3}
                h={10}
                fontSize={18}
              >Update</Button>
              <Button 
              type="submit"
              bg="#1A237E"
                color="white"
                _hover={{ bg: " #202A9A" }}
                left= "15%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                p={3}
                h={10}
                fontSize={18}
              >Delete</Button>
            </HStack>
            
          </Box>
          <Box 
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
                left= "15%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                p={3}
                h={10}
                fontSize={18}
              >Update</Button>
              <Button 
              type="submit"
              bg="#1A237E"
                color="white"
                _hover={{ bg: " #202A9A" }}
                left= "15%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                p={3}
                h={10}
                fontSize={18}
              >Delete</Button>
            </HStack>
            
          </Box>
          <Box 
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
                left= "15%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                p={3}
                h={10}
                fontSize={18}
              >Update</Button>
              <Button 
              type="submit"
              bg="#1A237E"
                color="white"
                _hover={{ bg: " #202A9A" }}
                left= "15%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                p={3}
                h={10}
                fontSize={18}
              >Delete</Button>
            </HStack>
            
          </Box>

      </Box>
    </Box>
  );
}

export default ViewTeacher;
