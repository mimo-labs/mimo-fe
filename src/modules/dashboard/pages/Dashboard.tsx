import React, { FC } from 'react';

// ui components
import MainLayout from 'ui/layouts/MainLayout';

// components
import Endpoints from 'modules/dashboard/components/Endpoints';

const Dashboard: FC = () => (
  <MainLayout>
    <Endpoints />
  </MainLayout>
);

export default Dashboard;
