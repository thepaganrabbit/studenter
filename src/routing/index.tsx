import React from 'react';
import {
  IndexRouteProps,
  LayoutRouteProps,
  PathRouteProps,
  Route,
  Routes,
} from 'react-router-dom';
import short from 'short-uuid';

import Home from '../pages/Home/Home';
import SampleGuard from './guards/sample.guard';

// --> list of the applicaitons routes
export const routes: PathRouteProps[] | LayoutRouteProps[] | IndexRouteProps[] =
  [
    {
      path: '/',
      element: <Home />,
      index: true,
    } as IndexRouteProps,
    {
      path: '/guard',
      element: (
        <SampleGuard>
          <Home />
        </SampleGuard>
      ),
    } as PathRouteProps,
  ];

export const routeManager = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route {...route} key={short.generate()} />
      ))}
    </Routes>
  );
};
