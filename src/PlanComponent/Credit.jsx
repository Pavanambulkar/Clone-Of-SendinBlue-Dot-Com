import React from 'react'
import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react'

const Credit = () => {
  return (
    <>
     <Alert status='error'>
  <AlertIcon />
  <AlertTitle>Sorry ! You do not have any credit notes or refunds yet. </AlertTitle>
 
  <AlertDescription>Your credit notes and your refunds will be displayed here.</AlertDescription>
</Alert>
    </>
  )
}

export default Credit