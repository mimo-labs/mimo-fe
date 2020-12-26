import React, { FC } from 'react';
import { Flex, Select, Stack, IconButton } from '@chakra-ui/react';
import { FiPhone } from 'react-icons/fi';

const Header: FC = () => (
  <Flex alignItems="center" bg="white" borderBottom="2px solid black" justifyContent="space-between" pl={4}>
    <Stack align="center" isInline spacing={4}>
      <Select
        _focus={{ boxShadow: '0 0 0 3px rgba(212, 0, 27, 0.7)' }}
        borderColor="black"
        borderWidth={2}
        minW={44}
        placeholder="Organization"
      >{`// organizations`}</Select>
      <Select
        _focus={{ boxShadow: '0 0 0 3px rgba(212, 0, 27, 0.7)' }}
        borderColor="black"
        borderWidth={2}
        minW={44}
        placeholder="Project"
      >{`// projects`}</Select>
    </Stack>
    <Flex pr={4}>
      <IconButton
        _focus={{ boxShadow: '0 0 0 3px rgba(212, 0, 27, 0.7)' }}
        alignItems="center"
        aria-label="Configure user settings"
        backgroundColor="white"
        border="2px solid black"
        borderRadius="50%"
        icon={<FiPhone />}
        justifyContent="center"
        minH={10}
        minW={10}
        p={1}
      />
    </Flex>
  </Flex>
);

export default Header;
