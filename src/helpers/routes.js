import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export function IsUserRedirect({ user, loggedInPath, children, ...restProps }) {
  return <Route
    {...restProps}
    render={() => {
      return user
        ? <Redirect to={{ pathname: loggedInPath }} />
        : children
    }} />
}

export function ProtectedRoute({ user, children, ...restProps }) {
  return <Route
    {...restProps}
    render={({ location }) => {
      return user
        ? children
        : <Redirect to={{ pathname: ROUTES.SIGN_IN, state: { from: location } }} />
    }}

  />
}