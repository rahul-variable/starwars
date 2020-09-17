import React from 'react';
import logo from '../../assets/images/logo.png';
import { Authentication } from '../../common/authenticate';
import { SWSignout } from './SWSignout';
export const SWHeader = () => {
  return (
    <React.Fragment>
      <header>
        <img src={logo} className="logo" />
        <div className="signout">{Authentication.isAuthenticate() && <SWSignout />}</div>
      </header>
    </React.Fragment>
  );
};
