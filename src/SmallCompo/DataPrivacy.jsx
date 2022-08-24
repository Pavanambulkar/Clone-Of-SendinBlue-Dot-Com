import React from 'react'
import Styles from './Module.DataPrivacy.css'
import {Box, Text, Img, Button, Flex} from '@chakra-ui/react'
const DataPrivacy = () => {
  return (
    <>
   <Flex color='white' className='f1'>
  
  <Box flex='1'>
   <Img height='400px' width='400px' margin='auto' src='https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/common/shield.jpg' />
  </Box>
  <Box flex='1' >
    <Text className='takeoff'>Your data privacy <br /> and security are a top <br /> concern for us.</Text>
    <Box display='flex' gap='20px' marginLeft='20px'>
        <Img height='100px' width='100px' src='https://www.sendinblue.com/wp-content/uploads/2021/08/CSA@1x.svg' />
        <Img height='100px' width='100px' src='https://www.sendinblue.com/wp-content/uploads/2021/08/signal-spam-grey.svg' />
        <Img height='100px' width='100px' src='https://www.sendinblue.com/wp-content/uploads/2021/08/sncd.svg' />

    </Box>
    <Button colorScheme='blue' variant='link'>
    Learn About GDPR Complaince
  </Button>
  </Box>
</Flex>
    </>
  )
}

export default DataPrivacy