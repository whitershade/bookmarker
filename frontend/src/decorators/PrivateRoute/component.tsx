import React from 'react';
import { Route, Redirect } from 'react-router';


const Component = ({ isAuthenticated, component: Component, ...rest }: any) => {
    if (!isAuthenticated) alert('401');

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