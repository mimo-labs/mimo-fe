import React from 'react';
import { Redirect, Route } from 'react-router-dom';

// hooks
import { useSessionContext } from 'hooks/useSession';

// ui layouts
import MainLayout from 'ui/layouts/MainLayout';
import SessionLayout from 'ui/layouts/SessionLayout';

// types
type CustomRouteProps = { children: React.ReactChild; path: string };

export const ProtectedRoute = ({ children, path }: CustomRouteProps) => {
  // TODO: check why this code this throwing error
  // const { isAuthenticated } = useSessionContext();
  // if (!isAuthenticated) return <Redirect to="/login" />;
  // return (
  //   <Route exact path={path}>
  //     <MainLayout>{children}</MainLayout>
  //   </Route>
  // );
};

export const SessionRoute = ({ children, path }: CustomRouteProps) => {
  // const { isAuthenticated } = useSessionContext();
  // if (isAuthenticated) return <Redirect to="/" />;
  // return (
  //   <Route exact path={path}>
  //     <SessionLayout>{children}</SessionLayout>
  //   </Route>
  // );
};
