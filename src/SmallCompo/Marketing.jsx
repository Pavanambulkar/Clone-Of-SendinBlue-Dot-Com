import React from "react";
import Styles from "./Module.Marketing.css";
import { Box,  Text,  Button, HStack, Flex } from "@chakra-ui/react";
const Marketing = () => {
  return (
    <>
     
      <HStack className="m1">
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
        <Box className="mm1">
          <Text  textAlign='center' fontSize={{ base: "24px", md: "38px", lg: "42px" }} className="customers">
            Be everywhere your <br /> customers are.
          </Text>
        </Box>
        <Box className="mm2">
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
          <Box className="top1">
          <Flex width="100%" marginTop="50px" align="center" mx="2" bg="white"  >
            <Box>
              <Button fontSize='20px'>Email Marketing</Button>
              <Text fontSize={{ base: "24px", md: "24px", lg: "24px" }}  marginTop='0px' className="growing">
                Get the Word out and Sell 
                 more with Sleek email  Messages that u can  design in no time.
              </Text>
            </Box>
            </Flex>
            <Flex width="100%" marginTop="50px" align="center" mx="2" bg="white"  >
            <Box>
              <Button fontSize='20px'>SMS Marketing</Button>
              <Text fontSize={{ base: "24px", md: "24px", lg: "24px" }}  marginTop='0px' className="growing">
       Communicate more directly  with customers for urgent 
       messages or time-sensitive 
       offers.
              </Text>
            </Box>
            </Flex>
          </Box>
          </Flex>
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
          <Box className="top1">
          <Box>
              <Button marginTop='16px' fontSize='20px'>Chat</Button>
              <Text fontSize={{ base: "24px", md: "24px", lg: "24px" }} marginTop='0px' className="growing">
                Get the Word out and Sell 
                 more with Sleek email  Messages that u can  design in no time.
              </Text>
            </Box>
            <Box>
              <Button marginTop='16px' fontSize='20px'>Inbox</Button>
              <Text fontSize={{ base: "24px", md: "24px", lg: "24px" }} marginTop='0px' className="growing">
       Keep your teams organised  with a shared inbox and
       never lose track of your  
       customer email history  again.
              </Text>
            </Box>
          </Box>
          </Flex>
        </Box>
      </Flex>
      </HStack>
    </>
  );
};

export default Marketing;
