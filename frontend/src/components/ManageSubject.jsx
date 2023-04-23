import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import background from "../images/background.png"; // replace with your own image
import { useState } from "react";
import {
  useGetAllSubjectsQuery,
  useDeleteSubjectMutation,
  useAddEmployeeMutation,
  useAddSubjectMutation,
} from "../service/amsSlice";

function ManagePrograme() {
  const [subject, setSubject] = useState({
    subjectName: "",
    type: "",
  });
  const { subjectName, type } = subject;

  const [selected, setSelected] = useState("");

  const [deleteSubject, { isLoading: isDeleteSubjectLoading }] =
    useDeleteSubjectMutation();
  const [addSubject, { isLoading: isAddSubjectLoading }] =
    useAddSubjectMutation();
  const toast = useToast();

  const handleTypeChange = (value) => {
    setSelected(value);
    setSubject((prevState) => ({
      ...prevState,
      type: value,
    }));
  };

  const onChange = (e) => {
    setSubject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const { data, isLoading } = useGetAllSubjectsQuery();

  const onAddSubject = (e) => {
    e.preventDefault();
    addSubject(subject)
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
            status: "success",
            duration: 9000,
            isClosable: true,
            colorScheme: "blue",
          });
        }
      });
    if (isAddSubjectLoading) {
      return <h1>Loading...</h1>;
    }
  };

  const deleteSubjectOnClick = (e, id, subjectname) => {
    deleteSubject({ subjectname, id })
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
            status: "success",
            duration: 9000,
            isClosable: true,
            colorScheme: "blue",
          });
        }
      });
    if (isDeleteSubjectLoading) {
      return <h1>Loading...</h1>;
    }
  };

  if (isLoading) {
    return <h1>Loading..</h1>;
  }
  return (
    <Box bg="#1A237E" h="100vh" w="206vh" overflow="hidden">
      <Image
        src={background}
        alt="Logo"
        w="691dp"
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
        left="23%"
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
        <Box bgColor="white" width={800} borderRadius={15}>
          <Text
            mt="120"
            fontSize="45px"
            fontFamily={"noto-serif"}
            color="#1A237E"
            w="250px"
            h="50px"
            textAlign="center"
            transform="translateX(85%)"
            margin={10}
          >
            Add Subject
          </Text>
          <Stack direction={"row"}>
            <VStack>
              <Input
                placeholder="Subject Name"
                name="subjectName"
                value={subjectName}
                align={"end"}
                color="#1A237E"
                focusBorderColor="#1A237E"
                fontFamily={"noto-serif"}
                _placeholder={{ color: "#1A237E", fontFamily: "noto-serif" }}
                width="300px"
                onChange={onChange}
              />
              <RadioGroup
                onChange={(value) => handleTypeChange(value)}
                value={type}
              >
                <Stack direction="row">
                  <Radio value="Regular">Regular</Radio>
                  <Radio value="Elective">Elective</Radio>
                </Stack>
              </RadioGroup>
              <Button
                type="submit"
                bg="#1A237E"
                color="white"
                _hover={{ bg: " #202A9A" }}
                left="45%"
                rounded={"lg"}
                fontFamily={"noto-serif"}
                p={3}
                w={150}
                h={8}
                fontSize={18}
                onClick={onAddSubject}
              >
                ADD SUBJECTS
              </Button>
            </VStack>
          </Stack>
        </Box>
        {data.subjects.map((items) => {
          return (
            <Box
              bgColor="white"
              width={430}
              borderRadius={15}
              m={2}
              align="center"
              mx="155px"
              key={items.subjectid}
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
                  {items.subjectname}
                </Text>

                <Button
                  type="submit"
                  bg="#1A237E"
                  color="white"
                  _hover={{ bg: " #202A9A" }}
                  left="45%"
                  rounded={"lg"}
                  fontFamily={"noto-serif"}
                  p={3}
                  w={110}
                  h={8}
                  fontSize={18}
                  onClick={(e) => {
                    deleteSubjectOnClick(e, items.subjectid, items.subjectname);
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

export default ManagePrograme;
