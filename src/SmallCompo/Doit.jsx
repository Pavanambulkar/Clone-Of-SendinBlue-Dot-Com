import React from 'react'
import {Box, Img, Text} from '@chakra-ui/react'
import styles from './Module.Doit.css'
const Doit = () => {
  return (
    <>
    <Box className='box1'>
        <Img height='150px' marginLeft='490px'  src='https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/home/section-tools/icn-obj-1.png'/>
        <h1 style={{marginLeft:'310px'}} className='takeoff'>Do it all with Sendinblue</h1>
        <Text marginLeft='360px'  className='growing'>all the tools you need and few new ones to try</Text>
    </Box>
    </>
  )
}

export default Doit