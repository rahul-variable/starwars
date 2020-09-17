import React from 'react';
import { Authentication } from '../../common/authenticate';
import history from '../../common/history';
import { SW_ROUTE_URL } from '../../common/constants';
export const SWSignout = () => {
  const onSignoutClick = () => {
    Authentication.signout();
    history.push(SW_ROUTE_URL.LOGIN);
  };
  return <button onClick={onSignoutClick}>Sign Out</button>;
};
