import React from 'react'
import {Box, Text, Img, Button, Flex, Wrap, WrapItem} from '@chakra-ui/react'
import Styles from './Module.NextLevel.css'
const NextLevel = () => {
  return (
    <>
<Flex color='white' className='f2'>
  
  <Box flex='1' bg='rgb(255,217,212)'>
    <Img margin='auto' height='300px' width='400px' src='https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/why/start-illu.jpg'/>
  </Box>
  <Box flex='1' bg='rgb(255,217,212)'>
    <Text className='takeoff'>Take your digital <br />
marketing to the <br /> next level!</Text>
<Wrap>
<WrapItem>

<Button marginLeft='23px' borderRadius='15px' colorScheme='messenger'>HouseTon, we have lift-off!</Button>
</WrapItem>
</Wrap>
  </Box>
</Flex>
    </>
  )
}

export default NextLevel