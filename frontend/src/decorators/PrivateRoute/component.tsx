import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router';


const Component = ({ isAuthenticated, isLoading, loadUser, component: Component, ...rest }: any) => {
    const [initialized, initialize] = useState(false);

    useEffect(() => {
        loadUser();
        !initialized && initialize(true);
    }, [isAuthenticated]);

    if (!initialized || isLoading) return null;

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


export default Component;