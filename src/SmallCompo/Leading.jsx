import React from 'react'
import Styles from './Module.Leading.css'

import {Flex, Text, Box, Img} from '@chakra-ui/react'
const Leading = () => {
  return (
    <>
    <Flex color='black' className='flex3'>
  
  <Box flex='1' >
    <h1 className='takeoff'>Leading the way in <br /> Digital Marketing</h1>
    <Text className='growing'>Named as one of the Top 100 software companies of 2021 and <br /> rated as the best Marketing Automation platform for SMBs. <br />
         Grow your business with Sendinblue!</Text>

         <Text className='star'> ⭐⭐⭐⭐⭐ 4.5/5 on Capterra / 900+ reviews</Text>
         <Text className='star'> ⭐⭐⭐⭐⭐ 4.6/5 on G2 / 1300+ reviews</Text>
         <Text className='star'> ⭐⭐⭐⭐⭐ 4.5/5 on Trustpilot / 2400+ reviews</Text>

  </Box>
  <Box flex='1' >
    <Img height='400px' margin='auto' width='400px' src='https://www.sendinblue.com/wp-content/uploads/2022/04/Rating-awards-SS-2022.png' />
  </Box>
</Flex>
    </>
  )
}

export default Leading