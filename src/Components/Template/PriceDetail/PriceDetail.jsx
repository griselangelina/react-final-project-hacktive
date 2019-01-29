import React, { Component } from 'react';

import './PriceDetail.css';
import Price from '../../Molecule/PriceSum/Price';
import FormPrice from '../../Molecule/PriceSum/FormPrice';
class PriceDetail extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="price-detail">
                <Price price={this.props.price.harga} rate={this.props.price.rate} nilai={this.props.price.nilai}/>
                <FormPrice />
            </div>
        );
    }
}

export default PriceDetail;