import React from "react";
import { Box, Container, Text, Button, HStack } from "@chakra-ui/react";

const Marketing2 = () => {
  return (
    <>
      <HStack className="m1">
        <Box className="mm1">
          <Text className="customers">
            Give life to your <br /> customer journey.
          </Text>
        </Box>
        <Box className="mm2">
          <Box className="top1">
            <Box>
              <Button fontSize="20px">CRM</Button>
              <Text marginTop="0px" className="growing">
                Build stronger relationships <br /> by keeping track of all your{" "}
                <br />
                customer details in one Place.
              </Text>
            </Box>
            <Box>
              <Button fontSize="20px"> Marketing automation</Button>
              <Text marginTop="0px" className="growing">
                Save time and Boost <br /> performance by automating <br /> your
                segmentation and <br /> marketing messages.
              </Text>
            </Box>
          </Box>
          <Box className="top1">
            <Box>
              <Button marginTop='16px' fontSize="20px">Transactional email</Button>
              <Text marginTop="0px" className="growing">
                Step up design, <br /> engagement, and <br />
                deliverability of your <br />
                transactional email and messages.
              </Text>
            </Box>
            <Box>
              <Button marginTop='16px' fontSize="20px">Segmentation</Button>
              <Text marginTop="0px" className="growing">
                Get more engagement by <br /> sending your marketing <br />
                messages to a more targeted <br /> audience.
              </Text>
            </Box>
          </Box>
        </Box>
      </HStack>
    </>
  );
};

export default Marketing2;
