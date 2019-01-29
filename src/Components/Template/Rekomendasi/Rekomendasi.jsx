import React, { Component } from 'react';
import {Row,Col,Grid} from 'react-bootstrap';
import {MediumCard} from '../../Molecule/Card/Card/Card';

class Rekomendasi extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (

        <Grid >
          <Row className="title" >
              <Col xs={12} md={4}>
              <p>Direkomendasikan untuk Anda</p>
              </Col>
          </Row>
          <Row >
              {
                  this.props.rekomendasi.map((p)=>
                  <Col xs={12} md={3}>
                    <MediumCard img={p.img} nama={p.nama} harga={p.harga}/>
                  </Col>
                  )
              }
                
              
          
          </Row>
        </Grid>

        );
    }
}

export default Rekomendasi;