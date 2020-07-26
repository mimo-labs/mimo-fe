import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Box, Flex, Button } from '@chakra-ui/core';

// hooks
import { useLogin } from 'modules/session/hooks/useLogin';

// ui components
import FormInput from 'ui/components/FormInput';
import FormPasswordInput from 'ui/components/FormPasswordInput';

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
  const onSubmit = (values: LoginFormValues) => login(values);

  // formik hooks
  const { errors, handleChange, touched, values, handleSubmit } = useFormik<LoginFormValues>({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box bg="white" border="2px solid black" borderRadius={4} p={5} w={400}>
      <form onSubmit={handleSubmit}>
        <Flex align="center" flexDirection="column">
          <FormInput
            errors={errors}
            label="Email"
            name="email"
            onChange={handleChange}
            placeholder="Enter your email"
            touched={touched}
            values={values}
          />
          <FormPasswordInput
            errors={errors}
            label="Password"
            name="newPasswordConfirmation"
            onChange={handleChange}
            placeholder="Enter your password"
            touched={touched}
            values={values}
          />
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
