import React from "react";
import { Box, Text, Img,  Flex } from "@chakra-ui/react";
import Styles from "./Module.RelationShip.css";
const RelationShip = () => {
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
        color="white" className="f1"
      >
     
     <Flex width="100%" marginTop="50px" align="center" mx="2" bg="white"  >
     
        <Box flex="1">
          <Img
            height="400px"
            width="400px"
            margin="auto"
            src="https://www.sendinblue.com/wp-content/uploads/2021/07/chat.png"
          />
        </Box>
        </Flex>
        <Flex width="100%" marginTop="50px" align="center" mx="2" bg="white"  >

        <Box flex="1" width="50%">
          <Text className="take">
            Build stronger <br /> relationships with <br /> your customers
          </Text>
          <Text className="gro">
            Whether you are digitizing your business for the first time or
            looking <br /> to rapidly reach more customers online, we will make
            your life easier <br /> with the right channels at your fingertips.
          </Text>
        </Box>
        </Flex>
      </Flex>
     
    </>
  );
};

export default RelationShip;
