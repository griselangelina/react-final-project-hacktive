import React, { Component } from 'react';
import {Row,Col,Grid} from 'react-bootstrap';
import {MediumCard} from '../../Molecule/Card/Card/Card';

class Rekomendasi extends Component {
    render() {
        return (

        <Grid >
          <Row className="title" >
              <Col xs={12} md={4}>
              <p>Direkomendasikan untuk Anda</p>
              </Col>
          </Row>
          <Row >
                <Col xs={12} md={3}>
              <MediumCard />
              </Col>
              <Col xs={12} md={3}>
              <MediumCard />
              </Col>
              <Col xs={12} md={3}>
              <MediumCard />
              </Col>
              <Col xs={12} md={3}>
              <MediumCard />
              </Col>
          
          </Row>
        </Grid>

        );
    }
}

export default Rekomendasi;