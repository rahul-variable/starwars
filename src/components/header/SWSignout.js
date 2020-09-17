import React from 'react';
import history from '../../common/history';
import { SW_ROUTE_URL } from '../../common/constants';
import { useDispatch } from 'react-redux';
import { USER_ACTION_SIGNOUT } from '../../common/actionTypes';
export const SWSignout = () => {
  const dispatch = useDispatch();
  const onSignoutClick = () => {
    dispatch({ type: USER_ACTION_SIGNOUT });
    history.push(SW_ROUTE_URL.LOGIN);
  };
  return <button onClick={onSignoutClick}>Sign Out</button>;
};
