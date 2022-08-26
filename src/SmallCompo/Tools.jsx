import React from "react";
import { Flex, Center, Text, Box } from "@chakra-ui/react";
import Styles from "./Module.Tools.css";
const Tools = () => {
  return (
    <>
      <Flex color="white" className="flex2">
        <Box flex="1" bg="rgb(4,74,117)">
          <h1 className="tools2">Pick Your Tools</h1>
          <Text className="text2">
            We’ll help you reach the right <br /> people and produce the right{" "}
            <br /> content
          </Text>
        </Box>
        <Box flex="1" bg="rgb(4,74,117)">
        <h1 className="tools2">Work smart not hard</h1>
          <Text className="text2">
          Focus on the important tasks and <br /> put the rest on autopilot with <br /> automation


          </Text>
        </Box>
       
        <Box flex="1" bg="rgb(4,74,117)">
        <h1 className="tools2">We've got your back</h1>
          <Text className="text2">
          We’ll be here round-the-clock to <br /> support you with any questions
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default Tools;
