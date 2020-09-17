import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { SW_ROUTE_URL } from '../common/constants';
import { SWLoginContainer } from './main/Login/SWLoginContainer';
import { SWDashboard } from './main/SWDashboard';
import { Redirect } from 'react-router-dom';
import { Authentication } from '../common/authenticate';
export const SWRoutes = () => {
  console.log(12);
  return (
    <Suspense fallback={<></>}>
      <Switch>
        <Route exact path="/">
          {Authentication.isAuthenticate() ? (
            <Redirect to={SW_ROUTE_URL.DASHBOARD} />
          ) : (
            <Redirect to={SW_ROUTE_URL.LOGIN} />
          )}
        </Route>
        <Route path={SW_ROUTE_URL.DASHBOARD}>
          {Authentication.isAuthenticate() ? <SWDashboard /> : <Redirect to={SW_ROUTE_URL.LOGIN} />}
        </Route>
        <Route path={SW_ROUTE_URL.LOGIN}>
          {!Authentication.isAuthenticate() ? (
            <SWLoginContainer />
          ) : (
            <Redirect to={SW_ROUTE_URL.DASHBOARD} />
          )}
        </Route>
      </Switch>
    </Suspense>
  );
};
