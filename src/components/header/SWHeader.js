import React from 'react';
import logo from '../../assets/images/logo.png';
export const SWHeader = () => {
  return (
    <React.Fragment>
      <header>
        <img src={logo} className="logo" />
      </header>
    </React.Fragment>
  );
};
