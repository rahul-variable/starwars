import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { SW_ROUTE_URL } from '../common/constants';
import { SWLoginContainer } from './main/Login/SWLoginContainer';
import { SWDashboard } from './main/SWDashboard';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
const getUserInfo = (state) => state.userInfo.user;
export const SWRoutes = () => {
  const user = useSelector(getUserInfo);
  return (
    <Suspense fallback={<></>}>
      <Switch>
        <Route exact path="/">
          {user ? <Redirect to={SW_ROUTE_URL.DASHBOARD} /> : <Redirect to={SW_ROUTE_URL.LOGIN} />}
        </Route>
        <Route path={SW_ROUTE_URL.DASHBOARD}>
          {user ? <SWDashboard /> : <Redirect to={SW_ROUTE_URL.LOGIN} />}
        </Route>
        <Route path={SW_ROUTE_URL.LOGIN}>
          {!user ? <SWLoginContainer /> : <Redirect to={SW_ROUTE_URL.DASHBOARD} />}
        </Route>
      </Switch>
    </Suspense>
  );
};
