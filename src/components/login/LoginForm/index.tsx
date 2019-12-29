import React from 'react';
import { useFormik } from 'formik';

// styled
import { Container, Input, LogoContainer, Button } from './styled';

// modules
import { loginRequest } from 'modules/session/actions';

// lib
import LabelWrapper from 'components/common/LabelWrapper';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      mail: '',
      password: '',
    },
    onSubmit: (values) => {
      try {
        console.log(values);
        loginRequest(values.mail, values.password);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Container onSubmit={formik.handleSubmit}>
      <div className="top_content">
        <LogoContainer />
        <LabelWrapper label="Mail">
          <Input placeholder="Mail" name="mail" onChange={formik.handleChange} value={formik.values.mail} />
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
