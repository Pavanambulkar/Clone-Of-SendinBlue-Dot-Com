import React from "react";
import { Flex,  Text, Box } from "@chakra-ui/react";
import Styles from "./Module.Tools.css";
const Tools = () => {
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
        <Box flex="1" bg="rgb(4,74,117)">
          <Text fontSize={{ base: "24px", md: "38px", lg: "42px" }} className="tools2">Pick Your Tools</Text >
          <Text fontSize={{ base: "24px", md: "28px", lg: "35px" }} className="text2">
            We’ll help you reach the right <br /> people and produce the right{" "}
            <br /> content
          </Text>
        </Box>
        </Flex>
        <Flex width="100%" marginTop="50px" align="center" mx="2" bg="white"  >

        <Box flex="1" bg="rgb(4,74,117)">
        <Text fontSize={{ base: "24px", md: "38px", lg: "42px" }} className="tools2">Work smart not hard</Text>
          <Text fontSize={{ base: "24px", md: "28px", lg: "35px" }}  className="text2">
          Focus on the important tasks and <br /> put the rest on autopilot with <br /> automation


          </Text>
        </Box>
        </Flex>
        <Flex width="100%"  marginTop="50px" align="center" mx="2" bg="white"  >

        <Box flex="1" height='100%' bg="rgb(4,74,117)">
        <Text fontSize={{ base: "24px", md: "38px", lg: "42px" }} className="tools2">We've got your back</Text>
          <Text fontSize={{ base: "24px", md: "28px", lg: "35px" }}  className="text2">
          We’ll be here round-the-clock to <br /> support you with any questions
          </Text>
        </Box>
      </Flex>
      </Flex>
    </>
  );
};

export default Tools;
