import React from "react";
import Styles from "./Module.Marketing.css";
import { Box, Container, Text,  Button, HStack } from "@chakra-ui/react";
const Marketing = () => {
  return (
    <>
      <HStack className="m1">
        <Box className="mm1">
          <Text className="customers">
            Be everywhere your <br /> customers are.
          </Text>
        </Box>
        <Box className="mm2">
          <Box className="top1">
            <Box>
              <Button fontSize='20px'>Email Marketing</Button>
              <Text marginTop='0px' className="growing">
                Get the Word out and Sell <br />
                 more with Sleek email <br /> Messages that u can <br /> design in no time.
              </Text>
            </Box>
            <Box>
              <Button fontSize='20px'>SMS Marketing</Button>
              <Text marginTop='0px' className="growing">
       Communicate more directly <br /> with customers for urgent <br />
       messages or time-sensitive <br />
       offers.
              </Text>
            </Box>
          </Box>
          <Box className="top1">
          <Box>
              <Button marginTop='16px' fontSize='20px'>Chat</Button>
              <Text marginTop='0px' className="growing">
                Get the Word out and Sell <br />
                 more with Sleek email <br /> Messages that u can <br /> design in no time.
              </Text>
            </Box>
            <Box>
              <Button marginTop='16px' fontSize='20px'>Inbox</Button>
              <Text marginTop='0px' className="growing">
       Keep your teams organised <br /> with a shared inbox and<br />
       never lose track of your  <br />
       customer email history <br /> again.
              </Text>
            </Box>
          </Box>
        </Box>
      </HStack>
    </>
  );
};

export default Marketing;
