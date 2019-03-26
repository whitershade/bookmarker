import React, { Fragment } from 'react';
import Header from './header';

const Component = (props: any) => (
  <Fragment>
    <Header />
    <main>
      { props.children }
    </main>
  </Fragment>
);

export default Component;
