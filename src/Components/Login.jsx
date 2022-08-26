import React, { useContext } from "react";
import AddOns from "../PlanComponent/AddOns";
import Plan from "../PlanComponent/Plan";
import TemplateService from "../PlanComponent/TemplateService";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { authContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { toggleAuth, getToken, isAuth, token, formData, handleChange } =
    useContext(authContext);
  const navigate = useNavigate();
  return (
    <>
      {isAuth ? (
        <Box color="black">
          <Alert status="success">
            <AlertIcon />
            Congratulations ! Login Successful...
          </Alert>
          <Button onClick={() => navigate("/payment")}>
            {" "}
            Go to our Plans{" "}
          </Button>
          <Button onClick={() => navigate("/solution")}>
            {" "}
            Go to Home Page{" "}
          </Button>
        </Box>
      ) : (
        <Flex minH={"100vh"} align={"center"} justify={"center"}>
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Sign in to your account</Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                to enjoy all of our cool{" "}
                <Link color={"blue.400"}>features</Link> ✌️
              </Text>
            </Stack>
            <Box rounded={"lg"} boxShadow={"lg"} p={8}>
              <Stack spacing={4}>
                <form onSubmit={toggleAuth}>
                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input
                      value={formData.email}
                      name="email"
                      onChange={handleChange}
                      type="email"
                    />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input
                      value={formData.password}
                      name="password"
                      onChange={handleChange}
                      type="password"
                    />
                  </FormControl>
                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      align={"start"}
                      justify={"space-between"}
                    >
                      <Checkbox>Remember me</Checkbox>
                      <Link color={"blue.400"}>Forgot password?</Link>
                    </Stack>
                    <Button
                      type="submit"
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                      Sign in
                    </Button>
                  </Stack>
                </form>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      )}
      {!getToken && (
        <Box>
          <Alert status="warning">
            <AlertIcon />
            Sorry, Email or Password does not match !!!
          </Alert>
        </Box>
      )}
    </>
  );
};

export default Login;
