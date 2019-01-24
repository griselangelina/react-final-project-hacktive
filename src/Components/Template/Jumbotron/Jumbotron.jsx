import React, { Component } from 'react';
import './Jumbotron.css';

import Navigator from '../../Molecule/Navigator/Navigator';
import SearchTab from '../../Molecule/searchTab/searchTab';
class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron-v2">
        <Navigator />
        <SearchTab />
      </div>
    );
  }
}

export default Jumbotron;
