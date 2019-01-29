import React, { Component } from 'react';
import Navigator from '../../Molecule/Navigator/Navigator';
import {ButtonNav} from '../../Atom/Button';
import {Row,Col,Grid} from 'react-bootstrap';

class DetailHeader extends Component {
    render() {
        return (
            <div>
               <Navigator searchBar={true}/>
                <img style={{width: `100%`,maxHeight: `308px`}} src="https://a0.muscache.com/im/pictures/812e040f-6f6f-4cae-ad67-66c050b57c1f.jpg?aki_policy=xx_large" />
            </div>
        );
    }
}

export default DetailHeader;