import React, { FC } from 'react';
import { Accordion } from '@chakra-ui/react';

// components
import Endpoint from 'modules/mocks/components/Endpoint';

const EndpointsList: FC = () => (
  <Accordion allowToggle>
    <Endpoint />
  </Accordion>
);

export default EndpointsList;
