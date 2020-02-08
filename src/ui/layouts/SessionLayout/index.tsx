import React from 'react';

// styled
import { Container } from './styled';

// type
import { SessionLayoutProps } from './types';

const SessionLayout = ({ children }: SessionLayoutProps) => <Container>{children}</Container>;

export default SessionLayout;
