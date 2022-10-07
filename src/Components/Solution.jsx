import React from "react";
import styles from "./Module.solution.css";
import { Flex,  Box, Text, Button, Img, } from "@chakra-ui/react";
import Tools from "../SmallCompo/Tools";
import Leading from "../SmallCompo/Leading";
import Doit from "../SmallCompo/Doit";
import Marketing from "../SmallCompo/Marketing";
import Marketing2 from "../SmallCompo/Marketing2";
import Marketing3 from "../SmallCompo/Marketing3";
import DataPrivacy from "../SmallCompo/DataPrivacy";
import NextLevel from "../SmallCompo/NextLevel";
import { Footer } from "../SmallCompo/Footer";
const Solution = () => {
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
      >
     
        <Flex width="100%" marginTop="50px" align="center" mx="2" bg="white"  >
          <Box>

          
          <h1 className="takeoff">
            Prepare For
            <br />
            TakeOff
          </h1>
          <Text className="growing">
            Sendinblue is the smartest and most <br /> intuitive platform for
            growing businesses. <br />
            Thrive digitally as we guide your business <br /> with the right
            marketing & sales tools.
          </Text>
          <Button className="btn1" colorScheme='blue'>Take a Free Test drive!</Button>
          </Box>
                  </Flex>

        <Flex width="100%" marginTop="50px" align="center" mx="2" >
            <Img height='100%' width='100%' src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/home/section-video/cover.png" />
        </Flex>
      </Flex>
     

      <Tools/>
      <Leading/>
      <Doit/>
      <Marketing/>
      <Marketing2/>
      <Marketing3/>
      <DataPrivacy/>
      <NextLevel/>
      <Footer/>
      
    </>
  );
};

export default Solution;
