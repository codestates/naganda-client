import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import SignInUp from './pages/SignInUp';
import MyPage from './pages/MyPage';
import Scheduler from './pages/Scheduler';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/signin" component={SignInUp} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/scheduler" component={Scheduler} />
      </Switch>
    </Router>
  );
}

export default App;
