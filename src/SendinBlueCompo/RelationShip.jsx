import React from "react";
import { Box, Text, Img, Button, Flex } from "@chakra-ui/react";
import Styles from "./Module.RelationShip.css";
const RelationShip = () => {
  return (
    <>
      <Flex color="white" className="f1">
        <Box flex="1">
          <Img
            height="400px"
            width="400px"
            margin="auto"
            src="https://www.sendinblue.com/wp-content/uploads/2021/07/chat.png"
          />
        </Box>
        <Box flex="1" width="50%">
          <Text className="take">
            Build stronger <br /> relationships with <br /> your customers
          </Text>
          <Text className="gro">
            Whether you are digitizing your business for the first time or
            looking <br /> to rapidly reach more customers online, we will make
            your life easier <br /> with the right channels at your fingertips.
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default RelationShip;
