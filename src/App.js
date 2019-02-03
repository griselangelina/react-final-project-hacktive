import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router,  Route,Switch } from 'react-router-dom';

import Homepage from './Containers/Homepage';
import Category from './Containers/Category';
import Detail from './Containers/Detail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/:id" exact component={Category} />
          <Route path="/room/:ctg/:idx" exact component={Detail} />
        </Switch>
      </div>

    );
  }
}

export default App;
