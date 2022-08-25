import React from "react";
import { Flex, Box, Text, Button, Img } from "@chakra-ui/react";

const GrowFaster = () => {
  return (
    <>
      <Flex marginTop="40px" color="white" className="flex1">
        <Box flex="1" bg="white">
          <h1 className="takeoff">
            Grow faster with our <br /> all-in-one marketing <br /> platform{" "}
          </h1>
          <Text className="growing">
            We dream of a world where small businesses are on equal footing{" "}
            <br /> with big brands. That’s why we give you the tools big
            companies use <br /> to attract, engage, and nurture their customer
            relationships — <br /> without the enterprise price tag.
          </Text>
        </Box>

        <Box flex="1">
          <Img
            height="85%"
            width="80%"
            src="https://www.sendinblue.com/wp-content/uploads/2021/07/grow-faster.png"
          />
        </Box>
      </Flex>
    </>
  );
};

export default GrowFaster;
