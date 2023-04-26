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
import { useEffect, useState } from "react";
import ViewQueries from "./ViewQueries";
import background from "../images/animation.gif";
import { useToast } from "@chakra-ui/react";
import { useGetAllEmployeesQuery,useLazyGetAllQueriesQuery } from "../service/amsSlice";

function SelectDetailsQueries() {
  const { data: getAllEmployees, isLoading: isEmployeeDataLoading } =
    useGetAllEmployeesQuery();

  const [isRender, setIsRender] = useState(false);

  const [employeeid, setEmployeeid] = useState(0);
  
  const [queries,setQueries]=useState([])

  const [success,setSuccess]=useState(false)
  
  const toast=useToast()
  const [setDataForQueries,{data: getAllQueries,isSuccess, isLoading: isQueriesDataLoading}] =
  useLazyGetAllQueriesQuery();

  const onViewClick = (e) => {
    setDataForQueries(employeeid)
  };
  useEffect(()=>{
   if(isSuccess){
     if(getAllQueries.success==false){
       toast({
         title: getAllQueries.messege,
         status: "success",
         duration: 9000,
         isClosable: true,
         colorScheme: "blue",
       });
     }else{
      setQueries(getAllQueries)
      setSuccess(true)
    }
   }
  },[getAllQueries])
  if (isEmployeeDataLoading) {
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
          opacity={0.3}
        />
        <Grid
            gap={{ base: "90%", sm: "80%", md: "110px" }}
            justifyContent="center"
            alignItems="center"
            position="absolute"
            top="5%"
            left="10%"
            transform="translate(-42%, -45%)"
            mt={10}
            ml={8}
          >
        <Box
          maxW={{ base: "90%", sm: "80%", md: "250vh" }}
          maxH={{ base: "90%", sm: "80%", md: "150vh" }}
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="10%"
          left="17.5%"
        >
          <Text
            mt="-15px"
            mx="210px"
            fontSize="4xl"
            color="white"
            w="680px"
            h="62px"
            ml="23%"
            textAlign="center"
            fontFamily={"noto-serif"}
          >
            View Queries
          </Text>
            <Box
              bgColor="white"
              h={140}
              width={350}
              borderRadius={15}
              align="center"
              mx="478px"
            >
              <Stack direction={"row"} margin={5} spacing={100}>
                <VStack>
                  <Select
                    focusBorderColor="#1A237E"
                    placeholder="Employee Name"
                    fontFamily={"noto-serif"}
                    color="#1A237E"
                    mt={7}
                    _placeholder={{
                      color: "#1A237E",
                      fontFamily: "noto-serif",
                    }}
                    onChange={(e)=>{setEmployeeid(e.target.value)}}
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
              <Button
            type="submit"
            bg="#1A237E"
            color="white"
            _hover={{ bg: " #202A9A" }}
            w="120px"
            h="38px"
            alignSelf="center"
            fontFamily={"noto-serif"}
            size="md"
            borderRadius={50}
            onClick={onViewClick}
          >
            ViewQueries
          </Button>
            </Box>
          {success && (
            <ViewQueries queries={queries} />
          ) }
        </Box>
        </Grid>
    </Box>
  );
}

export default SelectDetailsQueries;
