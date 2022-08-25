import React from "react";
import { Box, Text, Img, Button, Flex, Wrap, WrapItem } from "@chakra-ui/react";

const Compaign = () => {
  return (
    <>
      <Box className="b5" fontSize={["sm", "md", "lg", "xl"]}>
        <Text className="takeoff">
          Best in-class features for best-in-class campaigns
        </Text>
        <Text width="90%" margin="auto">
          Automation without tech support? Yes, we can! APIs to make
          integrations easy? Check! Multi-account management and Single-Sign-On?
          Of course! Get a tour of our user-friendly interface and get to know
          all our advanced capabilities.
        </Text>
      </Box>

      <Flex
        width="96%"
        paddingTop="40px"
        margin="auto"
        color="white"
        className="f2"
      >
        <Box flex="1">
          <Text fontSize="23px" color="orange">
            CAMPAIGN MANAGEMENT
          </Text>
          <Text className="tak">
            Emails and SMS, easily designed and delivered
          </Text>
          <Text color="grey" fontSize="18px">
            We offer a unique drag and drop interface that is so user-friendly,
            you’ll be excited about your next campaign! Make it count even more
            with personalized landing pages created in a few clicks. We’re
            deliverability experts, so we know how to land your campaigns where
            they belong: in your clients’ inbox. Automation also becomes a
            breeze with our flexible workflow manager.
          </Text>
          <Button marginTop="10px" colorScheme="orange" variant="link">
            Learn more about campaign management
          </Button>
        </Box>
        <Box flex="1">
          <Img
            margin="auto"
            height="350px"
            width="450px"
            src="https://www.sendinblue.com/_next_corporate/_next/image//?url=https%3A%2F%2Fwww.sendinblue.com%2Fwp-content%2Fuploads%2F2021%2F12%2F3-Emails-SMS-easily-designed-and-delivered-1.png&w=640&q=75"
          />
        </Box>
      </Flex>
    </>
  );
};

export default Compaign;
