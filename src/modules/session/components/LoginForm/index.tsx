import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

// styled
import { Form, Input, Button } from './styled';

// types
import { LoginFormValues } from './types';

// modules
import { loginRequest } from 'modules/session/actions';

// lib
import LabelWrapper from 'ui/components/LabelWrapper';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values: LoginFormValues) => {
    try {
      dispatch(loginRequest(values.email, values.password));
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => handleSubmit(values),
  });

  useEffect(() => {
    console.log(formik.values);
  }, [formik]);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <div className="top_content">
        <LabelWrapper label="Email">
          <Input
            placeholder="Enter your email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </LabelWrapper>
        <LabelWrapper label="Password">
          <Input
            placeholder="Enter your password"
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </LabelWrapper>
      </div>
      <div className="bottom_content">
        <Button type="submit">LOGIN</Button>
      </div>
    </Form>
  );
};

export default LoginForm;
