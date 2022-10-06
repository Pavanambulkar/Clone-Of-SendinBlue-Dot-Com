import React from 'react'
import Styles from './Module.DataPrivacy.css'
import {Box, Text, Img, Button, Flex} from '@chakra-ui/react'
const DataPrivacy = () => {
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
        color='white' className='f1'
      >
 
   <Flex width="100%" marginTop="50px" align="center" mx="2" bg="white"  >

  
   <Img height='400px' width='400px' margin='auto' src='https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/common/shield.jpg' />
 
  </Flex>
  <Flex width="100%" marginTop="50px" align="center" mx="2" bg="white"  >

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
</Flex>

    </>
  )
}

export default DataPrivacy