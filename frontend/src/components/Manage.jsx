
import { Box, Grid, Image , Text} from "@chakra-ui/react";
import background from "../images/background.png";
import curveBackground from "../images/Rectangle 9.png";
import icon1 from "../images/Group 55.png";
import icon2 from "../images/Group 58.png";
import icon3 from "../images/Group 54.png";
import icon4 from "../images/Group 59.png";
import { useNavigate } from "react-router-dom";

function Manage() {
  const navigate=useNavigate()
  return (
    <Box bg="#1A237E" h="100vh" w="206vh" overflow="hidden">
        <Image src={background} alt="Logo" w="691dp" h="100vh" mx="auto" mt="5dp"  opacity={0.5}/>
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
    
          <Image             
            src={curveBackground}
            top="10%"
            w="300vh"
            h="100vh"
            opacity={1}
        />
      
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={{base: "40px" , md:"90px"}}
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <Box bg="#D9D9D9" w="226px" h="170px" borderRadius="10px" onClick={()=>{navigate('/AddTeacher')}}>
            <Image src={icon1} alt="Icon 1" w="100px" h="100px" mx="auto" mt="35px" />
            <Text 
            ml="2"
            p = "10"
            color="#1A237E"
            fontSize="md"
            fontFamily={"noto-serif"}
            textAlign="center"
            > 
            Add Teaching Staff</Text>
          </Box>
          <Box bg="#D9D9D9" w="226px" h="170px" borderRadius="10px" onClick={()=>{navigate('/ViewTeacher')}}>
            <Image src={icon2} alt="Icon 2" w="100px" h="100px" mx="auto" mt="35px" />
            <Text 
            ml="2"
            p = "10"
            color="#1A237E"
            fontSize="md"
            fontFamily={"noto-serif"}
            textAlign="center"
            > 
            View Teaching Staff</Text>
          </Box>
          <Box bg="#D9D9D9" w="226px" h="170px" borderRadius="10px" onClick={()=>{navigate('/AddStudent')}}>
            <Image src={icon3} alt="Icon 3" w="100px" h="100px" mx="auto" mt="35px" />
            <Text 
            ml="2"
            p = "10"
            color="#1A237E"
            fontSize="md"
            fontFamily={"noto-serif"}
            textAlign="center"
            > 
            Add Student
            </Text>
          </Box>
          <Box bg="#D9D9D9" w="226px" h="170px" borderRadius="10px" onClick={()=>{navigate('/ViewStudent')}}>
            <Image src={icon4} alt="Icon 4" w="100px" h="100px" mx="auto" mt="35px" />
            <Text 
            ml="2"
            p = "10"
            color="#1A237E"
            fontSize="md"
            fontFamily={"noto-serif"}
            textAlign="center"> 
            View Student</Text>
          </Box>
        </Grid> 
      </Box>
    </Box>
  );
}

export default Manage;
