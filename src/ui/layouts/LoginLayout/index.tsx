import React from 'react';

// styled
import { Container } from './styled';

// type
import { LoginLayoutProps } from './_types';

const LoginLayout = ({ children }: LoginLayoutProps) => <Container>{children}</Container>;

export default LoginLayout;
