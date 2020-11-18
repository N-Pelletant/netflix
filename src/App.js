import { BrowserRouter as Router } from 'react-router-dom';

import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages";
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

export default function App() {
  const { user } = useAuthListener();

  return <Router>
    <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} exact path={ROUTES.SIGN_IN}>
      <Signin />
    </IsUserRedirect>
    <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} exact path={ROUTES.SIGN_UP}>
      <Signup />
    </IsUserRedirect>
    <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} exact path={ROUTES.HOME}>
      <Home />
    </IsUserRedirect>
    <ProtectedRoute user={user} exact path={ROUTES.BROWSE} >
      <Browse />
    </ProtectedRoute>
  </Router>
}