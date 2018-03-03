import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoginContainer } from './bundles/session/containers';
import './App.css';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LoginContainer} />
        <Route component={() => <p>Page Not Found</p>} />
      </Switch>
    </div>
  )
}

export default App;
