import React from "react";
import { Box, Text, Img, Button, Flex, Wrap, WrapItem } from "@chakra-ui/react";

const Transaction = () => {
  return (
    <>
      <Flex
        width="96%"
        paddingTop="40px"
        margin="auto"
        color="white"
        className="f2"
      >
        <Box flex="1">
          <Img
            margin="auto"
            height="350px"
            width="450px"
            src="https://www.sendinblue.com/_next_corporate/_next/image//?url=https%3A%2F%2Fwww.sendinblue.com%2Fwp-content%2Fuploads%2F2021%2F12%2F4-Step-up-your-transactional-_-notification-emails-with-exceptional-deliverability-and-full-GDPR-compliance.png&w=640&q=75"
          />
        </Box>
        <Box flex="1">
          <Text fontSize="23px" color="orange">
            TRANSACTIONAL EMAIL AND SMS
          </Text>
          <Text className="taking">
            Step up your transactional and notification emails with exceptional
            deliverability and full GDPR compliance
          </Text>

          <Text color="grey" fontSize="18px">
            Provide a better user experience across the customer journey with
            on-brand, personalized and dynamic emails. Programmatically execute
            a range of functions using our advanced Email API, from scalable
            email routing through to inbound parsing and batch sending. With
            100k emails processed per minute and 97% deliverability, you're in
            the best hands! Track your results, keep logs as long as you need
            and benefit from our acclaimed template editor in your custom
            Enterprise Email plan.
          </Text>
          <Button marginTop="10px" colorScheme="orange" variant="link">
            Learn more about transactions and notifications
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Transaction;
