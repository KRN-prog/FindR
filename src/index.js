import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Swipe from './pages/Swipe'
import Error404 from './pages/404'
import './utils/scss/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/swipe" component={Swipe} />
        <Route component={Error404} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
