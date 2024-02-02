import { eRoutes } from '@/common/enums';
import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

const HomePage = React.lazy(() => import('@/containers/pages/Home.page'));

export const AppRouter = () => {
  const routes = useRoutes([
    { path: eRoutes.HOME, element: <HomePage /> },
    { path: '*', element: <Navigate to={eRoutes.HOME} replace /> },
  ]);

  return routes;
};
