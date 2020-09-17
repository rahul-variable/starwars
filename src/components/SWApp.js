import React from 'react';
import { SWFooter } from './footer/SWFooter';
import { SWHeader } from './header/SWHeader';
import { SWRoutes } from './SWRoutes';
import { SW_ROUTE_URL } from '../common/constants';
import history from '../common/history';

export const SWApp = () => {
  history.push(SW_ROUTE_URL.DASHBOARD);
  return (
    <React.Fragment>
      <SWHeader />
      <main>
        <SWRoutes />
      </main>
      <SWFooter />
    </React.Fragment>
  );
};
