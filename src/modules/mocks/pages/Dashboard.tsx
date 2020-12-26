import React, { FC } from 'react';

// ui components
import MainLayout from 'ui/layouts/MainLayout';

// components
import EndpointsList from 'modules/mocks/components/EndpointsList';

const Dashboard: FC = () => (
  <MainLayout>
    <EndpointsList />
  </MainLayout>
);

export default Dashboard;
