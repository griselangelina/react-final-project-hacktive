import React, { Component } from 'react';
import Fasilitas from '../../Molecule/Detail/Fasilitas';
import RuangDetail from '../../Molecule/Detail/RuangDetail';
import RumahDetail from '../../Molecule/Detail/RumahDetail';
import TempatTidur from '../../Molecule/Detail/TempatTidur';


class SideDetail extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <RumahDetail rumah={this.props.sideData} />
                <hr />
                <RuangDetail ruang={this.props.sideData.summary_ruangan}/>
                <hr />
                <Fasilitas />
                <hr />
                <TempatTidur />
                <hr />
            </div>
        );
    }
}

export default SideDetail;