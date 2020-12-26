import React, { FC } from 'react';
import { Accordion } from '@chakra-ui/react';

// components
import Endpoint from 'modules/mocks/components/Endpoint';

const EndpointsList: FC = () => (
  <Accordion allowToggle p={4} w="full">
    <Endpoint />
  </Accordion>
);

export default EndpointsList;
