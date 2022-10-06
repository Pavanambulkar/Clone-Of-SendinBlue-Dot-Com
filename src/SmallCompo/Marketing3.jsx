import React from 'react'
import { Box,  Text,  Button, HStack, Flex } from "@chakra-ui/react";

const Marketing3 = () => {
  return (
    // <>
    //  <HStack className="m1">
    //     <Box className="mm1">
    //       <Text className="customers">
    //       Turn your visitors <br /> into customers.
    //       </Text>
    //     </Box>
    //     <Box className="mm2">
    //       <Box className="top1">
    //         <Box>
    //           <Button fontSize='20px'>Landing Pages</Button>
    //           <Text marginTop='0px' className="growing">
    //             Create a more targeted <br />
    //             visitor experience with <br /> dedicated pages for each of <br />
    //             your campaigns.
    //           </Text>
    //         </Box>
    //         <Box>
    //           <Button fontSize='20px'>Signup Forms</Button>
    //           <Text marginTop='0px' className="growing">
    //   Grow your email contact list <br /> with custom 
    //   forms that you <br /> can integrate in your website.
    //           </Text>
    //         </Box>
    //       </Box>
    //       <Box className="top1">
    //       <Box>
    //           <Button marginTop='16px' fontSize='20px'>FaceBook Ads</Button>
    //           <Text marginTop='0px' className="growing">
    //             Launch Facebook ads from <br /> your account to retarget <br /> contacts or reach new <br /> audiences based on your <br />
    //             contact lists.
    //           </Text>
    //         </Box>
            
    //       </Box>
    //     </Box>
    //   </HStack>
    //   <Button style={{justifyContent:'center', margin:'auto', marginTop: '20px', display:'flex'}}  colorScheme='blue'>All Features</Button>    
    //   </>
       <>
       <HStack className="m1">
         <Flex
           paddingTop="60px"
           maxW="1000px"
           w={["90vm", "90vm", "70vm", "70vm"]}
           direction={["column", "column", "row", "row"]}
           justify="center"
           boxShadow="md"
           rounded="lg"
           margin="auto"
           width="90%"
         >
           <Box className="mm1">
             <Text
               textAlign="center"
               fontSize={{ base: "24px", md: "38px", lg: "42px" }}
               className="customers"
             >
               Give life to your <br /> customer journey.
             </Text>
           </Box>
           <Box className="mm2">
             <Flex
               paddingTop="60px"
               maxW="1000px"
               w={["90vm", "90vm", "70vm", "70vm"]}
               direction={["column", "column", "row", "row"]}
               justify="center"
               boxShadow="md"
               rounded="lg"
               margin="auto"
               width="90%"
             >
               <Box className="top1">
                 <Flex
                   width="100%"
                   marginTop="50px"
                   align="center"
                   mx="2"
                   bg="white"
                 >
                   <Box>
                     <Button fontSize="20px">CRM</Button>
                     <Text
                       fontSize={{ base: "24px", md: "24px", lg: "24px" }}
                       marginTop="0px"
                       className="growing"
                     >
                       Build stronger relationships by keeping track of all your{" "}
                        customer details in one Place.
                     </Text>
                   </Box>
                 </Flex>
                 <Flex
                   width="100%"
                   marginTop="50px"
                   align="center"
                   mx="2"
                   bg="white"
                 >
                   <Box>
                     <Button fontSize="20px">SMS Marketing</Button>
                     <Text
                       fontSize={{ base: "24px", md: "24px", lg: "24px" }}
                       marginTop="0px"
                       className="growing"
                     >
                       Communicate more directly with customers for urgent
                       messages or time-sensitive offers.
                     </Text>
                   </Box>
                 </Flex>
               </Box>
             </Flex>
             <Flex
               paddingTop="60px"
               maxW="1000px"
               w={["90vm", "90vm", "70vm", "70vm"]}
               direction={["column", "column", "row", "row"]}
               justify="center"
               boxShadow="md"
               rounded="lg"
               margin="auto"
               width="90%"
             >
               <Box className="top1">
                 <Box>
                   <Button marginTop="16px" fontSize="20px">
                     Chat
                   </Button>
                   <Text
                     fontSize={{ base: "24px", md: "24px", lg: "24px" }}
                     marginTop="0px"
                     className="growing"
                   >
                     Get the Word out and Sell more with Sleek email Messages
                     that u can design in no time.
                   </Text>
                 </Box>
                 <Box>
                   <Button marginTop="16px" fontSize="20px">
                     Inbox
                   </Button>
                   <Text
                     fontSize={{ base: "24px", md: "24px", lg: "24px" }}
                     marginTop="0px"
                     className="growing"
                   >
                     Keep your teams organised with a shared inbox and never lose
                     track of your customer email history again.
                   </Text>
                 </Box>
               </Box>
             </Flex>
           </Box>
         </Flex>
       </HStack>
     </>
  )
}

export default Marketing3