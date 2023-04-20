
// import { Box, Grid, Image } from "@chakra-ui/react";
// import background from "../images/background.png";
// import curveBackground from "../images/Rectangle.png";
// import icon1 from "../images/Collaborator Male.png";
// import icon2 from "../images/Todo List.png";
// import icon3 from "../images/Calendar.png";
// import icon4 from "../images/Diploma.png";
// import icon5 from "../images/Book Shelf.png";
// import icon6 from "../images/FAQ.png";

// function HomeScreen() {
//   return (
//     <Box bg="#1A237E">
//       <Image src={background} alt="Logo" w="780dp" h="971dp" mx="auto" mt="50px" />
//       <Box
//         bgImage={curveBackground}
//         bgSize="1364dp 952dp"
//         w="1364dp"
//         h="952dp"
//         position="relative"
//       >
//         <Grid
//           templateColumns="repeat(3, 1fr)"
//           gap="30px"
//           justifyContent="center"
//           alignItems="center"
//           position="absolute"
//           top="50%"
//           left="50%"
//           transform="translate(-50%, -50%)"
//         >
//           <Box bg="#FFFFFF" w="226dp" h="170dp" borderRadius="10px">
//             <Image src={icon1} alt="Icon 1" w="100dp" h="100dp" mx="auto" mt="35px" />
//           </Box>
//           <Box bg="#FFFFFF" w="226dp" h="170dp" borderRadius="10px">
//             <Image src={icon2} alt="Icon 2" w="100dp" h="100dp" mx="auto" mt="35px" />
//           </Box>
//           <Box bg="#FFFFFF" w="226dp" h="170dp" borderRadius="10px">
//             <Image src={icon3} alt="Icon 3" w="100dp" h="100dp" mx="auto" mt="35px" />
//           </Box>
//           <Box bg="#FFFFFF" w="226dp" h="170dp" borderRadius="10px">
//             <Image src={icon4} alt="Icon 4" w="100dp" h="100dp" mx="auto" mt="35px" />
//           </Box>
//           <Box bg="#FFFFFF" w="226dp" h="170dp" borderRadius="10px">
//             <Image src={icon5} alt="Icon 5" w="100dp" h="100dp" mx="auto" mt="35px" />
//           </Box>
//           <Box bg="#FFFFFF" w="226dp" h="170dp" borderRadius="10px">
//             <Image src={icon6} alt="Icon 6" w="100dp" h="100dp" mx="auto" mt="35px" />
//           </Box>
//         </Grid>
//       </Box>
//     </Box>
//   );
// }

// export default HomeScreen;


import { Box, Grid, Image , Text} from "@chakra-ui/react";
// import { Box, Image} from "@chakra-ui/react";
import background from "../images/background.png";
import curveBackground from "../images/Rectangle 9.png";
import icon1 from "../images/Group 55.png";
import icon2 from "../images/Group 58.png";
import icon3 from "../images/Group 54.png";
import icon4 from "../images/Group 59.png";
// import icon5 from "../images/Book Shelf.png";
// import icon6 from "../images/FAQ.png";

function Manage() {
  // document.documentElement.style.overflow = 'hidden';
  // document.body.style.overflow = 'hidden';

  return (

    <Box bg="#1A237E" h="100vh" w="206vh" overflow="hidden">
        <Image src={background} alt="Logo" w="691dp" h="100vh" mx="auto" mt="5dp"  opacity={0.5}/>
        {/* <Box background={curveBackground}  w="550dp" h="250dp" zIndex="1"></Box> */}
        <Box
      //  position="relative"
      //  bgImage={`url(${curveBackground})`}
      //  bgPosition="center"
      //  bgSize="fill"
        // w="1364dp"
        maxW={{ base: "90%", sm: "80%", md: "300vh" }}
        maxH={{ base: "90%", sm: "80%", md: "100vh" }}
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="15%"
        left="13%"
        transform="translate(-8%, -15%)"
        // pl={30}
        // h="100vh"
        // overflow="hidden"
      >
    
          <Image 
            
            // objectFit='fi'
            src={curveBackground}
            // left="20%" 
            top="10%"
            w="300vh"
            h="100vh"
            opacity={1}
            // overflow="hidden"
            // alt='Dan Abramov' 
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
          
          // m={50}
        >
          <Box bg="#D9D9D9" w="226px" h="170px" borderRadius="10px" >
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
          <Box bg="#D9D9D9" w="226px" h="170px" borderRadius="10px">
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
          <Box bg="#D9D9D9" w="226px" h="170px" borderRadius="10px">
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
          
          
          <Box bg="#D9D9D9" w="226px" h="170px" borderRadius="10px">
            <Image src={icon4} alt="Icon 4" w="100px" h="100px" mx="auto" mt="35px" />
            <Text 
            ml="2"
            p = "10"
            color="#1A237E"
            fontSize="md"
            fontFamily={"noto-serif"}
            textAlign="center"
            > 
            View Student</Text>
          </Box>
          
        </Grid> 
      </Box>
    </Box>

    
  );
}

export default Manage;
