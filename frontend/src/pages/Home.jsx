import { Box, Center, Grid, Image, Text } from "@chakra-ui/react";
import background from "../images/background.png";
import curveBackground from "../images/Rectangle 9.png";
import { useNavigate } from "react-router-dom";
import icon1 from "../images/Collaborator Male.png";
import icon2 from "../images/Todo List.png";
import icon4 from "../images/Diploma.png";
import icon5 from "../images/Book Shelf.png";
import icon6 from "../images/faq.png";
function Home(){
  const navigate=useNavigate()
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
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={{ base: "40px", md: "70px" }}
          justifyContent="center"
          position="absolute"
          top="50%"
          left="50%"  
          paddingStart="20"
          transform="translate(-50%, -50%)"
        >
          <Box
            bg="#D9D9D9"
            alignItems={"center"}
            w="226px"
            h="170px"
            ml="-20"
            borderRadius="10px"
            onClick={()=>{ navigate('/Manage')} }
          >
            <Image
              src={icon1}
              alt="Icon 1"
              w="100px"
              h="100px"
              mx="auto"
              mt="35px"
            />
            <Text ml="2" p="10" color="#1A237E" fontSize="md">
              Manage Student And TeachingStaff
            </Text>
          </Box>
          <Box  bg="#D9D9D9" ml="-300" w="226px" h="170px" borderRadius="10px" onClick={()=>{navigate('/SelectDetailAttendance')}}>
            <Image
              src={icon2}
              alt="Icon 2"
              w="100px"
              h="100px"
              mx="auto"
              mt="35px"
            />
            <Text p="10" color="#1A237E" fontSize="md">
              Manage Attendance
            </Text>
          </Box>
          
          <Box bg="#D9D9D9" ml="-49" w="226px" h="170px" borderRadius="10px" onClick={()=>{navigate('/ManageSubject')}}>
            <Image
              src={icon5}
              alt="Icon 5"
              w="100px"
              h="100px"
              mx="auto"
              mt="35px"
            />
            <Text ml="2" p="10" fontSize="md" color="#1A237E">
              Manage Subject
            </Text>
          </Box>
          <Box bg="#D9D9D9" ml="230" w="226px" h="170px" borderRadius="10px" onClick={()=>{navigate('/SelectDetailsQueries')}}>
            <Image
              src={icon6}
              alt="Icon 6"
              w="100px"
              h="100px"
              mx="auto"
              mt="35px"
            />
            <Text ml="2" p="10" color="#1A237E" fontSize="md">
              View Queries
            </Text>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;