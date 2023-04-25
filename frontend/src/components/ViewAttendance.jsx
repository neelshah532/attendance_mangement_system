  import React from "react";
  import { Box, Button, Stack, Image, Text, HStack } from "@chakra-ui/react";

  import { Checkbox } from "@chakra-ui/react";
  import bg from "../images/background.png"; // replace with your own image
  import { useState } from "react";
  import {
    useGetAllAttendanceQuery,
    useUpdateAttendanceMutation,
  } from "../service/amsSlice";
  import { useEffect } from "react";
  import { useToast } from "@chakra-ui/react";
  import background from "../images/animation.gif";

  function ViewAttendance({ subject, enrollmentno }) {
    const {
      data: getAllAttendance,
      isSuccess,
      isLoading: isAttendanceLoading,
    } = useGetAllAttendanceQuery({ subject, enrollmentno });

    const [checkedState, setCheckedState] = useState({});
    const [updateAttendance, { isLoading: isUpdateLoding }] =
      useUpdateAttendanceMutation();
    const toast = useToast();
    const handleCheckboxChange = (event) => {
      const { name, checked } = event.target;
      setCheckedState({
        ...checkedState,
        [name]: checked,
      });
    };

    useEffect(() => {
      if (isSuccess) {
        const initialCheckedState = {};
        getAllAttendance.attendance.forEach((item) => {
          const key = Object.keys(item)[0];
          initialCheckedState[key] = item[key] === 1;
        });
        setCheckedState(initialCheckedState);
      }
    }, [isSuccess, getAllAttendance]);

    const onUpdateAttendance = (date, checked) => {
      var attend;
      if (checked == true) {
        attend = 1;
      } else {
        attend = 0;
      }
      const details = {
        subject: subject,
        date: date,
        enrollmentno: enrollmentno,
        attend: attend,
      };
      console.log(details)
      updateAttendance(details)
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
          if (isUpdateLoding) {
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

    if (isAttendanceLoading) {
      return (
        <Box bg="white" h="100vh" w="223vh" overflow="hidden">
          <Image src={background} alt="loader" h="100vh" ml="27%" mt="5dp" />
        </Box>
      );
    }
    return (

      <Box
        bg="#1A237E"
        alignItems={"center"}
        h="100vh"
        w="206vh"
        overflow="hidden"
      >
        <Image
          src={bg}
          alt="Logo"
          w="691dp"
          h="100vh"
          mx="auto"
          mt="5dp"
          opacity={0.3}
        />
        <Box
          maxW={{ base: "90%", sm: "80%", md: "300vh" }}
          maxH={{ base: "90%", sm: "80%", md: "150vh" }}
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="50%"
          left="18%"
        >
          {/* <Text
            mt="-33px"
            mx="195px"
            mb="10"
            fontSize="5xl"
            color="white"
            w="680px"
            h="62px"
            textAlign="center"
            fontFamily={"noto-serif"}
          >
            View Attendance
          </Text> */}
          <Box
           style={{ overflowY:"scroll", height: "50vh" }}
         > 
          {getAllAttendance.attendance.map((items, index) => {
            const key = Object.keys(items)[0];
            const isChecked = checkedState[key];
            return (
              <Box
                key={index}
                bgColor="white"
                width={460}
                borderRadius={15}
                mx="313px"
                mb={2}
              >
                <HStack ml="6" gap={5}>
                  <Text
                    left="20%"
                    p={3}
                    w={180}
                    fontFamily={"noto-serif"}
                    color="#1A237E"
                    fontSize={20}
                  >
                    {Object.keys(items)[0]}
                  </Text>
                  <Stack direction="row">
                    <Stack spacing={[1, 5]} direction={["column", "row"]}>
                      <Checkbox
                        onChange={handleCheckboxChange}
                        name={key}
                        isChecked={isChecked}
                      />
                    </Stack>
                  </Stack>
                  <Button
                    type="submit"
                    bg="#1A237E"
                    color="white"
                    _hover={{ bg: " #202A9A" }}
                    rounded={"lg"}
                    fontFamily={"noto-serif"}
                    h={10}
                    left="10%"
                    fontSize={18}
                    onClick={() => {
                      onUpdateAttendance(key, isChecked);
                    }}
                  >
                    Update
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

  export default ViewAttendance;
