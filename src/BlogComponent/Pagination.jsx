import { Box, Button } from '@chakra-ui/react'
import React from 'react'


const Pagination = ({current, onChange, total}) => {
    const prev = (
        <Button disabled={(current == 1)} onClick={()=> onChange(current - 1)}>PREV</Button>
    )

    const next = (
        <Button disabled={(current === total)} onClick={()=> onChange(current + 1)}>NEXT</Button>
    )

    const pages = new Array(total).fill(0).map((a,i) =>{
        return <Button onClick={() => onChange(i + 1)} disabled= {current === (i + 1)}>{i + 1}</Button>
    })
  return (
    <>
    <Box display='flex' margin='auto' justifyContent='center' paddingTop="20px">
        {prev}
        {pages}
        {next}
    </Box>
    </>
  )
}

export default Pagination