import React, { Component } from 'react';
import {Button,ButtonToolbar} from 'react-bootstrap';
import Jumbotron from '../../Components/Template/Jumbotron/Jumbotron';
import Jelajah from '../../Components/Template/Jelajah/Jelajah';
import Rekomendasi from '../../Components/Template/Rekomendasi/Rekomendasi';
import TopRated from '../../Components/Template/TopRated/TopRated';
class Homepage extends Component {
  render() {
    return (
      <div>
      <Jumbotron />
      <Jelajah />
      <Rekomendasi />
      <TopRated />
      </div>
    );
  }
}

export default Homepage;
