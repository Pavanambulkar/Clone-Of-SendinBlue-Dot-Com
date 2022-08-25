import { Box, Flex, Img, Text } from '@chakra-ui/react'
import React from 'react'
import Styles from './Module.Technology.css'

const Technology = () => {
  return (
    <>
    <Flex marginTop='20px' width="90%" margin='auto' color='white'>
    <Box flex='1' >
    <Text marginTop='60px' className='taking'>Switch to a platform acclaimed <br /> by technology specialists</Text>
  </Box>
  <Box flex='1' >
    
        <Img src='https://www.sendinblue.com/_next_corporate/_next/image//?url=https%3A%2F%2Fwww.sendinblue.com%2Fwp-content%2Fuploads%2F2021%2F12%2Fawards.png&w=1920&q=75' />
      

  </Box>
</Flex>
    </>
  )
}

export default Technology