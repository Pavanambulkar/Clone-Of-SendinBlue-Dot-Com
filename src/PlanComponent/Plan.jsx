import React from 'react'
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import Overview from './Overview'
import PaymentMethod from './PaymentMethod'
import BillingInfo from './BillingInfo'
import Credit from './Credit'

const Plan = () => {
  return (
    <>
     <Box width='90%'  margin='auto' justifyContent='center'>
    <Text marginLeft='30px' marginTop='40px' className='taking'>My Plan</Text>
      
    <Tabs>
  <TabList>
    <Tab>Upgrade</Tab>
    <Tab>Payment Methods</Tab>
    <Tab>Billing Information</Tab>
    <Tab>Billing History</Tab>
    <Tab>Credit notes and refunds</Tab>

  </TabList>

  <TabPanels>
    <TabPanel>
      <Overview/>
    </TabPanel>
    <TabPanel>
      <PaymentMethod/>
    </TabPanel>
    <TabPanel>
      <BillingInfo/>
    </TabPanel>
    <TabPanel>
      <BillingInfo/>
    </TabPanel>
    <TabPanel>
      <Credit/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </Box>
    </>
  )
}

export default Plan