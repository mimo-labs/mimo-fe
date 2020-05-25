import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Box, Flex, FormControl, FormLabel, Input, FormErrorMessage, Button } from '@chakra-ui/core';

// hooks
import { useSessionContext } from 'hooks/useSession';

// types
type LoginFormValues = {
  email: string;
  password: string;
};

// schema
const validationSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

const LoginForm = () => {
  const { login } = useSessionContext();

  const onSumbit = (values: LoginFormValues) => {
    const { email, password } = values;

    login(email, password);
  };

  const { errors, handleChange, values, handleSubmit } = useFormik<LoginFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => onSumbit(values),
  });

  return (
    <Box bg="white" border="2px solid black" p={5} borderRadius={4} w={400}>
      <form onSubmit={handleSubmit}>
        <Flex flexDirection="column" align="center">
          <FormControl mb={5} w="100%">
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input placeholder="Enter your email" name="email" onChange={handleChange} value={values.email} />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl w="100%">
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              placeholder="Enter your password"
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
            />
            <FormErrorMessage>{errors.password}</FormErrorMessage>
          </FormControl>
        </Flex>
        <Flex flexDirection="column" align="center" mt={10}>
          <Button type="submit" w="100%" bg="black" color="white">
            LOGIN
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default LoginForm;
