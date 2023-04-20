import { Box, Grid, GridItem, Image, Text, Button, HStack } from "@chakra-ui/react";
import background from "../images/background.png"; // replace with your own image

function ViewStudent() {
  return (
    <Box bg="#1A237E" alignItems={"center"} h="100vh" w="206vh"  overflow="hidden">
        <Image src={background} alt="Logo" h="100vh" mx="auto" mt="5dp" opacity={0.3} />
      <Box 
       maxW={{ base: "90%", sm: "80%", md: "300vh" }}
       maxH={{ base: "90%", sm: "80%", md: "150vh" }}
       justifyContent="center"
       alignItems="center"
       position="absolute"
       top="10%"
       left="13%"
       
      //  transform="translate(-7%, -280%)"
      //  zIndex="1"
      >
        
        <Text
                // left="10%"
                mt="-33px"
                mx="230px"
                mb="10"
                fontSize="5xl"
                // fontWeight="bold"   
                color="white"
                w="680px"
                h="62px"
                textAlign="center"
                fontFamily={"noto-serif"}
            >
                View Students
            </Text>
          <Box 
            bgColor="white" 
            width={960} 
            borderRadius={15}
            m={2}
            left="10%"
            align="center"
            mx="80px"
          >
            <HStack gap={6}>
              <Text left= "20%" p={3} fontFamily={"noto-serif"} color="#1A237E" fontSize={20}>Enrollment No.</Text>
              <Text left= "26%" p={3} fontFamily={"noto-serif"} color="#1A237E"fontSize={20}>Student Name</Text>
              <Text left= "26%" p={3} fontFamily={"noto-serif"} color="#1A237E" fontSize={20}>Semester</Text>
              <Text left= "20%" p={3} fontFamily={"noto-serif"} color="#1A237E" fontSize={20}>Programmes Name</Text>
              <Button  type="submit"
                bg="#1A237E"
                color="white"
                _hover={{ bg: " #202A9A" }}
                left= "8.5%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                p={3}
                h={10}
                fontSize={18}
            >Update</Button>
              <Button  type="submit"
                bg="#1A237E"
                color="white"
                _hover={{ bg: " #202A9A" }}
                left= "8%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                h={10}
                fontSize={18}
                p={3}
            >Delete</Button>
            </HStack>
            
          </Box>
          <Box 
            bgColor="white" 
            width={960} 
            borderRadius={15}
            m={2}
            left="10%"
            align="center"
            mx="80px"
          >
            <HStack gap={6}>
              <Text left= "20%" p={3} fontFamily={"noto-serif"} color="#1A237E" fontSize={20}>Enrollment No.</Text>
              <Text left= "26%" p={3} fontFamily={"noto-serif"} color="#1A237E"fontSize={20}>Student Name</Text>
              <Text left= "26%" p={3} fontFamily={"noto-serif"} color="#1A237E" fontSize={20}>Semester</Text>
              <Text left= "20%" p={3} fontFamily={"noto-serif"} color="#1A237E" fontSize={20}>Programmes Name</Text>
              <Button  type="submit"
                bg="#1A237E"
                color="white"
                _hover={{ bg: " #202A9A" }}
                left= "8.5%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                p={3}
                h={10}
                fontSize={18}
            >Update</Button>
              <Button  type="submit"
                bg="#1A237E"
                color="white"
                _hover={{ bg: " #202A9A" }}
                left= "8%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                h={10}
                fontSize={18}
                p={3}
            >Delete</Button>
            </HStack>
            
          </Box>
          <Box 
            bgColor="white" 
            width={960} 
            borderRadius={15}
            m={2}
            left="10%"
            align="center"
            mx="80px"
          >
            <HStack gap={6}>
              <Text left= "20%" p={3} fontFamily={"noto-serif"} color="#1A237E" fontSize={20}>Enrollment No.</Text>
              <Text left= "26%" p={3} fontFamily={"noto-serif"} color="#1A237E"fontSize={20}>Student Name</Text>
              <Text left= "26%" p={3} fontFamily={"noto-serif"} color="#1A237E" fontSize={20}>Semester</Text>
              <Text left= "20%" p={3} fontFamily={"noto-serif"} color="#1A237E" fontSize={20}>Programmes Name</Text>
              <Button  type="submit"
                bg="#1A237E"
                color="white"
                _hover={{ bg: " #202A9A" }}
                left= "8.5%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                p={3}
                h={10}
                fontSize={18}
            >Update</Button>
              <Button  type="submit"
                bg="#1A237E"
                color="white"
                _hover={{ bg: " #202A9A" }}
                left= "8%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                h={10}
                fontSize={18}
                p={3}
            >Delete</Button>
            </HStack>
            
          </Box>
          <Box 
            bgColor="white" 
            width={960} 
            borderRadius={15}
            m={2}
            left="10%"
            align="center"
            mx="80px"
          >
            <HStack gap={6}>
              <Text left= "20%" p={3} fontFamily={"noto-serif"} color="#1A237E" fontSize={20}>Enrollment No.</Text>
              <Text left= "26%" p={3} fontFamily={"noto-serif"} color="#1A237E"fontSize={20}>Student Name</Text>
              <Text left= "26%" p={3} fontFamily={"noto-serif"} color="#1A237E" fontSize={20}>Semester</Text>
              <Text left= "20%" p={3} fontFamily={"noto-serif"} color="#1A237E" fontSize={20}>Programmes Name</Text>
              <Button  type="submit"
                bg="#1A237E"
                color="white"
                _hover={{ bg: " #202A9A" }}
                left= "8.5%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                p={3}
                h={10}
                fontSize={18}
            >Update</Button>
              <Button  type="submit"
                bg="#1A237E"
                color="white"
                _hover={{ bg: " #202A9A" }}
                left= "8%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                h={10}
                fontSize={18}
                p={3}
            >Delete</Button>
            </HStack>
            
          </Box>
          <Box 
            bgColor="white" 
            width={960} 
            borderRadius={15}
            m={2}
            left="10%"
            align="center"
            mx="80px"
          >
            <HStack gap={6}>
              <Text left= "20%" p={3} fontFamily={"noto-serif"} color="#1A237E" fontSize={20}>Enrollment No.</Text>
              <Text left= "26%" p={3} fontFamily={"noto-serif"} color="#1A237E"fontSize={20}>Student Name</Text>
              <Text left= "26%" p={3} fontFamily={"noto-serif"} color="#1A237E" fontSize={20}>Semester</Text>
              <Text left= "20%" p={3} fontFamily={"noto-serif"} color="#1A237E" fontSize={20}>Programmes Name</Text>
              <Button  type="submit"
                bg="#1A237E"
                color="white"
                _hover={{ bg: " #202A9A" }}
                left= "8.5%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                p={3}
                h={10}
                fontSize={18}
            >Update</Button>
              <Button  type="submit"
                bg="#1A237E"
                color="white"
                _hover={{ bg: " #202A9A" }}
                left= "8%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                h={10}
                fontSize={18}
                p={3}
            >Delete</Button>
            </HStack>
            
          </Box>
          <Box 
            bgColor="white" 
            width={960} 
            borderRadius={15}
            m={2}
            left="10%"
            align="center"
            mx="80px"
          >
            <HStack gap={6}>
              <Text left= "20%" p={3} fontFamily={"noto-serif"} color="#1A237E" fontSize={20}>Enrollment No.</Text>
              <Text left= "26%" p={3} fontFamily={"noto-serif"} color="#1A237E"fontSize={20}>Student Name</Text>
              <Text left= "26%" p={3} fontFamily={"noto-serif"} color="#1A237E" fontSize={20}>Semester</Text>
              <Text left= "20%" p={3} fontFamily={"noto-serif"} color="#1A237E" fontSize={20}>Programmes Name</Text>
              <Button  type="submit"
                bg="#1A237E"
                color="white"
                _hover={{ bg: " #202A9A" }}
                left= "8.5%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                p={3}
                h={10}
                fontSize={18}
            >Update</Button>
              <Button  type="submit"
                bg="#1A237E"
                color="white"
                _hover={{ bg: " #202A9A" }}
                left= "8%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                h={10}
                fontSize={18}
                p={3}
            >Delete</Button>
            </HStack>
            
          </Box>
          <Box 
            bgColor="white" 
            width={960} 
            borderRadius={15}
            m={2}
            left="10%"
            align="center"
            mx="80px"
          >
            <HStack gap={6}>
              <Text left= "20%" p={3} fontFamily={"noto-serif"} color="#1A237E" fontSize={20}>Enrollment No.</Text>
              <Text left= "26%" p={3} fontFamily={"noto-serif"} color="#1A237E"fontSize={20}>Student Name</Text>
              <Text left= "26%" p={3} fontFamily={"noto-serif"} color="#1A237E" fontSize={20}>Semester</Text>
              <Text left= "20%" p={3} fontFamily={"noto-serif"} color="#1A237E" fontSize={20}>Programmes Name</Text>
              <Button  type="submit"
                bg="#1A237E"
                color="white"
                _hover={{ bg: " #202A9A" }}
                left= "8.5%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                p={3}
                h={10}
                fontSize={18}
            >Update</Button>
              <Button  type="submit"
                bg="#1A237E"
                color="white"
                _hover={{ bg: " #202A9A" }}
                left= "8%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                h={10}
                fontSize={18}
                p={3}
            >Delete</Button>
            </HStack>
            
          </Box>
         
         
      </Box>
    </Box>
  );
}

export default ViewStudent;
