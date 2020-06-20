import React from 'react';
import { Grid, Flex } from '@chakra-ui/core';

// components
import Header from 'ui/components/Header';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => (
  <Grid
    background="repeating-linear-gradient(
    to right,
    black,
    black 2px,
    white 2px,
    white 60px
  )"
    minH="100vh"
    templateColumns="1fr"
    templateRows="4.5rem auto"
  >
    <Header />
    <Flex align="flex-start" flexDirection="column" justify="flex-start">
      {children}
    </Flex>
  </Grid>
);

export default MainLayout;
