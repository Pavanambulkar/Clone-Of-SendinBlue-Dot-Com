import { Box, Text, Button } from "@chakra-ui/react";
import React from "react";

const AddOns = () => {
  return (
    <>
      <Text
        marginTop="50px"
        marginLeft="60px"
        fontSize="30px"
        fontWeight="bold"
      >
        Add-Ons
      </Text>

      <Box width="90%" margin="auto" paddingTop="50px">
        <Text fontWeight="bold" fontSize="20px">
          Email credits
        </Text>
        <Text fontSize="18px">
          Manage infrequent or exceptional sending volume needs with pre-paid
          email credits.
        </Text>
        <Button
          colorScheme="blue"
          variant="link"
          fontSize="20px"
          marginTop="10px"
        >
          Buy email credits
        </Button>
      </Box>

      <Box width="90%" margin="auto" paddingTop="50px">
        <Text fontWeight="bold" fontSize="20px">
          SMS credits
        </Text>
        <Text fontSize="18px">
          Connect directly with your contacts using targeted SMS messages
        </Text>
        <Button
          colorScheme="blue"
          variant="link"
          fontSize="20px"
          marginTop="10px"
        >
          Buy SMS credits
        </Button>
      </Box>

      <Box width="90%" margin="auto" paddingTop="50px">
        <Text fontWeight="bold" fontSize="20px">
          Dedicated IPs
        </Text>
        <Text fontSize="18px">
          Manage your email sender reputation with your own dedicated IP
          address.
        </Text>
        <Button
          colorScheme="blue"
          variant="link"
          fontSize="20px"
          marginTop="10px"
        >
          Get a dedicated IP
        </Button>
      </Box>
    </>
  );
};

export default AddOns;
