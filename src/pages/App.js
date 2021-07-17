import React from 'react';
import '../styles/app.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Hello from '../components/Hello';
import Page404 from '../components/404';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Hello} />
        <Route path="/" component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
