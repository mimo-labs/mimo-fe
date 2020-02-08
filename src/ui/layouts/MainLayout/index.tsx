import React from 'react';

// styled
import { Container, Main } from './styled';

// components
import Logo from 'ui/components/Logo';
import Header from 'ui/components/Header';
import Sidebar from 'ui/components/Sidebar';

// types
import { MainLayoutProps } from './types';

const MainLayout = ({ children }: MainLayoutProps) => (
  <Container>
    <Logo />
    <Header />
    <Sidebar />
    <Main>{children}</Main>
  </Container>
);

export default MainLayout;
