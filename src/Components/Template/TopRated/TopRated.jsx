import React, { Component } from 'react';
import {Row,Col,Grid} from 'react-bootstrap';
import {ProductCard} from '../../Molecule/Card/Card/Card';

class TopRated extends Component {
    render() {
        return (
            <Grid >
            <Row className="title" >
                <Col xs={12} md={4}>
                <p>Pengalaman yang di nilai tinggi</p>
                </Col>
            </Row>
            <Row >
                <Col xs={12} md={3}>
                <ProductCard />
                </Col>
                <Col xs={12} md={3}>
                <ProductCard />
                </Col>
                <Col xs={12} md={3}>
                <ProductCard />
                </Col>
                <Col xs={12} md={3}>
                <ProductCard />
                </Col>
            </Row>
            </Grid>
        );
    }
}

export default TopRated;