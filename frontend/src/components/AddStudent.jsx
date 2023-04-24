import React from "react";
import {
  Box,
  Image,
  Stack,
  Input,
  Text,
  Select,
  Button,
  Grid,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import background from "../images/background.png";
import curveBackground from "../images/Rectangle 9.png";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useAddStudentMutation } from "../service/amsSlice";

function AddStudent() {
  const [students, setStudentsDetails] = useState({
    enrollmentno: "",
    firstname: "",
    middlename: "",
    lastname: "",
    dob: "",
    flatno: "",
    area: "",
    city: "",
    state: "",
    gender: "",
    pincode: "",
    phone: "",
    email: "",
    password: "",
    division: "",
    semester: "",
    programid:1
  });

  const {
    enrollmentno,
    firstname,
    middlename,
    lastname,
    dob,
    flatno,
    area,
    city,
    state,
    gender,
    pincode,
    phone,
    email,
    password,
    division,
    semester,
    programid,
  } = students;

  const toast = useToast();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");

  const [selected, setSelected] = useState("male");
  const [addStudent,{isLoading}]=useAddStudentMutation()

  const onChange = (e) => {
    setStudentsDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onChangeSemester = (e) => {
    setSelectedSemester(e.target.value);
    setStudentsDetails((prevState) => ({
      ...prevState,
      semester: e.target.value,
    }));
  };

  const onChangeDivision = (e) => {
    setSelectedDivision(e.target.value);
    setStudentsDetails((prevState) => ({
      ...prevState,
      division: e.target.value,
    }));
  };

  const onChangeProgram = (e) => {
    setSelectedProgram(e.target.value);
    setStudentsDetails((prevState) => ({
      ...prevState,
      program: e.target.value,
    }));
  };

  const handleGenderChange = (value) => {
    setSelected(value);
    setStudentsDetails((prevState) => ({
      ...prevState,
      gender: value,
    }));
  };

  const addStundentData=(e)=>{
    e.preventDefault()
    addStudent(students).unwrap().then((response)=>{
        if(response.success==true){
            toast({
                title: response.messege,
                status: "success",
                duration: 9000,
                isClosable: true,
                colorScheme: "blue",
            });
        }else{
            toast({
                title: response.messege,
                status: "warning",
                duration: 9000,
                isClosable: true,
                colorScheme: "blue",
            });
        }
    })
  }

  return (
    <Box bg="#1A237E" h="100vh" w="206vh" overflow="hidden">
      <Image src={background} alt="Logo" h="100vh" mx="auto" mt="5dp" />

      <Box
        maxW={{ base: "90%", sm: "80%", md: "300vh" }}
        maxH={{ base: "90%", sm: "80%", md: "100vh" }}
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="15%"
        left="13%"
        transform="translate(-8%, -15%)"
      >
        <Image src={curveBackground} top="10%" w="300vh" h="100vh" />
      </Box>
      <Box
        maxW={{ base: "90%", sm: "80%", md: "250vh" }}
        maxH={{ base: "90%", sm: "80%", md: "100vh" }}
        justifyContent="center"
        alignItems="center"
        position="relative"
        top="15%"
        left="30%"
        transform="translate(-7%, -160%)"
        zIndex="10"
      >
        <Text
          // mx="auto"
          // left="10%"
          mt="6"
          fontSize="50px"
          // fontWeight="bold"
          color="#1A237E"
          w="720px"
          h="55px"
          textAlign="center"
        >
          ADD Students
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={20}
          mt={25}
        >
          <Stack spacing={25} direction={["row"]}>
            <Stack
            // spacing={8}
            // direction={['row']}
            >
              <Input
                type="text"
                focusBorderColor="#1A237E"
                placeholder="Enrollment No."
                _placeholder={{ color: "#1A237E" }}
                color="#1A237E"
                name="enrollmentno"
                value={enrollmentno}
                onChange={onChange}
              />
              <Input
                type="text"
                placeholder="First Name"
                focusBorderColor="#1A237E"
                _placeholder={{ color: "#1A237E" }}
                color="#1A237E"
                name="firstname"
                value={firstname}
                onChange={onChange}
              />
              <Input
                type="text"
                focusBorderColor="#1A237E"
                placeholder="Middle Name"
                _placeholder={{ color: "#1A237E" }}
                color="#1A237E"
                name="middlename"
                value={middlename}
                onChange={onChange}
              />
              <Input
                type="text"
                focusBorderColor="#1A237E"
                placeholder="Last Name"
                _placeholder={{ color: "#1A237E" }}
                color="#1A237E"
                name="lastname"
                value={lastname}
                onChange={onChange}
              />
              <Input
                type="text"
                focusBorderColor="#1A237E"
                placeholder="Date Of Birth"
                _placeholder={{ color: "#1A237E" }}
                color="#1A237E"
                name="dob"
                value={dob}
                onChange={onChange}
              />
              <RadioGroup
                onChange={(value) => handleGenderChange(value)}
                value={gender}
              >
                <Stack direction="row">
                  <Radio value="male">Male</Radio>
                  <Radio value="female">Female</Radio>
                  <Radio value="other">Other</Radio>
                </Stack>
              </RadioGroup>
            </Stack>
            <Stack
            // spacing={8}
            // direction={['row']}
            >
              <Input
                type="text"
                focusBorderColor="#1A237E"
                placeholder="Flat No."
                _placeholder={{ color: "#1A237E" }}
                color="#1A237E"
                name="flatno"
                value={flatno}
                onChange={onChange}
              />
              <Input
                type="text"
                focusBorderColor="#1A237E"
                placeholder="Area"
                _placeholder={{ color: "#1A237E" }}
                color="#1A237E"
                name="area"
                value={area}
                onChange={onChange}
              />
              <Input
                type="text"
                focusBorderColor="#1A237E"
                placeholder="City"
                _placeholder={{ color: "#1A237E" }}
                color="#1A237E"
                name="city"
                value={city}
                onChange={onChange}
              />
              <Input
                type="text"
                focusBorderColor="#1A237E"
                placeholder="State"
                _placeholder={{ color: "#1A237E" }}
                color="#1A237E"
                name="state"
                value={state}
                onChange={onChange}
              />
              <Input
                type="number"
                focusBorderColor="#1A237E"
                placeholder="Pincode"
                _placeholder={{ color: "#1A237E" }}
                color="#1A237E"
                name="pincode"
                value={pincode}
                onChange={onChange}
              />
            </Stack>
            <Stack
            // spacing={6}
            // direction={['row']}
            >
              <Input
                type="tel"
                focusBorderColor="#1A237E"
                placeholder="Phone No."
                _placeholder={{ color: "#1A237E" }}
                color="#1A237E"
                name="phone"
                value={phone}
                onChange={onChange}
              />
              <Input
                type="email"
                focusBorderColor="#1A237E"
                placeholder="Email"
                _placeholder={{ color: "#1A237E" }}
                color="#1A237E"
                name="email"
                value={email}
                onChange={onChange}
              />
              <InputGroup>
                <Input
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  focusBorderColor="#1A237E"
                  _placeholder={{ color: "#1A237E" }}
                  color="#1A237E"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>

              <Select
                placeholder="Semester"
                color="#1A237E"
                focusBorderColor="#1A237E"
                _placeholder={{ color: "#1A237E" }}
                value={selectedSemester}
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
                placeholder="Programe"
                color="#1A237E"
                focusBorderColor="#1A237E"
                _placeholder={{ color: "#1A237E" }}
                value={selectedProgram}
                onChange={onChangeProgram}
              >
                <option value="MCA">MCA</option>
                <option value="MscIT">MscIT</option>
                <option value="BCA">BCA</option>
              </Select>
              <Select
                placeholder="Division"
                color="#1A237E"
                focusBorderColor="#1A237E"
                _placeholder={{ color: "#1A237E" }}
                value={selectedDivision}
                onChange={onChangeDivision}
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <br></br>
                <option value="C">C</option>
              </Select>
            </Stack>
          </Stack>
        </Grid>
        <Button
          type="submit"
          bg="#1A237E"
          color="white"
          _hover={{ bg: " #202A9A" }}
          w="150px"
          h="49px"
          alignSelf="center"
          left="20%"
          onClick={addStundentData}
        >
          ADD Student
        </Button>
      </Box>
    </Box>
  );
}

export default AddStudent;
