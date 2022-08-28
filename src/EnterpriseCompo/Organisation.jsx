import React from "react";
import { Box, Text, Img, Button, Flex, Wrap, WrapItem } from "@chakra-ui/react";

const Organisation = () => {
  return (
    <>
      <Box className="b5" fontSize={["sm", "md", "lg", "xl"]}>
        <Text width="90%" margin='auto' color='black' fontSize="40px" fontWeight='bold' textAlign='center' >
          Sendinblue Enterprise is designed for large organisations
        </Text>
        <Text>
          We understand that big companies face specific challenges, and being
          innovative must never compromise with safety. That’s why we work hard
          to provide the best guarantees, for today and tomorrow.
        </Text>
      </Box>

      <Flex color='white' width="90%" margin='auto' paddingTop="50px">
  
  <Box flex='1' fontSize={["sm", "md", "lg", "xl"]} >
    <Img src="https://www.sendinblue.com/_next_corporate/_next/image//?url=https%3A%2F%2Fwww.sendinblue.com%2Fwp-content%2Fuploads%2F2021%2F12%2FSignal-spam-1.png&w=256&q=75" />
  </Box>
  <Box flex='1' fontSize={["sm", "md", "lg", "xl"]} >
    <Img src="https://www.sendinblue.com/_next_corporate/_next/image//?url=https%3A%2F%2Fwww.sendinblue.com%2Fwp-content%2Fuploads%2F2021%2F12%2FCSA-1.png&w=256&q=75" />
  </Box>
  <Box flex='1' fontSize={["sm", "md", "lg", "xl"]}>
    <Img src="https://www.sendinblue.com/_next_corporate/_next/image//?url=https%3A%2F%2Fwww.sendinblue.com%2Fwp-content%2Fuploads%2F2021%2F12%2FFrench-tech-1.png&w=256&q=75" />
  </Box>
  <Box flex='1' fontSize={["sm", "md", "lg", "xl"]} >
    <Img src="https://www.sendinblue.com/_next_corporate/_next/image//?url=https%3A%2F%2Fwww.sendinblue.com%2Fwp-content%2Fuploads%2F2021%2F12%2FGDRP-1.png&w=256&q=75" />
  </Box>
</Flex>

<WrapItem>
      <Button fontSize={["sm", "md", "lg", "xl"]} style={{display:"flex", margin:'auto', marginTop: "30px", borderRadius:'18px', height: '40px'}} colorScheme='orange'>Get a Callback</Button>
    </WrapItem>
    </>
  );
};

export default Organisation;
