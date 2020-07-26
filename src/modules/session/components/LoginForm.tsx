import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Box, Flex, FormControl, FormLabel, Input, FormErrorMessage, Button } from '@chakra-ui/core';

// hooks
import { useLogin } from 'modules/session/hooks/useLogin';

// types
type LoginFormValues = {
  email: string;
  password: string;
};

// schema
const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  // custom hooks
  const { login } = useLogin();

  // handlers
  const onSumbit = (values: LoginFormValues) => login(values);

  // formik hooks
  const { errors, handleChange, values, handleSubmit } = useFormik<LoginFormValues>({
    initialValues,
    validationSchema,
    onSubmit: (values) => onSumbit(values),
  });

  return (
    <Box bg="white" border="2px solid black" borderRadius={4} p={5} w={400}>
      <form onSubmit={handleSubmit}>
        <Flex align="center" flexDirection="column">
          <FormControl mb={5} w="100%">
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input name="email" onChange={handleChange} placeholder="Enter your email" value={values.email} />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl w="100%">
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              name="password"
              onChange={handleChange}
              placeholder="Enter your password"
              type="password"
              value={values.password}
            />
            <FormErrorMessage>{errors.password}</FormErrorMessage>
          </FormControl>
        </Flex>
        <Flex align="center" flexDirection="column" mt={10}>
          <Button bg="black" color="white" type="submit" w="100%">
            LOGIN
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default LoginForm;
