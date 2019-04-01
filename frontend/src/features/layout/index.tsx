import React, { FC } from 'react';
import Header from './header';
import Modals from './modals';

interface Props {
  children: any;
}

const Component: FC<Props> = ({ children }) => (
  <>
    <Header />
    <main>
      { children }
    </main>
    <Modals />
  </>
);

export default Component;
