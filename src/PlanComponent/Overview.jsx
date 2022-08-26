import { Badge, Box, Button, Flex, Highlight, Progress, Text, WrapItem } from '@chakra-ui/react'
import React from 'react'

const Overview = () => {
  return (
    <>
      <Text fontSize='30px' fontWeight='bold' >OverView</Text>
    <Flex color='white' width='99%' margin='auto'>
  
  <Box flex='1' color='black'>
    <Text fontWeight='bold' fontSize="20px">Free Plan</Text>
    <Text marginTop='20px' color='grey'>The Free plan has no expiration, but there is a  </Text>
    <Text fontWeight='bold'>daily sending limit of 300 emails.</Text>
    <Text fontSize='30px' fontWeight='bold' marginTop='20px' > ₹0.00 / month </Text>
    <Button colorScheme='blue' variant='link' fontSize="20px" marginTop='63px'>
    Remove daily sending limit
  </Button>
  </Box>
  <Box flex='1' color='black'>
  <Text fontWeight='bold' fontSize="20px">Usage</Text>
  <Text marginTop='20px' color='grey'>Daily emails remaining  </Text>
  <Progress marginTop='10px' value={80} />
  <Text display='flex' gap='30px' marginTop='10px' color='grey'>Daily emails in your plan         <Text>300</Text> </Text>
  <Text display='flex' gap='90px' marginTop='10px' color='grey'>Daily emails sent         <Text>0</Text> </Text>
  <Text>----------------------------------------------------</Text>
  <Text display='flex' fontWeight='bold' gap='50px' marginTop='3px' color='grey'>Daily emails remaining         <Text>300</Text> </Text>
  <Button colorScheme='blue' variant='link' fontSize="20px" marginTop='10px'>
    Get a monthly Plan
  </Button>

    
  </Box>
  <Box flex='1' color='black'  textAlign='center'>
  <Text fontSize='30px' fontWeight='bold' color='blue'  > Get a plan </Text>
  <Text marginTop='20px' color='grey'>To help you grow your business </Text>
 <Text fontWeight='bold' fontSize='15px' display='flex' margin='auto' justifyContent='center' textAlign='center' marginTop='30px'>Starting At</Text>
 <Text fontSize='30px' fontWeight='bold' marginTop='20px' > ₹1,510.00/ mo. </Text>
 <Text   marginTop='10px' color='grey'>₹1,359.00/month with annual payment </Text>

 <WrapItem>
      <Button width='100%' height='60px' fontSize='25px' marginTop='20px' colorScheme='blue'>Start</Button>
    </WrapItem>
  </Box>
</Flex>
    </>
  )
}

export default Overview