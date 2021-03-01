import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
