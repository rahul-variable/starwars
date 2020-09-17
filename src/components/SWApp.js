import React from 'react';
import { SWFooter } from './footer/SWFooter';
import { SWHeader } from './header/SWHeader';
import { SWRoutes } from './SWRoutes';

export const SWApp = () => {
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
