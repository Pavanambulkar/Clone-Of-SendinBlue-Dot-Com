import React from 'react'
import {Box, Text, Img, Button, Flex, Wrap, WrapItem} from '@chakra-ui/react'

const MarketZen = () => {
  return (
    <>
    <Flex color='white' className='f2'>
  
  <Box flex='1' bg='rgb(255,217,212)'>
    <Img margin='auto' height='300px' width='400px' src='https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/why/start-illu.jpg'/>
  </Box>
  <Box flex='1' bg='rgb(255,217,212)'>
    <Text className='takeoff'>Ready to find your marketing zen?</Text>
    <Text color='grey' fontSize='18px' marginLeft='20px'  >Take the stress out of your work day with a solution that’s <br /> built for you!</Text>
<Wrap>
<WrapItem>

<Button marginLeft='23px' marginTop='30px' borderRadius='15px' colorScheme='messenger'>Get Started Free</Button>
</WrapItem>
</Wrap>
  </Box>
</Flex>
    </>
  )
}

export default MarketZen