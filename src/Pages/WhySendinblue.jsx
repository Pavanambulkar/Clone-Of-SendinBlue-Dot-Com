import React from 'react'
import { Flex,  Box, Text,  Img,  } from "@chakra-ui/react";
import GrowFaster from '../SendinBlueCompo/GrowFaster';
import RelationShip from '../SendinBlueCompo/RelationShip';
import Communications from '../SendinBlueCompo/Communications';
import PopOver from '../SendinBlueCompo/PopOver';
import Nomatter from '../SendinBlueCompo/Nomatter';
import Zen from '../SendinBlueCompo/Zen';
import { Footer } from '../SmallCompo/Footer';

const WhySendinblue = () => {
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
        color="white" className="flex1"
      >
     
     <Flex width="100%" marginTop="50px" align="center" mx="2" bg="white"  >

        <Box flex="1" bg="white"  >
          <h1 className="takeoff">
          Bring your business <br /> online. We’ve got <br /> your back.
          </h1>
          <Text className="growing">
          We’re here to help small businesses grow. Get the right <br />
           marketing and sales tools you need to build stronger <br />
            relationships with your customers — all in one platform.
          </Text>
                  </Box>
  </Flex>
  <Flex width="100%" marginTop="50px" align="center" mx="2" bg="white"  >

        <Box flex="1" >
            <Img height='90%' width='90%' src="https://cdn.vox-cdn.com/thumbor/F0qr-a5Wc-dHetzcloMSOw-sGYw=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21693783/iStock_1047941552.jpg" />
        </Box>
        </Flex>
     
      </Flex>
      <GrowFaster/>
      <RelationShip/>
      <Communications/>
      <PopOver/>
      <Nomatter/>
      <Zen/>
      <Footer/>
     
    </>
  )
}

export default WhySendinblue