import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  Button,
  HStack,
  Select,
} from "@chakra-ui/react";
import bg from "../images/background.png"; // replace with your own image
import {
  useGetAllStudentBySemesterAndDivisionQuery,
  useDeleteDataMutation,
} from "../service/amsSlice";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import background from "../images/animation.gif";
import "../index.css"
function ViewStudent({ division, semester }) {
  const navigate = useNavigate();
  const toast = useToast();
  const [deleteData, { isLoading: isStudentDeleteLoading }] =
    useDeleteDataMutation();
  const { data, isLoading } = useGetAllStudentBySemesterAndDivisionQuery({
    division,
    semester,
  });

  const deleteStudentData = (e, id) => {
    e.preventDefault();
    const type = "students";
    deleteData({ id, type })
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
        if (isStudentDeleteLoading) {
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

  if (isLoading) {
    return (
      <Box bg="white" h="100vh" w="223vh" overflow="hidden">
        <Image src={background} alt="loader" h="100vh" ml="27%" mt="5dp" />
      </Box>
    );
  }

  return (
    <Box
      maxW={{ base: "90%", sm: "80%", md: "300vh" }}
      maxH={{ base: "90%", sm: "80%", md: "150vh" }}
      justifyContent="center"
      alignItems="center"
      position="absolute"
      top="120%"
      left="0%"
    >
       <Box
           className="scrollview"
           height="30vh"
         > 
      {data.students.map((items) => {
        return (
          <Box
            bgColor="white"
            width={960}
            borderRadius={15}
            m={2}
            left="10%"
            align="center"
            mx="80px"
            key={items.enrollmentno}
          >
            <HStack gap={6}>
              <Text
                left="20%"
                p={3}
                fontFamily={"noto-serif"}
                color="#1A237E"
                fontSize={20}
              >
                {items.enrollmentno}
              </Text>
              <Text
                left="26%"
                p={3}
                w={230}
                fontFamily={"noto-serif"}
                color="#1A237E"
                fontSize={20}
              >
                {items.firstname + " " + items.middlename + " " + items.lastname}
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
                left="14%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                p={3}
                h={10}
                w={100}
                fontSize={18}
                name="update"
                onClick={() => {
                  navigate("/UpdateStudent", {
                    state: { id: items.enrollmentno },
                  });
                }}
              >
                Update
              </Button>
              <Button
                type="submit"
                name="delete"
                bg="#1A237E"
                color="white"
                _hover={{ bg: " #202A9A" }}
                left="14%"
                w={100}
                rounded={"lg"}
                fontFamily={"noto-serif"}
                h={10}
                fontSize={18}
                p={3}
                onClick={(e) => {
                  deleteStudentData(e, items.enrollmentno);
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

export default ViewStudent;
