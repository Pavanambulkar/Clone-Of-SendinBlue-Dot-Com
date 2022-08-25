import { Box, Text, Flex, Input } from '@chakra-ui/react'
import React from 'react'

const Search = () => {
  return (
    <>
    <Flex color='white' width="90%" margin='auto'>
  
  <Box flex='1' >
    <Text className='takeoff'>Sendinblue Blog</Text>
  </Box>
  <Box flex='1' >
  <Input marginTop='36px' color='black' variant='outline' placeholder='Outline' />
  </Box>
</Flex>
    </>
  )
}

export default Search