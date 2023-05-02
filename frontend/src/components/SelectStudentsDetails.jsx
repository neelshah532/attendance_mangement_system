import {
  Box, 
  Image,
  Text,
  Button,
  Select,
} from "@chakra-ui/react";
import background from "../images/background.png"; // replace with your own image
import { useState } from "react";
import ViewStudent from "./ViewStudent";
function SelectDetails() {
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [isRenderReady, setIsRenderReady] = useState(false);

  const onChangeSemester = (e) => {
    setSelectedSemester(e.target.value);
  };
  const onChangeDivision = (e) => {
    setSelectedDivision(e.target.value);
  };

  const onDisplay = (e) => {
    setIsRenderReady(true);
  };

  return (
    <Box
      bg="#1A237E"
      alignItems={"center"}
      h="100vh"
      w="206vh"
      overflow="hidden"
    >
      <Image
        src={background}
        alt="Logo"
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
        top="10%"
        left="16%"
      >
        <Text
          mt="-33px"
          mx="230px"
          mb="10"
          fontSize="5xl"
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
          paddingTop={5}
        >
          <Select
            marginBottom={10}
            width={500}
            placeholder="Semester"
            fontFamily="noto-sherif"
            color="#1A237E"
            focusBorderColor="#1A237E"
            _placeholder={{ color: "#1A237E" }}
            name="semester"
            onChange={onChangeSemester}
          >
            <option value="Semester-1">Semester 1</option>
            <option value="Semester-2">Semester 2</option>
            <option value="Semester-3">Semester 3</option>
            <option value="Semester-4">Semester 4</option>
            <option value="Semester-5">Semester 5</option>
            <option value="Semester-6">Semester 6</option>
          </Select>
          <Select
            placeholder="Division"
            width={500}
            fontFamily="noto-sherif"
            name="division"
            color="#1A237E"
            focusBorderColor="#1A237E"
            _placeholder={{ color: "#1A237E" }}
            onChange={onChangeDivision}
          >
            <option value="A">A</option>
            <option value="B">B</option>
          </Select>
          <Button
            type="submit"
            bg="#1A237E"
            color="white"
            _hover={{ bg: " #202A9A" }}
            w="100px"
            h="35px"
            mt="5%"
            fontWeight={"normal"}
            alignItem="center"
            mb="5%"
            fontFamily={"noto-serif"}
            borderRadius={50}
            fontSize={20}
            onClick={onDisplay}
          >
            View
          </Button>
          {isRenderReady && (
            <ViewStudent
              division={selectedDivision}
              semester={selectedSemester}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default SelectDetails;
