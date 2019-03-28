import React, { Fragment } from 'react';
import Header from './header';
import Confirm from './confirm';

const Component = (props: any) => (
  <Fragment>
    <Header />
    <main>
      { props.children }
    </main>
    <Confirm
      open={true}
      onClose={() => {}}
      onConfirm={() => {}}
    />
  </Fragment>
);

export default Component;
