import React from 'react'
import Styles from './Module.Leading.css'

import {Flex, Text, Box, Img} from '@chakra-ui/react'
const Leading = () => {
  return (
    <>
    <Flex
      paddingTop="60px"
        maxW="1000px"
        w={["90vm", "90vm", "70vm", "70vm"]}
        direction={["column", "column", "row", "row"]}
        justify="center"
        boxShadow="md"
        rounded="lg"
        margin="auto"
        width="90%"
      >
    <Flex width="100%" marginTop="50px" align="center" mx="2" bg="white"  color='black' className='flex3'>
  
  <Box flex='1' >
    <Text fontSize={{ base: "24px", md: "38px", lg: "42px" }} className='takeoff'>Leading the way in <br /> Digital Marketing</Text>
    <Text fontSize={{ base: "24px", md: "28px", lg: "35px" }} className='growing'>Named as one of the Top 100 software companies of 2021 and <br /> rated as the best Marketing Automation platform for SMBs. <br />
         Grow your business with Sendinblue!</Text>

         <Text fontSize={{ base: "24px", md: "24px", lg: "24px" }} className='star'> ⭐⭐⭐⭐⭐ 4.5/5 on Capterra / 900+ reviews</Text>
         <Text fontSize={{ base: "24px", md: "24px", lg: "24px" }} className='star'> ⭐⭐⭐⭐⭐ 4.6/5 on G2 / 1300+ reviews</Text>
         <Text fontSize={{ base: "24px", md: "24px", lg: "24px" }} className='star'> ⭐⭐⭐⭐⭐ 4.5/5 on Trustpilot / 2400+ reviews</Text>

  </Box>
  </Flex>
  <Flex width="100%" marginTop="50px" align="center" mx="2" bg="white">
  <Box flex='1' >
    <Img height='400px' margin='auto' width='400px' src='https://www.sendinblue.com/wp-content/uploads/2022/04/Rating-awards-SS-2022.png' />
  </Box>
</Flex>
</Flex>
    </>
  )
}

export default Leading