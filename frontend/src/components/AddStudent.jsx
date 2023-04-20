import React from "react";
import { Box, Image , Stack, Input, Text, Select, Button, Grid, InputRightElement, InputGroup} from "@chakra-ui/react";
import { Radio, RadioGroup } from '@chakra-ui/react'
// import {DatePicker} from 'chakra-ui-date-picker'
// import { Box, Image} from "@chakra-ui/react";
import background from "../images/background.png";
import curveBackground from "../images/Rectangle 9.png";


function AddStudent() {
    const [value, setValue] = React.useState('1')
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    
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
    
          <Image 
            
            src={curveBackground}
            top="10%"
            w="300vh"
            h="100vh"
             
        />
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
                Add Students
            </Text>
        <Grid
            templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)"
            }}
            gap={20}
            mt={25}>
            <Stack 
            spacing={25}
            direction={['row']}>
                <Stack 
                // spacing={8} 
                // direction={['row']}
                >
                    <Input type='text' focusBorderColor='#1A237E' placeholder='Enrollment No.' _placeholder={{ color:"#1A237E"}}  color="#1A237E"/>
                    <Input type='text' placeholder='First Name' focusBorderColor='#1A237E' _placeholder={{ color:"#1A237E"}}   color="#1A237E"/>
                    <Input type='text' focusBorderColor='#1A237E' placeholder='Middle Name' _placeholder={{ color:"#1A237E"}}  color="#1A237E"/>
                    <Input type='text'  focusBorderColor='#1A237E' placeholder='Last Name' _placeholder={{ color:"#1A237E"}}  color="#1A237E"/>
                    <Input type='date' focusBorderColor='#1A237E' placeholder='Date Of Birth' _placeholder={{ color:"#1A237E"}} color="#1A237E"/>
                    {/* either you can use defaultValue='2' in RadioGroup */}
                    <RadioGroup onChange={setValue} value={value}> 
                        <Stack direction='row'>
                            <Radio value='1'  >Male</Radio>
                            <Radio value='2' >Female</Radio>
                            <Radio value='3'>Other</Radio>
                        </Stack>
                    </RadioGroup>
                    </Stack> 
                <Stack 
                // spacing={8}
                // direction={['row']}
                >
                    <Input type='text' focusBorderColor='#1A237E' placeholder='Flat No.' _placeholder={{ color:"#1A237E"}}  color="#1A237E"/>
                    <Input type='text' focusBorderColor='#1A237E' placeholder='Area' _placeholder={{ color:"#1A237E"}} color="#1A237E"/>
                    <Input type='text'focusBorderColor='#1A237E' placeholder='City' _placeholder={{ color:"#1A237E"}}  color="#1A237E"/>
                    <Input type='text'focusBorderColor='#1A237E' placeholder='State' _placeholder={{ color:"#1A237E"}} color="#1A237E"/>
                    <Input type='number'focusBorderColor='#1A237E' placeholder='Pincode' _placeholder={{ color:"#1A237E"}}  color="#1A237E"/>
                    
                    
                </Stack> 
                 <Stack 
                // spacing={6}
                // direction={['row']}
                >
                    <Input type='tel' focusBorderColor='#1A237E' placeholder='Phone No.' _placeholder={{ color:"#1A237E"}}  color="#1A237E"/>
                    <Input type='email'focusBorderColor='#1A237E' placeholder='Email' _placeholder={{ color:"#1A237E"}}  color="#1A237E"/>
                    <InputGroup>
                    <Input type={show ? 'text' : 'password'} placeholder='Password'focusBorderColor='#1A237E' _placeholder={{ color:"#1A237E"}}  color="#1A237E"/> 
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Select placeholder='Semester'  color="#1A237E" focusBorderColor='#1A237E'  _placeholder={{ color:"#1A237E"}}>
                        <option value='semester1'>semester 1</option>
                        <option value='semester2'>semester 2</option>
                        <option value='semester3'>semester 3</option>
                        <option value='semester4'>semester 4</option>
                    </Select>
                    <Select placeholder='Programe'  color="#1A237E" focusBorderColor='#1A237E' _placeholder={{ color:"#1A237E"}}>
                        <option value='Mca'>Mca</option>
                        <option value='MscIT'>MscIT</option>
                        <option value='Bca'>Bca</option>

                    </Select>
                    <Select placeholder='Division'  color="#1A237E" focusBorderColor='#1A237E'  _placeholder={{ color:"#1A237E"}}>
                        <option value='A'>A</option>
                        <option value='B'>B</option>
                        <br></br>
                        <option value='C'>C</option>
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
        >
           Add
        </Button>
        </Box>
        
    </Box>

    );
}

export default AddStudent;