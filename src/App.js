import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './feature/navigation/Navigation';
import Coins from './feature/coins/Coins';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Coins />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
