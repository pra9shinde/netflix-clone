import React from 'react';
import { Route, Redirect } from 'react-router';

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={() => {
                if (!user) {
                    return children;
                }
                if (user) {
                    return <Redirect to={{ pathname: loggedInPath }} />;
                }
                return null;
            }}
        />
    );
}

export function ProtectedRoute({ user, children, rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (user) {
                    return children;
                } else {
                    return <Redirect to={{ pathname: 'signin', state: { from: location } }} />;
                }
            }}
        />
    );
}
