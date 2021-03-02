import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import SignInUp from './pages/SignInUp';
import MyPage from './pages/MyPage';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/signin" component={SignInUp} />
        <Route path="/mypage" component={MyPage} />
      </Switch>
    </Router>
  );
}

export default App;
