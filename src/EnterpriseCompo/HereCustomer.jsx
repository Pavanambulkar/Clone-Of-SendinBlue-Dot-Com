import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import Styles from './Module.HereCustomer.css'

const HereCustomer = () => {
  return (
    <>
    <Box className='shade'>
    <Text className='ta'>Don’t just take our word for it! Hear directly from our customers</Text>
    <Text className='star1'>☆☆☆☆☆</Text>
    <Text className='like'>"I like their pricing. I think it is one of the best in the market. Their plans are quite pocket-friendly and there are options of customization as per our need. Apart from that, there are more integration options in Sendinblue in comparison to other portals of the same size. Sendinblue is quite easy to use since they have mentioned all the next steps to take the campaign live in UI itself."
</Text>
<Text marginTop='20px' className='like'>Satyam P. - Digital Marketing @ GroupM WPP</Text>
<Button style={{justifyContent:'center', borderRadius:"16px", margin:'auto', marginTop: '20px', display:'flex'}} fontSize={['sm', 'md', 'lg', 'xl']} colorScheme='white' color='white' variant='link'>
    Read more reviews on G2
  </Button>
    </Box>
    </>
  )
}

export default HereCustomer