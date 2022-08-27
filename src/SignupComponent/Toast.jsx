import { Stack, Button, useToast,  } from "@chakra-ui/react"
import React from "react"
import {Link} from 'react-router-dom'

export default function UpdatingToastExample() {
    const toast = useToast()
    const toastIdRef = React.useRef()
  
    function update() {
      if (toastIdRef.current) {
        toast.update(toastIdRef.current, { description: 'new text' })
      }
    }
  
    function addToast() {
      toastIdRef.current = toast({ description: 'Signup Successfully!' })
    }
  
    return (
      <Stack isInline spacing={2}>
         
        <Button loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} margin= 'auto' onClick={addToast} type='button'>
                    <Link to='/login'>SignUp</Link>
                    
         
        </Button>
       
  
        
      </Stack>
    )
  }