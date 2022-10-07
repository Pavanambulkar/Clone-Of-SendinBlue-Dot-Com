import React from "react";
import { Flex, Box, Text,  Img } from "@chakra-ui/react";

const GrowFaster = () => {
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
            Grow faster with our <br /> all-in-one marketing <br /> platform{" "}
          </h1>
          <Text className="growing">
            We dream of a world where small businesses are on equal footing{" "}
            <br /> with big brands. That’s why we give you the tools big
            companies use <br /> to attract, engage, and nurture their customer
            relationships — <br /> without the enterprise price tag.
          </Text>
        </Box>
        </Flex>

        <Flex width="100%" marginTop="50px" align="center" mx="2" bg="white"  >

        <Box flex="1"  >
          <Img
            height="85%"
            width="80%"
            src="https://www.sendinblue.com/wp-content/uploads/2021/07/grow-faster.png"
          />
        </Box>
        </Flex>
        </Flex>
     
    
    </>
  );
};

export default GrowFaster;
