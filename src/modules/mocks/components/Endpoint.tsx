import React from 'react';
import { AccordionItem, AccordionIcon, AccordionHeader, Box, AccordionPanel, Tag } from '@chakra-ui/core';

// components
import MockListItem from 'modules/mocks/components/MockListItem';

const Endpoint = () => {
  return (
    <AccordionItem _last={{ borderBottom: '2px solid black' }} bg="white" border="2px solid black" mb={2} w="100%">
      <AccordionHeader _focus={{ boxShadow: '0 0 0 4px rgba(212, 0, 27, 0.7)' }}>
        <Box flex="1" textAlign="left">
          <Tag border="1px solid black" variantColor="blue">
            /users
          </Tag>
        </Box>
        <AccordionIcon />
      </AccordionHeader>
      <AccordionPanel borderTop="2px solid black" p={4}>
        <MockListItem statusCode={200} statusColor="green" statusText="OK" />
        <MockListItem statusCode={404} statusColor="red" statusText="Error" />
        <MockListItem statusCode={403} statusColor="red" statusText="Unauthorized" />
      </AccordionPanel>
    </AccordionItem>
  );
};

export default Endpoint;
