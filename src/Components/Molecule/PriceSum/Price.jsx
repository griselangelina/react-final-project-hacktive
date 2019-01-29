import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap';
import {Star} from '../../Atom/Star';
class Price extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <Row>
                    <Col  xs={12} md={12}>
                    <span class="text-big">Rp {this.props.price}</span>
                    <span class="text-xs"> Per malam</span>
                    
                    </Col>
                    <Col  xs={12} md={12}>
                    <span className="star-rating">
                        <Star />
                        <Star />
                        <Star />
                    </span>
                    <span className="text-xs">
                        {this.props.nilai}
                    </span>
                    </Col>
                    <Col  xs={12} md={12}>
                    <div className="pembatas"></div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Price;