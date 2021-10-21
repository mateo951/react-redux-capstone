import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './feature/navigation/Navigation';
import Coins from './feature/coins/Coins';
import TopCoin from './feature/coins/TopCoin';
import CoinsDetail from './feature/coins/CoinsDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <TopCoin />
          <Coins />
        </Route>
        <Route exact path="/coin-detail">
          <CoinsDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
