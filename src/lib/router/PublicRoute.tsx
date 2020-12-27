import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

// hooks
import { useSession } from 'modules/common/hooks/useSession';

// lib
import { ROUTES } from 'lib/routes';

const PublicRoute: FC<RouteProps> = ({ children, ...routeProps }) => {
  const { isAuthenticated } = useSession();

  if (isAuthenticated) return <Redirect to={ROUTES.home} />;

  return <Route {...routeProps}>{children}</Route>;
};

export default PublicRoute;
