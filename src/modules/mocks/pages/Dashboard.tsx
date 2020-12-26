import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

// ui components
import MainLayout from 'ui/layouts/MainLayout';

// components
import EndpointsList from 'modules/mocks/components/EndpointsList';

const Dashboard: FC = () => (
  <MainLayout>
    <Box p={2} width="100%">
      <EndpointsList />
    </Box>
  </MainLayout>
);

export default Dashboard;
