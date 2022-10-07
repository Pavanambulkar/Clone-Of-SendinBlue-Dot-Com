import React from "react";
import { Grid, GridItem, Img, Button, Text, Box, Badge, SimpleGrid } from "@chakra-ui/react";
import Styles from "./Module.Nomatter.css";
const Nomatter = () => {
  return (
    <>
    
      <Grid
        width="90%"
        margin="auto"
        templateRows="repeat(2,)"
        templateColumns="repeat(3, 1fr)"
        marginTop='30px'
        direction={["column", "column", "row", "row"]}
        minChildWidth='120px'
       
      >
        <GridItem w="100%" bg="rgb(255,217,212)">
          <Button className="bt" colorScheme="gray">
            BUSINESS OWNER
          </Button>

          <Img
            className="img2"
            src="https://www.sendinblue.com/wp-content/uploads/2020/03/Edwin_Aplha_Full_Res_B-@1x.png"
          />
          <Text marginTop='10px' textAlign='center' fontSize={['sm', 'md', 'lg', 'xl']}>"As a small team, simplifying our <br /> workflow is a top priority, so having <br /> our contacts, SMS, and email in one <br /> place helps us a ton!"</Text>
          <Box  className="b4" fontSize={['sm', 'md', 'lg', 'xl']}>
            <Box> <Img className="i" src="https://www.sendinblue.com/wp-content/uploads/2020/03/Edwart-Chocolatier.svg"/> </Box>
            <Box >
                <Badge>Edwin Yansané</Badge>
                <Text>Founder @ Edwart Chocolatier</Text>

            </Box>

          </Box>
        </GridItem>
        {/*  */}
        <GridItem w="100%" bg="rgb(0,146,255)">
          <Button className="bt" colorScheme="gray">
            ECOMMERCE
          </Button>
          <Img
            className="img2"
            src="https://www.sendinblue.com/wp-content/uploads/2020/04/Julien_Alpha_Full_Res@2x.png"
          />
                    <Text marginTop='10px' color='white' textAlign='center' fontSize={['sm', 'md', 'lg', 'xl']}>"I added Sendinblue to my <br /> eCommerce site in a few clicks! Now I <br /> can automate campaigns and track <br /> conversions in real-time."</Text>
                    <Box  className="b4" fontSize={['sm', 'md', 'lg', 'xl']}>
            <Box> 
                <Img className="i" src="https://www.sendinblue.com/wp-content/uploads/2020/04/raffineurs-Logo@2x.png"/> </Box>
            <Box >
                <Badge>Julien Bergis</Badge>
                <Text color='white'>Co-Founder @ Les Raffineurs</Text>

            </Box>

               </Box>

        </GridItem>
        {/*  */}
        <GridItem w="100%" bg="rgb(4,74,117)">
          <Button className="bt" colorScheme="gray">
            STARTUP
          </Button>
          <Img
            className="img2"
            src="https://www.sendinblue.com/wp-content/uploads/2020/04/Martin_Alpha_Full_Res@2x.png"
          />
                    <Text marginTop='10px' color='white' textAlign='center' fontSize={['sm', 'md', 'lg', 'xl']}>"We went from 5,000 users to over a <br /> million, and Sendinblue helped us <br /> automate all user messages as we've <br /> grown."</Text>
                    <Box  className="b4" fontSize={['sm', 'md', 'lg', 'xl']}>
            <Box> 
                <Img className="i" src="https://www.sendinblue.com/wp-content/uploads/2020/12/MPG.png"/> </Box>
            <Box >
                <Badge>Martin Jaglin
</Badge>
                <Text color='white'>Co-Founder @ Mon Petit Gazon</Text>

            </Box>

               </Box>

        </GridItem>
        {/*  */}
        <GridItem w="100%" bg="rgb(255,210,1)">
          <Button className="bt" colorScheme="gray">
            MARKETER
          </Button>
          <Img
            className="img2"
            src="https://www.sendinblue.com/wp-content/uploads/2020/04/Elise_Alpha_Full_Res@2x.png"
          />
                    <Text marginTop='10px' textAlign='center' fontSize={['sm', 'md', 'lg', 'xl']}> "Sendinblue has saved me so much <br /> time, and the automation was so easy <br /> to set up! It has helped me seriously <br /> increase my conversions." </Text>
                    <Box  className="b4" fontSize={['sm', 'md', 'lg', 'xl']}>
            <Box> 
                <Img className="i" src="https://www.sendinblue.com/wp-content/uploads/2020/04/infocus_logo.png"/> </Box>
            <Box >
                <Badge>Elise Thorel
</Badge>
                <Text>Communication Coordinator @ InFocus</Text>

            </Box>

               </Box>

        </GridItem>
        {/*  */}
        <GridItem w="100%" bg="rgb(9,30,63)">
          <Button className="bt" colorScheme="gray">
            ENTERPRISE
          </Button>
          <Img
            className="img2"
            src="https://www.sendinblue.com/wp-content/uploads/2020/04/Benoit_Alpha_Full_Res@2x.png"
          />
                    <Text marginTop='10px' color='white' textAlign='center' fontSize={['sm', 'md', 'lg', 'xl']}> "We use Sendinblue for transactional <br /> SMS messages and emails. We were <br /> especially attracted by the quality <br /> product and support offered." </Text>
                    <Box  className="b4" fontSize={['sm', 'md', 'lg', 'xl']}>
            <Box> 
                <Img className="i" src="https://www.sendinblue.com/wp-content/uploads/2020/04/marcelVTC@2x.png"/> </Box>
            <Box >
                <Badge>Benoit Richard</Badge>
                <Text color='white'>
CEO & Founder @ Marcel</Text>

            </Box>

               </Box>

        </GridItem>
        {/*  */}
        <GridItem w="100%" bg="rgb(0,146,255)">
          <Button className="bt" colorScheme="gray">
            AGENCY
          </Button>
          <Img
            className="img2"
            src="https://www.sendinblue.com/wp-content/uploads/2020/04/Marine_Alpha_Full_Res@2x.png"
          />
                    <Text marginTop='10px' color='white' textAlign='center' fontSize={['sm', 'md', 'lg', 'xl']}> "I've advised clients to use Sendinblue <br /> for years. It's super easy to set up and <br /> use, and the support is always <br /> responsive when you need." </Text>
                    <Box  className="b4" fontSize={['sm', 'md', 'lg', 'xl']}>
            <Box> 
                <Img className="i" src="https://www.sendinblue.com/wp-content/uploads/2020/04/AgenceMe.svg"/> </Box>
            <Box >
                <Badge>Marine Legrand</Badge>
                <Text color='white'>
Co-Founder @ AgenceMe</Text>

            </Box>

               </Box>

        </GridItem>
      </Grid>
      
    </>
  );
};

export default Nomatter;
