import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react'
import React from 'react'

const BillingInfo = () => {
  return (
    <>
     <Alert status='error'>
  <AlertIcon />
  <AlertTitle>Sorry ! </AlertTitle>
  <AlertDescription>Billing Info is not availble At this moment.</AlertDescription>
</Alert>
    </>
  )
}

export default BillingInfo