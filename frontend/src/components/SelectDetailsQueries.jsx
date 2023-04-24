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
} from "@chakra-ui/react";
import bg from "../images/background.png";
import { useState } from "react";
import ViewQueries from "./ViewQueries";
import background from "../images/animation.gif";

import { useGetAllEmployeesQuery } from "../service/amsSlice";

function SelectDetailsQueries() {
  const { data: getAllEmployees, isLoading: isEmployeeDataLoading } =
    useGetAllEmployeesQuery();

  const [isRender, setIsRender] = useState(false);

  const [employeeid, setEmployeeid] = useState(0);

  const onChangeEmployee = (e) => {
    setEmployeeid(e.target.value);
    setIsRender(true);
  };

  if (isEmployeeDataLoading) {
    return (
      <Box bg="white" h="100vh" w="223vh" overflow="hidden">
        <Image src={background} alt="loader" h="100vh" ml="27%" mt="5dp" />
      </Box>
    );
  }
  return (
    <Box bg="#1A237E" h="100vh" w="206vh" overflow="hidden">
      <Box bg="#1A237E" h="100vh" overflow="hidden">
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
            View Queries
          </Text>
          <Grid
            gap={{ base: "90%", sm: "80%", md: "110px" }}
            justifyContent="center"
            alignItems="center"
            position="absolute"
            top="30%"
            left="42%"
            transform="translate(-42%, -45%)"
            m={50}
          >
            <Text
              mt="-120"
              fontSize="45px"
              fontFamily={"noto-serif"}
              color="#1A237E"
              w="250px"
              h="50px"
              textAlign="center"
              transform="translateX(85%)"
            >
              Add Subject
            </Text>
            <Box
              bgColor="white"
              width={800}
              borderRadius={15}
              m={2}
              align="center"
              mx="222px"
            >
              <Stack direction={"row"} margin={5} spacing={100}>
                <VStack>
                  <Select
                    focusBorderColor="#1A237E"
                    placeholder="Employee Name"
                    fontFamily={"noto-serif"}
                    color="#1A237E"
                    _placeholder={{
                      color: "#1A237E",
                      fontFamily: "noto-serif",
                    }}
                    onChange={onChangeEmployee}
                    width="300px"
                  >
                    {getAllEmployees.employees.map((items) => {
                      return (
                        <option key={items.employeeid} value={items.employeeid}>
                          {items.firstname +
                            " " +
                            items.middlename +
                            " " +
                            items.lastname}
                        </option>
                      );
                    })}
                  </Select>
                </VStack>
              </Stack>
            </Box>
          </Grid>
          {isRender ? (
            <ViewQueries employeeid={employeeid} />
          ) : (
            <>
              <h1>No Data Found</h1>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default SelectDetailsQueries;
