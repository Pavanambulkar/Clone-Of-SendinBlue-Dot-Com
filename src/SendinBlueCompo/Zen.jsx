import React from "react";
import { Box, Text, Img, Button, Flex, Wrap, WrapItem } from "@chakra-ui/react";

const Zen = () => {
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
        color="white" className="f2"
      >
     
     <Flex width="100%" marginTop="50px" align="center" mx="2" bg="white"  >
      
        <Box flex="1" bg="rgb(255,217,212)">
          <Img
            margin="auto"
            height="300px"
            width="400px"
            src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/why/start-illu.jpg"
          />
        </Box>
        </Flex>
        <Flex width="100%" marginTop="50px" align="center" mx="2" bg="white"  >

        <Box flex="1" bg="rgb(255,217,212)">
          <Text className="takeoff">Ready to find your </Text>
          <Text className="takeoff"> marketing zen? </Text>
          <Text className="gro">
            Take the stress out of your workday with a solution that’s <br />{" "}
            built for you!
          </Text>

          
              <Button
                marginLeft="23px"
                borderRadius="15px"
                colorScheme="messenger"
                marginTop='20px'
                
                
              >
                Get Started Free!
              </Button>
            
        </Box>
        </Flex>
      </Flex>
    
    </>
  );
};

export default Zen;
