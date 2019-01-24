import React, { Component } from 'react';
import './Jelajah.css';
import {Row,Col,Grid} from 'react-bootstrap';
import {SmallCard} from '../../Molecule/Card/Card/Card';
class Jelajah extends Component {
  render() {
    return (
        <Grid >
          <Row className="title" >
              <Col xs={12} md={4}>
              <p>Jelajahi Airbnb</p>
              </Col>
          </Row>
          <Row >
          <div xs={12} md={12} className="inl">
              <SmallCard text={"Rumah"}/>
              <SmallCard text={"Pengalaman"}/>
              <SmallCard text={"Restoran"}/>
          </div>
          
          </Row>
        </Grid>
    );
  }
}

export default Jelajah;
