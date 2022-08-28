import { Badge, Box, Flex, Text, Button } from "@chakra-ui/react";
import React from "react";
import Styles from "./Module.Plans.css";
const Plans = () => {
  return (
    <>
      <Box className="b5" fontSize={["sm", "md", "lg", "xl"]}>
        <Text className="takeoff">Our Enterprise plans</Text>
        <Text>
          Choose from a fully-fledged digital marketing platform for your
          campaigns or simply use our Email API to power your transactional
          emails and notifications distribution
        </Text>
      </Box>

      <Flex color="white" width="95%" className="f8">
        <Box className="border2" flex="1">
          <Text className="tak" color="black">
            Marketing Suite
          </Text>
          <Text justifyContent="center" className="growing">
            Create, manage and send effective multi-channel campaigns leveraging
            our user-friendly interface
          </Text>
          
          <Text className="bad" >Email and SMS campaign management</Text>
          <Text className="bad">Sub-Account Management</Text>
          <Text className="bad">Marketing Automation</Text>
          <Text className="bad">Transactional Email and SMS</Text>
          <Text className="bad">Template Editor, A/B Testing and campaign scheduling</Text>
          <Text className="bad">Advanced Segmentation and Customer Data Platform</Text>
          <Text className="bad">Advanced Tracking, Integrations and Plugins</Text>
          <Text className="bad">Dedicated Customer Success Manager</Text>
          <Text className="bad">Enterprise infrastructure with dedicated IP and Single-Sign-On</Text>
          <Text className="bad">Custom contract with metered billing</Text>
          
          
         
        </Box>
        <Box className="border2" flex="1">
          <Text className="tak" color="black">
            Email API
          </Text>
          <Text justifyContent="center" className="growing">
            Send millions of personalized transaction and notification emails
            and SMS with faster processing and 97% deliverability
          </Text>
            <Text className="bad">Email API with developer documentation</Text>
            <Text className="bad">Sub-Account Management</Text>
            <Text className="bad">Enterprise infrastructure with dedicated IP, priority sending and
            monitoring</Text>
            <Text className="bad">Template Editor</Text>
            <Text className="bad">Inbound Parsing and Batch Sending</Text>
            <Text className="bad">Advanced Tracking</Text>
            <Text className="bad">Technical Account Manager and 24/7 technical support</Text>
            <Text className="bad">Unlimited log retention</Text>
            <Text className="bad">Custom contract with metered billing</Text>
            <Text className="bad"></Text>
         
        </Box>
      </Flex>
      
      <Button style={{justifyContent:'center', borderRadius:"16px", margin:'auto', marginTop: '20px', display:'flex'}} colorScheme='orange'>Get a Quote</Button>
    </>
  );
};

export default Plans;
