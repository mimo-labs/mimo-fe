import React from 'react';
import { Box } from '@chakra-ui/core';

// ui components
import MainLayout from 'ui/layouts/MainLayout';

// components
import EndpointsList from 'modules/mocks/components/EndpointsList';

const Dashboard = () => (
  <MainLayout>
    <Box p={2} width="100%">
      <EndpointsList />
    </Box>
  </MainLayout>
);

export default Dashboard;
