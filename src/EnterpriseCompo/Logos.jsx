import React from "react";
import { Flex, Box, Text, Img } from "@chakra-ui/react";
const Logos = () => {
  return (
    <>
      <Flex bg="teal" margin='auto' height= '160px' width='90%' display='flex'  alignItems='center'  fontSize={['sm', 'md', 'lg', 'xl']} >
        <Box flex="2" bg="teal">
          <Img src="https://www.sendinblue.com/_next_corporate/_next/image//?url=https%3A%2F%2Fwww.sendinblue.com%2Fwp-content%2Fuploads%2F2021%2F12%2FFrame-6.png&w=256&q=75" />
        </Box>
        <Box flex="2" bg="teal">
          <Img src="https://www.sendinblue.com/_next_corporate/_next/image//?url=https%3A%2F%2Fwww.sendinblue.com%2Fwp-content%2Fuploads%2F2021%2F12%2FFrame-7.png&w=256&q=75" />
        </Box>
        <Box flex="2" bg="teal">
          <Img src="https://www.sendinblue.com/_next_corporate/_next/image//?url=https%3A%2F%2Fwww.sendinblue.com%2Fwp-content%2Fuploads%2F2021%2F12%2FFrame-8.png&w=256&q=75" />
        </Box>
        <Box flex="2" bg="teal">
          <Img src="https://www.sendinblue.com/_next_corporate/_next/image//?url=https%3A%2F%2Fwww.sendinblue.com%2Fwp-content%2Fuploads%2F2021%2F12%2FFrame-9.png&w=256&q=75" />
        </Box>
        <Box flex="2" bg="teal">
          <Img src="https://www.sendinblue.com/_next_corporate/_next/image//?url=https%3A%2F%2Fwww.sendinblue.com%2Fwp-content%2Fuploads%2F2021%2F12%2FFrame-10.png&w=256&q=75" />
        </Box>
      </Flex>
    </>
  );
};

export default Logos;
