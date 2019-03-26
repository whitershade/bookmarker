import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router';
import Loading from '../../features/layout/loading';

const PrivateRoute = ({
  isAuthenticated, isLoading, loadUser, component: Component, ...rest
}: any) => {
  const [initialized, initialize] = useState(false);

  useEffect(() => {
    loadUser();
    if (!initialized) { initialize(true); }
  }, []);

  if (!initialized || isLoading) return <Loading />;

  return (
    <Route
      {...rest}
      render={props => (
        isAuthenticated
          ? <Component {...props} />
          : (
            <Redirect to={{
              pathname: '/login',
              state: { from: props.location },
            }}
            />
          )
      )}
    />
  );
};

export default PrivateRoute;
