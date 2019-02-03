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
                <SmallCard text="Rumah" img={"https://a0.muscache.com/im/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg?aki_policy=large"}/>
                <SmallCard text="Pengalaman" img={"https://a0.muscache.com/4ea/air/v2/pictures/cb8b3101-d419-4c17-8e2f-4989b39b98c3.jpg?t=r:w375-h250-sfit,e:fjpg-c80"}/>
                <SmallCard text="Restoran" img={"https://a0.muscache.com/4ea/air/v2/pictures/da2d8e97-90b7-409f-94ac-5ab0327c289b.jpg?t=r:w375-h250-sfit,e:fjpg-c80"}/>
            </div> 
          </Row>
        </Grid>
    );
  }
}

export default Jelajah;
