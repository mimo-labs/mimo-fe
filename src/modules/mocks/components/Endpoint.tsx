import React, { FC } from 'react';
import { AccordionItem, Stack, AccordionIcon, AccordionButton, Box, AccordionPanel, Tag } from '@chakra-ui/react';

// components
import MockListItem from 'modules/mocks/components/MockListItem';

const Endpoint: FC = () => (
  <AccordionItem
    _last={{ borderBottom: '2px solid black' }}
    _notLast={{
      mb: 4,
    }}
    bg="white"
    border="2px solid black"
    w="full"
  >
    <AccordionButton _focus={{ boxShadow: '0 0 0 4px rgba(212, 0, 27, 0.7)' }}>
      <Box flex={1} textAlign="left">
        <Tag border="2px solid black" variantColor="blue">
          /users
        </Tag>
      </Box>
      <AccordionIcon />
    </AccordionButton>
    <AccordionPanel borderTop="2px solid black" p={4}>
      <Stack border="2px solid black" borderBottomRadius="0.25rem" borderTopRadius="0.25rem" spacing={0}>
        <MockListItem statusCode={200} statusColor="green" statusText="OK" />
        <MockListItem statusCode={404} statusColor="red" statusText="Error" />
        <MockListItem statusCode={403} statusColor="red" statusText="Unauthorized" />
      </Stack>
    </AccordionPanel>
  </AccordionItem>
);

export default Endpoint;
