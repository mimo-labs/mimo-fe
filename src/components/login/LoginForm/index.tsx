import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

// styled
import { Container, Input, LogoContainer, Button } from './styled';

// modules
import { loginRequest } from 'modules/session/actions';

// lib
import LabelWrapper from 'components/common/LabelWrapper';

const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      try {
        dispatch(loginRequest(values.email, values.password));
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Container onSubmit={formik.handleSubmit}>
      <div className="top_content">
        <LogoContainer />
        <LabelWrapper label="email">
          <Input placeholder="Email" name="email" onChange={formik.handleChange} value={formik.values.email} />
        </LabelWrapper>
        <LabelWrapper label="Password">
          <Input placeholder="Password" name="password" onChange={formik.handleChange} value={formik.values.password} />
        </LabelWrapper>
      </div>
      <div className="bottom_content">
        <Button type="submit">LOGIN</Button>
      </div>
    </Container>
  );
};

export default LoginForm;
