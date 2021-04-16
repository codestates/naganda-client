import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import SignInUp from './pages/SignInUp';
import MyPage from './pages/MyPage';
import Scheduler from './pages/Scheduler';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Router>
      <Route path="/" component={LandingPage} exact />
      <Switch>
        <Route path="/signin" component={SignInUp} />
        <Route path="/mypage/:username" component={MyPage} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/scheduler/:schedulerid" component={Scheduler} />
        <Route path="/scheduler" component={Scheduler} />
        <Route path="/search" component={SearchPage} />
        <Route path="/search/:name" component={SearchPage} />
      </Switch>
    </Router>
  );
}

export default App;
