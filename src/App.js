import React, { useEffect, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import ContactsPage from './pages/ContactsPage';
// import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Container from './components/share/Container';
import AppBar from './components/AppBar';
import authOps from './redux/auth/auth-operations';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);

const App = ({ onGetCurrentUser }) => {
  useEffect(() => {
    onGetCurrentUser();
  });

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PublicRoute
            path="/register"
            restricted
            redirectTo={'/contacts'}
            component={RegisterPage}
          />
          <PublicRoute
            path="/login"
            restricted
            redirectTo={'/contacts'}
            component={LoginPage}
          />
          <PrivateRoute
            path="/contacts"
            component={ContactsPage}
            redirectTo="/login"
          />
        </Switch>
      </Suspense>
    </Container>
  );
};

const mapDispatchToProps = {
  onGetCurrentUser: authOps.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
