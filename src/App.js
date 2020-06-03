import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import TradePage from './pages/TradePage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <NavBar />
          <div id='page-body'>
            <Switch>
              <Route path='/' component={HomePage} exact />
              <Route path='/info' component={InfoPage} />
              <Route path='/trade' component={TradePage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
