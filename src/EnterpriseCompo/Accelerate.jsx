import React from "react";
import {
  Flex,
  Center,
  Square,
  Box,
  Text,
  Button,
  Img,
  Container,
} from "@chakra-ui/react";
import Styles from "./Module.Accelerate.css";
const Accelerate = () => {
  return (
    <>
      <Flex color="white" className="flex1">
        <Box flex="1" bg="rgb(17,37,37)">
          <Text className="takeoff1">Prepare For</Text>
          <Text className="takeoff1">TakeOff</Text>
          <Text color='wheat' className="growing">
            Sendinblue is the smartest and most <br /> intuitive platform for
            growing businesses. <br />
            Thrive digitally as we guide your business <br /> with the right
            marketing & sales tools.
          </Text>
          <Button borderRadius='15px' className="btn1" colorScheme="blue">
            Talk to Sales!
          </Button>
        </Box>

        <Box flex="1" bg="rgb(17,37,37)">
          <Img
            background="rgb(17,37,37)"
            height="100%"
            width="100%"
            src="https://www.sendinblue.com/_next_corporate/_next/image//?url=https%3A%2F%2Fwww.sendinblue.com%2Fwp-content%2Fuploads%2F2021%2F12%2Fheroo_Mesa-de-trabajo-1-copia-9-copy-5-1.png&w=640&q=75"
          />
        </Box>
      </Flex>
    </>
  );
};

export default Accelerate;
