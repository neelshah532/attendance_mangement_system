import React from "react";

import {
  Stack,
  VStack,
  Input,
  Select,
  Box,
  Button,
  Grid,
  Image,
  Text,
} from "@chakra-ui/react";
import bg from "../images/background.png";
import { useGetAllSubjectsQuery } from "../service/amsSlice";
import { useState } from "react";
import ViewAttendance from "../components/ViewAttendance";
import background from "../images/animation.gif"

function SelectDetailAttendance() {
  const { data: getAllSubjects, isLoading: isSubjectLoading } =
    useGetAllSubjectsQuery();

  const [isRender, setIsRender] = useState(false);

  const [enrollmentno, setEnrollmentno] = useState("");
  const [subject, setSubject] = useState("");

  const onChange = (e) => {
    setSubject(e.target.value);
  };

  const onViewClick = (e) => {
    setIsRender(true);
  };
  if (isSubjectLoading) {
    return (
      <Box bg="white" h="100vh" w="223vh" overflow="hidden">
        <Image src={background} alt="loader" h="100vh" ml="27%" mt="5dp" />
      </Box>
    );
  }
  return (
    <Box bg="#1A237E" h="100vh" w="206vh" overflow={"hidden"}>
      <Image
        src={bg}
        alt="Logo"
        w="91dp"
        h="100vh"
        mx="auto"
        mt="5dp"
        opacity={0.5}
      />
      <Box
        h="35vh"
        w="110vh"
        borderRadius="20"
        alignItems="center"
        position="absolute"
        top="5%"
        left="22.5%"
        bg="white"
      ></Box>
      <Grid
        gap={{ base: "100%", sm: "80%", md: "210px" }}
        alignItems="center"
        position="absolute"
        top="12%"
        left="42%"
        transform="translate(-42%, -45%)"
        m={50}
      >
        <Box
          maxW={{ base: "90%", sm: "80%", md: "560vh" }}
          maxH={{ base: "90%", sm: "80%", md: "200vh" }}
        >
          <Text
            fontSize="45px"
            fontFamily={"noto-serif"}
            color="#1A237E"
            w="360px"
            h="50px"
            mb="5"
            mt="5"
            textAlign="center"
            transform="translateX(55%)"
          >
            Attendance
          </Text>
          <Stack direction={"row"} spacing={100}>
            <VStack>
              <Input
                placeholder="Enrollment no"
                onChange={(e) => {
                  setEnrollmentno(e.target.value);
                }}
                ml="5"
                color="#1A237E"
                focusBorderColor="#1A237E"
                fontFamily={"noto-serif"}
                _placeholder={{ color: "#1A237E", fontFamily: "noto-serif" }}
                width="300px"
              />
            </VStack>
            <VStack>
              <Select
                focusBorderColor="#1A237E"
                placeholder="Subjects"
                fontFamily={"noto-serif"}
                color="#1A237E"
                onChange={onChange}
                _placeholder={{ color: "#1A237E", fontFamily: "noto-serif" }}
                width="300px"
              >
                {getAllSubjects.subjects.map((items) => {
                  return (
                    <option key={items.subjectid} value={items.subjectname}>
                      {items.subjectname}
                    </option>
                  );
                })}
              </Select>
            </VStack>
          </Stack>

          <Button
            type="submit"
            bg="#1A237E"
            color="white"
            _hover={{ bg: " #202A9A" }}
            w="120px"
            h="38px"
            alignSelf="center"
            left="24%"
            fontFamily={"noto-serif"}
            transform="translateX(120%)"
            mt="20"
            size="md"
            borderRadius={50}
            onClick={onViewClick}
          >
            View
          </Button>
        </Box>
      </Grid>
      {isRender ? (
        <ViewAttendance subject={subject} enrollmentno={enrollmentno} />
      ) : (
        <>
          <h1>No Data Found</h1>
        </>
      )}
    </Box>
  );
}

export default SelectDetailAttendance;
