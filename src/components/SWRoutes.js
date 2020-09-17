import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { SW_ROUTE_URL } from '../common/constants';
import { SWLogin } from './main/SWLogin';
import { SWDashboard } from './main/SWDashboard';
export const SWRoutes = () => {
  return (
    <Suspense fallback={<></>}>
      <Switch>
        <Route exact path={SW_ROUTE_URL.ROOT} component={SWDashboard} />
        <Route path={SW_ROUTE_URL.DASHBOARD} component={SWDashboard} />
        <Route path={SW_ROUTE_URL.LOGIN} component={SWLogin} />
      </Switch>
    </Suspense>
  );
};
