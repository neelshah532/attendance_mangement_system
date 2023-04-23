import background from "../images/background.png"; // replace with your own image
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
          return <h1>Loading...</h1>;
        }
      });
  };

  const navigate = useNavigate();

  if (isLoading) {
    return <h1>Loading...</h1>;
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

        {data.employees.map((items) => {
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
                  {items.firstname +
                    " " +
                    items.middlename +
                    " " +
                    items.lastname}
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
                  left="15%"
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
  );
}

export default ViewTeacher;
