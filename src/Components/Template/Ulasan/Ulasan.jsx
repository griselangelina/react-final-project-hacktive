import React, { Component } from 'react';
import UlasanDetail from '../../Molecule/Detail/UlasanDetail';
import CommentDetail from '../../Molecule/Detail/CommentDetail';

class Ulasan extends Component {
    constructor(props){
        super(props)
    }


    render() {
        console.log("yois ",this.props.ulasan)

        return (
            <div>
               <UlasanDetail /> 
                {
                   this.props.ulasan.map((p)=> <CommentDetail commentdata={p}/>)
                } 
             
               
            </div>
        );
    }
}

export default Ulasan;