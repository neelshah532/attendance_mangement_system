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
import bg from "../images/background.png"; // replace with your own image
import { useEffect, useState } from "react";
import background from "../images/animation.gif";
import "../index.css";
import {
  useGetAllSubjectsQuery,
  useDeleteSubjectMutation,
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
      [e.target.name]: e.target.value.split(" ").join("").toLowerCase(),
    }));
  };

  const { data: getAllQueries, isLoading, refetch } = useGetAllSubjectsQuery();
  
  const onAddSubject = () => {
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
          refetch();
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
  };

  const deleteSubjectOnClick = (id, subjectname) => {
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
          refetch();
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
  };

  if (isLoading || isAddSubjectLoading || isDeleteSubjectLoading) {
    return (
      <Box bg="white" h="100vh" w="223vh" overflow="hidden">
        <Image src={background} alt="loader" h="100vh" ml="27%" mt="5dp" />
      </Box>
    );
  }
  return (
    <Box bg="#1A237E" h="100vh" w="206vh" overflow="hidden">
      <Image
        src={bg}
        alt="Logo"
        w="691dp"
        h="100vh"
        mx="auto"
        mt="5dp"
        opacity={0.5}
      />

      <Box
        maxW={{ base: "90%", sm: "80%", md: "206vh" }}
        maxH={{ base: "90%", sm: "80%", md: "100vh" }}
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="10%"
        left="26%"
      >
        <Box bgColor="white" paddingBottom="5%" width={800} borderRadius={15}>
          <Text
            mt="120"
            fontSize="45px"
            fontFamily={"noto-serif"}
            color="#1A237E"
            w="250px"
            h="50px"
            textAlign="center"
            transform="translateX(97%)"
            margin={10}
          >
            Add Subject
          </Text>
          <Stack direction={"column"}>
            <HStack>
              <Input
                placeholder="Subject Name"
                name="subjectName"
                left={50}
                marginEnd={60}
                value={subjectName}
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
            </HStack>
            <Button
              type="submit"
              bg="#1A237E"
              color="white"
              top={5}
              _hover={{ bg: " #202A9A" }}
              left="42%"
              rounded={"lg"}
              fontFamily={"noto-serif"}
              w={150}
              h={8}
              fontSize={18}
              onClick={onAddSubject}
            >
              ADD SUBJECTS
            </Button>
          </Stack>
        </Box>
        <Box mt={10} className="scrollview" height="50vh">
          {getAllQueries.subjects.map((items) => {
            return (
              <Box
                bgColor="white"
                width={460}
                borderRadius={15}
                m={2}
                align="center"
                mx="175px"
                key={items.subjectid}
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
                    {items.subjectname.split(" ").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(" ")}
                  </Text>

                  <Button
                    type="submit"
                    bg="#1A237E"
                    color="white"
                    _hover={{ bg: " #202A9A" }}
                    rounded={"lg"}
                    fontFamily={"noto-serif"}
                    p={3}
                    w={110}
                    h={8}
                    fontSize={18}
                    onClick={(e) => {
                      deleteSubjectOnClick(items.subjectid, items.subjectname);
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

export default ManagePrograme;
