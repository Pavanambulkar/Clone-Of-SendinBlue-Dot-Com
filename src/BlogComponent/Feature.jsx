import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Img, SimpleGrid, Text } from '@chakra-ui/react'
const Feature = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
    
    axios.get("https://my-api121.herokuapp.com/articles")
    .then((res)=>{
     setData(res.data)
     console.log(res.data)
    })

    }, [])
  return (
    <>
    <SimpleGrid columns={[1, 2, 2, 3]} spacing="4" marginTop='100px'>
        {
            data.map((item) =>{
                return(
                    <Box key={item.id} width="80%" margin='auto'>
              <Img  src={item.image} boxSize="220px" width='300px' />

             
              <Text fontWeight='bold'>{item.title}</Text>
              <Text color='grey'>{item.time}</Text>
            </Box>
                )
            })
        }
    </SimpleGrid>
    </>
  )
}

export default Feature