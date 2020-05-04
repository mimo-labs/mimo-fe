import React from 'react';
import { Grid, Flex } from '@chakra-ui/core';

// components
import Logo from 'ui/components/Logo';
import Header from 'ui/components/Header';
import Sidebar from 'ui/components/Sidebar';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => (
  <Grid templateRows="150px auto" templateColumns="200px 1fr">
    <Logo />
    <Header />
    <Sidebar />
    <Flex flexDirection="column" align="flex-start" justify="flex-start">
      {children}
    </Flex>
  </Grid>
);

export default MainLayout;
