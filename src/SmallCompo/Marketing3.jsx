import React from 'react'
import { Box, Container, Text,  Button, HStack } from "@chakra-ui/react";

const Marketing3 = () => {
  return (
    <>
     <HStack className="m1">
        <Box className="mm1">
          <Text className="customers">
          Turn your visitors <br /> into customers.
          </Text>
        </Box>
        <Box className="mm2">
          <Box className="top1">
            <Box>
              <Button fontSize='20px'>Landing Pages</Button>
              <Text marginTop='0px' className="growing">
                Create a more targeted <br />
                visitor experience with <br /> dedicated pages for each of <br />
                your campaigns.
              </Text>
            </Box>
            <Box>
              <Button fontSize='20px'>Signup Forms</Button>
              <Text marginTop='0px' className="growing">
      Grow your email contact list <br /> with custom 
      forms that you <br /> can integrate in your website.
              </Text>
            </Box>
          </Box>
          <Box className="top1">
          <Box>
              <Button marginTop='16px' fontSize='20px'>FaceBook Ads</Button>
              <Text marginTop='0px' className="growing">
                Launch Facebook ads from <br /> your account to retarget <br /> contacts or reach new <br /> audiences based on your <br />
                contact lists.
              </Text>
            </Box>
            
          </Box>
        </Box>
      </HStack>
      <Button style={{justifyContent:'center', margin:'auto', marginTop: '20px', display:'flex'}}  colorScheme='blue'>All Features</Button>    
      </>
  )
}

export default Marketing3