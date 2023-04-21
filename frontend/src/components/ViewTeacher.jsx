import background from "../images/background.png"; // replace with your own image
import { useGetAllEmployeesQuery } from "../service/amsSlice";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  Button,
  HStack,
  Link
} from "@chakra-ui/react";

function ViewTeacher() {

  const { data, error, isLoading } = useGetAllEmployeesQuery();
  
  if(isLoading){
    return <h1>Loading...</h1>
  }
  
  return (
    <Box bg="#1A237E" h="100vh" w="206vh" overflow="hidden">
      <Image
        src={background}
        alt="Logo"
        h="100vh"
        mx="auto"
        mt="5dp"
        opacity={0.5}
      />
      
      <Box
        maxW={{ base: "90%", sm: "80%", md: "250vh" }}
        maxH={{ base: "90%", sm: "80%", md: "150vh" }}
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="10%"
        left="10%"
      >
        <Text
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

        {
          data.employees.map((items)=>{
            return (

                <Box
                  bgColor="white"
                  width={800}
                  borderRadius={15}
                  m={2}
                  left="10%"
                  align="center"
                  mx="155px"
                  key={items.employeeid}
                >
                  <HStack gap={5}>
                    <Text
                      mx={2}
                      left="20%"
                      p={3}
                      fontFamily={"noto-serif"}
                      color="#1A237E"
                      fontSize={20}
                    >
                      {items.email}
                    </Text>
                    <Text
                      left="20%"
                      p={3}
                      fontFamily={"noto-serif"}
                      color="#1A237E"
                      fontSize={20}
                    >
                    {items.firstname +" "+ items.middlename +" "+ items.lastname}
                    </Text>
                    <Text
                      left="20%"
                      p={3}
                      fontFamily={"noto-serif"}
                      color="#1A237E"
                      fontSize={20}
                    >
                      MCA
                    </Text>
                    <Link
                      href="/AddTeacher"
                      type="submit"
                      bg="#1A237E"
                      color="white"
                      _hover={{ bg: " #202A9A" }}
                      left="15%"
                      rounded={"lg"}
                      fontFamily={"noto-serif"}
                      p={3}
                      h={10}
                      fontSize={18}
                    >
                      Update
                    </Link>
                    <Button
                      type="submit"
                      bg="#1A237E"
                      color="white"
                      _hover={{ bg: " #202A9A" }}
                      left="15%"
                      rounded={"lg"}
                      fontFamily={"noto-serif"}
                      p={3}
                      h={10}
                      fontSize={18}
                    >
                      Delete
                    </Button>
                  </HStack>
                </Box>
            )
          })
        }
      </Box>
    </Box>
  );
}

export default ViewTeacher;