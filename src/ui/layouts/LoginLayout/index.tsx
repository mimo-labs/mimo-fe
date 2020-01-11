import React from 'react';

// styled
import { Container } from './styled';

// type
import { LoginLayoutProps } from './types';

const LoginLayout = ({ children }: LoginLayoutProps) => <Container>{children}</Container>;

export default LoginLayout;
