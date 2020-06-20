import React from 'react';
import { Flex } from '@chakra-ui/core';

type SessionLayoutProps = {
  children: React.ReactNode | React.ReactNode[];
};

const SessionLayout = ({ children }: SessionLayoutProps) => (
  <Flex
    w="100vw"
    h="100vh"
    justify="center"
    align="center"
    background="repeating-linear-gradient(
    to right,
    black,
    black 2px,
    white 2px,
    white 60px
  )"
  >
    {children}
  </Flex>
);

export default SessionLayout;
