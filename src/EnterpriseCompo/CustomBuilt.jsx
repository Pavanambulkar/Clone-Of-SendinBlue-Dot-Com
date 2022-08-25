import { Box, Text, Img, Button, Flex, Wrap, WrapItem } from "@chakra-ui/react";

import React from "react";

const CustomBuilt = () => {
  return (
    <>
      <Box className="b5" fontSize={["sm", "md", "lg", "xl"]}>
        <Text className="takeoff">
          Choose a solution custom-built for your growth
        </Text>
        <Text>
          Empower your marketing and engineering teams with easier and more
          effective campaigns using Sendinblue Enterprise!
        </Text>
      </Box>

      <Flex color="white" className="f2">
        <Box flex="1" >
          <Img
            margin="auto"
            height="350px"
            width="450px"
            src="https://www.sendinblue.com/_next_corporate/_next/image//?url=https%3A%2F%2Fwww.sendinblue.com%2Fwp-content%2Fuploads%2F2021%2F12%2F3-4.png&w=640&q=75"
          />
        </Box>
        <Box flex="1" >
          <Text className="tak">Our mission: your success</Text>
          <Text color='grey' fontSize='18px' >
            How can we help? At Sendinblue, we are focused on your performance.
            Which is <br /> why our Enterprise customers benefit from a dedicated
            account manager whose <br /> expertise and understanding of your business
            will allow your team to make the <br /> most of our platform in no time.
            Migration, implementation and training becore <br /> easier than ever! In
            addition, our technical support team is available 24/7, in your <br />
            language, so hit us up!
          </Text>
          <Button marginTop='10px' colorScheme='orange' variant='link'>
     Find out more
  </Button>
        </Box>
      </Flex>
    </>
  );
};

export default CustomBuilt;
