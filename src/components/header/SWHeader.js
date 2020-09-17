import React from 'react';
import logo from '../../assets/images/logo.png';
import { useSelector } from 'react-redux';
import { SWSignout } from './SWSignout';
const getUserInfo = (state) => state.userInfo.user;
export const SWHeader = () => {
  const user = useSelector(getUserInfo);
  return (
    <React.Fragment>
      <header>
        <img src={logo} className="logo" />
        <div className="signout">{user && <SWSignout />}</div>
      </header>
    </React.Fragment>
  );
};
