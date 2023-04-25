import bg from "../images/background.png"; // replace with your own image
import {
  useGetAllEmployeesQuery,
  useDeleteDataMutation,
} from "../service/amsSlice";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  Button,
  HStack,
  Link,
} from "@chakra-ui/react";
import { useEffect } from "react";
import background from "../images/animation.gif";

function ViewTeacher() {
  const { data, isLoading } = useGetAllEmployeesQuery();
  const [deleteData, { isLoading: isEmployeeDeleteLoading }] =
    useDeleteDataMutation();
  const toast = useToast();

  const deleteEmployeeData = (e, id) => {
    e.preventDefault();
    const type = "employees";
    deleteData({ id, type })
      .unwrap()
      .then((response) => {
        if (response.success == true) {
          toast({
            title: response.messege,
            status: "warning",
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
        if (isEmployeeDeleteLoading) {
          return (
            <Box bg="white" h="100vh" w="223vh" overflow="hidden">
              <Image
                src={background}
                alt="loader"
                h="100vh"
                ml="27%"
                mt="5dp"
              />
            </Box>
          );
        }
      });
  };

  const navigate = useNavigate();

  if (isLoading) {
    return (
      <Box bg="white" h="100vh" w="223vh" overflow="hidden">
        <Image src={background} alt="loader" h="100vh" ml="27%" mt="5dp" />
      </Box>
    );
  }

  return (
    <Box bg="#1A237E" h="100vh" w="206vh" overflow="hidden">
      <Image src={bg} alt="Logo" h="100vh" mx="auto" mt="5dp" opacity={0.5} />

      <Box
        maxW={{ base: "90%", sm: "80%", md: "450vh" }}
        maxH={{ base: "90%", sm: "80%", md: "150vh" }}
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="10%"
        left="19%"
      >
        <Text
          mt="-15px"
          mx="150px"
          fontSize="4xl"
          color="white"
          w="780px"
          h="62px"
          textAlign="center"
          fontFamily={"noto-serif"}
        >
          View Teachers
        </Text>
        <Box
           style={{ overflowY:"scroll", height: "80vh" }}
         >  
        {data.employees.map((items) => {
          return (
            
            <Box
              bgColor="white"
              width={900}
              borderRadius={15}
              m={2}
              left="10%"
              align="center"
              mx="60px"
              key={items.employeeid}
            >
              <HStack gap={5}>
                <Text
                  mx={2}
                  left="20%"
                  p={3}
                  w={300}
                  fontFamily={"noto-serif"}
                  color="#1A237E"
                  fontSize={20}
                >
                  {items.email}
                </Text>
                <Text
                  left="20%"
                  p={3}
                  w={200}
                  fontFamily={"noto-serif"}
                  color="#1A237E"
                  fontSize={20}
                >
                  {items.firstname +
                    " " +
                    items.middlename +
                    " " +
                    items.lastname}
                </Text>
                <Text
                  left="20%"
                  p={3}
                  w={100}
                  fontFamily={"noto-serif"}
                  color="#1A237E"
                  fontSize={20}
                >
                  MCA
                </Text>
                <Button
                  type="submit"
                  bg="#1A237E"
                  color="white"
                  _hover={{ bg: " #202A9A" }}
                  rounded={"lg"}
                  fontFamily={"noto-serif"}
                  p={3}
                  h={10}
                  fontSize={18}
                  onClick={() => {
                    navigate("/UpdateTeacher", {
                      state: { id: items.employeeid },
                    });
                  }}
                >
                  Update
                </Button>
                <Button
                  type="submit"
                  bg="#1A237E"
                  color="white"
                  _hover={{ bg: " #202A9A" }}
                  rounded={"lg"}
                  fontFamily={"noto-serif"}
                  p={3}
                  h={10}
                  fontSize={18}
                  onClick={(e) => {
                    deleteEmployeeData(e, items.employeeid);
                  }}
                >
                  Delete
                </Button>
              </HStack>
            </Box>
          );
})}
            </Box>

      </Box>
    </Box>
  );
}

export default ViewTeacher;
