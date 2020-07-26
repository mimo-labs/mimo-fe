import React, { ReactNode } from 'react';
import { Redirect, Route } from 'react-router-dom';

// hooks
import { useSessionContext } from 'modules/common/hooks/useSession';

// lib
import { ROUTES } from 'lib/routes';

type CustomRouteProps = { children: ReactNode; path: string };

export const ProtectedRoute = ({ children, path }: CustomRouteProps) => {
  const { isAuthenticated } = useSessionContext();

  if (!isAuthenticated()) return <Redirect to={ROUTES.login} />;

  return (
    <Route exact path={path}>
      {children}
    </Route>
  );
};

export const PublicRoute = ({ children, path }: CustomRouteProps) => {
  const { isAuthenticated } = useSessionContext();

  if (isAuthenticated()) return <Redirect to={ROUTES.home} />;

  return (
    <Route exact path={path}>
      {children}
    </Route>
  );
};
