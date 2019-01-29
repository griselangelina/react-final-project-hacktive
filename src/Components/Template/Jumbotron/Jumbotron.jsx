import React, { Component } from 'react';
import './Jumbotron.css';

import Navigator from '../../Molecule/Navigator/Navigator';
import SearchTab from '../../Molecule/searchTab/searchTab';
import SearchTemplate from '../../Molecule/SearchTemplate/SearchTemplate';
class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron-v2">
        <Navigator searchBar={false} />
        <SearchTemplate />
      </div>
    );
  }
}

export default Jumbotron;
