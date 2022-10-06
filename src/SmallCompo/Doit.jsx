import React from 'react'
import {Box, Img, Text} from '@chakra-ui/react'
import styles from './Module.Doit.css'
const Doit = () => {
  return (
    <>
    <Box  className='box1'>
        <Img height='150px' marginLeft='490px'  src='https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/home/section-tools/icn-obj-1.png'/>
        <Text display='flex' margin='auto' fontSize={{ base: "24px", md: "38px", lg: "42px" }} style={{marginLeft:'310px'}} className='takeoff'>Do it all with Sendinblue</Text>
        <Text display='flex' margin='auto' fontSize={{ base: "24px", md: "28px", lg: "35px" }}  textAlign='center'  className='growing'>all the tools you need and few new ones to try</Text>
    </Box>
    </>
  )
}

export default Doit