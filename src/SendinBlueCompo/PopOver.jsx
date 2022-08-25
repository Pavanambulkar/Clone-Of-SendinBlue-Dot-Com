import React from "react";
import {
  Flex,
  Box,
  Text,
  Button,
  Img,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";

const PopOver = () => {
  return (
    <>
      <Flex marginTop="40px" color="white" className="flex1">
        <Box
          flex="1"
          width={[1, 1 / 2, 1 / 4]}
          fontSize={["sm", "md", "lg", "xl"]}
        >
          {/* 1st */}
          <Popover fontSize={["sm", "md", "lg", "xl"]}>
            <PopoverTrigger>
              <Button
                color="black"
                display="flex"
                margin="auto"
                justifyContent="center"
                fontSize={["sm", "md", "lg", "xl"]}
              >
                1. Email Compaigns
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverCloseButton />
              <PopoverBody color="grey" fontSize={["sm", "md", "lg", "xl"]}>
                Promote your brand and grow your business with beautifully
                designed emails. Always send your campaigns at the best time for
                each contact with our Sent Time Optimization feature.
              </PopoverBody>
              <Button
                colorScheme="blue"
                variant="ghost"
                fontSize={["sm", "md", "lg", "xl"]}
              >
                Learn More..
              </Button>
            </PopoverContent>
          </Popover>
          {/* 2nd */}
          <Popover fontSize={["sm", "md", "lg", "xl"]}>
            <PopoverTrigger>
              <Button
                color="black"
                display="flex"
                margin="auto"
                justifyContent="center"
                fontSize={["sm", "md", "lg", "xl"]}
              >
                2. Marketing Automation
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverCloseButton />
              <PopoverBody color="grey" fontSize={["sm", "md", "lg", "xl"]}>
                Automate your marketing and sales processes in no time. Create
                time-sensitive offers for your customer segments, and automate
                this process in a few steps using Sendinblue.
              </PopoverBody>
              <Button
                colorScheme="blue"
                variant="ghost"
                fontSize={["sm", "md", "lg", "xl"]}
              >
                Learn More..
              </Button>
            </PopoverContent>
          </Popover>
          {/* 3rd */}
          <Popover fontSize={["sm", "md", "lg", "xl"]}>
            <PopoverTrigger>
              <Button
                color="black"
                display="flex"
                margin="auto"
                justifyContent="center"
                fontSize={["sm", "md", "lg", "xl"]}
              >
                3. CRM
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverCloseButton />
              <PopoverBody color="grey" fontSize={["sm", "md", "lg", "xl"]}>
                Organize your team and track every customer interaction with
                your CRM. Customize your own sales pipeline and track deals and
                revenue potential as your leads move across the funnel.
              </PopoverBody>
              <Button
                colorScheme="blue"
                variant="ghost"
                fontSize={["sm", "md", "lg", "xl"]}
              >
                Learn More..
              </Button>
            </PopoverContent>
          </Popover>
          {/* 4th */}
          <Popover fontSize={["sm", "md", "lg", "xl"]}>
            <PopoverTrigger>
              <Button
                color="black"
                display="flex"
                margin="auto"
                justifyContent="center"
                fontSize={["sm", "md", "lg", "xl"]}
              >
                4. Transactional Emails
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverCloseButton />
              <PopoverBody color="grey" fontSize={["sm", "md", "lg", "xl"]}>
                Step up your transactional emails with on-brand designs and
                reliable deliverability. Improve your email deliverability and
                be confident your emails will reach your customer’s inbox using
                our world-class SMTP infrastructure.
              </PopoverBody>
              <Button
                colorScheme="blue"
                variant="ghost"
                fontSize={["sm", "md", "lg", "xl"]}
              >
                Learn More..
              </Button>
            </PopoverContent>
          </Popover>
          {/* 5th */}
          <Popover fontSize={["sm", "md", "lg", "xl"]}>
            <PopoverTrigger>
              <Button
                color="black"
                display="flex"
                margin="auto"
                justifyContent="center"
                fontSize={["sm", "md", "lg", "xl"]}
              >
                5. Live Chat
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverCloseButton />
              <PopoverBody color="grey" fontSize={["sm", "md", "lg", "xl"]}>
                Connect with your leads and customers in real time, as they
                reach out to you on your website or Facebook Business pages.
                It’s easy to manage all your customer conversations in one place
                using our multi-channel Chat app!
              </PopoverBody>
              <Button
                colorScheme="blue"
                variant="ghost"
                fontSize={["sm", "md", "lg", "xl"]}
              >
                Learn More..
              </Button>
            </PopoverContent>
          </Popover>
        </Box>

        <Box
          flex="1"
          width={[1, 1 / 2, 1 / 4]}
          fontSize={["sm", "md", "lg", "xl"]}
        >
          <Img
            height="85%"
            width="80%"
            src="https://www.sendinblue.com/wp-content/uploads/2021/07/marketing-automation.png"
          />
        </Box>
      </Flex>
      <Button
        display="flex"
        justifyContent="center"
        margin="auto"
        fontSize={["sm", "md", "lg", "xl"]}
        colorScheme="blue"
        variant="ghost"
      >
        Discover All Features..
      </Button>
    </>
  );
};

export default PopOver;
