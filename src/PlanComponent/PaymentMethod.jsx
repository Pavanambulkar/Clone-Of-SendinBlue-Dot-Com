import { Box, Button, Spinner, Text, WrapItem } from "@chakra-ui/react";
import React from "react";

const PaymentMethod = () => {
  return (
    <>
      <Box width="80%" margin="auto" justifyContent="center">
        <Text
          fontWeight="bold"
          fontSize="25px"
          marginTop="50px"
          textAlign="center"
        >
          Add your first payment method
        </Text>
        <Text marginTop="20px" textAlign="center">
          You do not have any payment methods saved. You can save a payment{" "}
          <br />
          method after completing your first payment.
        </Text>

        <Button
          width="400px"
          height="60px"
          fontSize="25px"
          marginTop="20px"
          colorScheme="blue"
          marginLeft="260px"
        >
          Add a new Payment Method
        </Button>
      </Box>
    </>
  );
};

export default PaymentMethod;
