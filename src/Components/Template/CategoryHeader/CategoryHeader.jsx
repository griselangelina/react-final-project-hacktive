import React, { Component } from 'react';
import Navigator from '../../Molecule/Navigator/Navigator';
import {ButtonNav} from '../../Atom/Button';
import {Grid} from 'react-bootstrap';
import {ModalTamu,ModalKategori} from '../../Molecule/Modal/Modal';
import './CategoryHeader.css';
class CategoryHeader extends Component {

    constructor(){
        super()
        this.state={
            modal1:false,
            modal2:false,
            
        }
    }
    allmodalClose =() =>{
        this.setState({modal1:false,modal2:false})
    }
    modalOpen =() =>{
        this.allmodalClose();
        this.setState({modal1:true})
       
    }
    modal2Open =() =>{
        this.allmodalClose();
        this.setState({modal2:true})

    }
    

    render() {
    let modal1Close = () => this.setState({ modal1: false });
    let modal2Close = () => this.setState({ modal2: false });

        return (
            <div className="category-header">
               <Navigator searchBar={true}/>
                <Grid>
                    <div className="menu-button"> 
                        <ButtonNav klik={this.modalOpen} id={'1'}>Jumlah Tamu</ButtonNav>
                        <ButtonNav klik={this.modal2Open} id={'2'}>Jumlah Koper</ButtonNav>
                    </div> 
                    <ModalTamu open={this.state.modal1} close={modal1Close}/>
                    <ModalKategori open={this.state.modal2} close={modal2Close}/>

                </Grid>
            </div>
        );
    }
}

export default CategoryHeader;