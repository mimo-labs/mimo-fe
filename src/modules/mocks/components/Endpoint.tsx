import React, { FC } from 'react';
import { AccordionItem, AccordionIcon, AccordionButton, Box, AccordionPanel, Tag } from '@chakra-ui/react';

// components
import MockListItem from 'modules/mocks/components/MockListItem';

const Endpoint: FC = () => (
  <AccordionItem _last={{ borderBottom: '2px solid black' }} bg="white" border="2px solid black" mb={2} w="100%">
    <AccordionButton _focus={{ boxShadow: '0 0 0 4px rgba(212, 0, 27, 0.7)' }}>
      <Box flex="1" textAlign="left">
        <Tag border="1px solid black" variantColor="blue">
          /users
        </Tag>
      </Box>
      <AccordionIcon />
    </AccordionButton>
    <AccordionPanel borderTop="2px solid black" p={4}>
      <MockListItem statusCode={200} statusColor="green" statusText="OK" />
      <MockListItem statusCode={404} statusColor="red" statusText="Error" />
      <MockListItem statusCode={403} statusColor="red" statusText="Unauthorized" />
    </AccordionPanel>
  </AccordionItem>
);

export default Endpoint;
