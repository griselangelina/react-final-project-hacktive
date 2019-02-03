import React, { Component } from 'react';
import UlasanDetail from '../../Molecule/Detail/UlasanDetail';
import CommentDetail from '../../Molecule/Detail/CommentDetail';

class Ulasan extends Component {
    constructor(props){
        super(props)
    }


    render() {
        return (
            <div>
               <UlasanDetail rate={this.props.rate}/> 
                {
                   this.props.ulasan.map((p)=> <CommentDetail commentdata={p}/>)
                }    
            </div>
        );
    }
}

export default Ulasan;