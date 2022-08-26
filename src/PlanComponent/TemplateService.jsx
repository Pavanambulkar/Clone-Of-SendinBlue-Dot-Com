import { Box, Text, Button } from "@chakra-ui/react";

import React from "react";

const TemplateService = () => {
  return (
    <>
      <Text marginLeft="60px" fontSize="30px" fontWeight="bold">
        Template service
      </Text>
      <Box width='90%' margin='auto' paddingTop='50px' >
        <Text fontWeight='bold' fontSize="20px">Premium template</Text>
        <Text fontSize='18px'>Save your time and let us create a tailor-made template for your business</Text>
        <Button
          colorScheme="blue"
          variant="link"
          fontSize="20px"
          marginTop="10px"
        >
         Get started
        </Button>
      </Box>
    </>
  );
};

export default TemplateService;
