import React, { Component } from 'react';
import {Row,Col,Grid} from 'react-bootstrap';
import {ProductCard} from '../../Molecule/Card/Card/Card';

class TopRated extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Grid >
                <Row className="title" >
                    <Col xs={12} md={4}>
                    <p>{this.props.compTitle}</p>
                    </Col>
                </Row>
                <Row >
                    {
                        this.props.data!==undefined &&  this.props.data !==null?
                        this.props.data.map((p) => 
                        <Col xs={12} md={3}>
                            <ProductCard productData={p} ctg={this.props.ctg} />
                        </Col>) :
                        <Col xs={12} md={3}>
                            <ProductCard ctg={this.props.ctg}/>
                        </Col>
                    }
                </Row>
            </Grid>
        );
    }
}

export default TopRated;