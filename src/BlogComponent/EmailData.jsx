import { Box, SimpleGrid, Img, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

const EmailData = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1)
  useEffect(() => {
    axios.get(`http://localhost:5001/tasks?_limit=6&_page=${page}`).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, [page]);
  return (
    <>
      <SimpleGrid columns={[1, 2, 3, 3]} spacing="4" marginTop='100px'>
        {data?.map((item) => {
          return (
            <Box key={item.id} width="80%" margin='auto'>
              <Img  src={item.image} boxSize="220px" width='300px' />

              <Text color='grey' align="left">{item.date}</Text>
              <Text fontWeight='bold'>{item.title}</Text>
              <Text color='grey'>{item.time}</Text>
            </Box>
          );
        })}
      </SimpleGrid>
      <Pagination total={7} current = {page} onChange= {(value) => setPage(value)} />
    </>
  );
};

export default EmailData;
