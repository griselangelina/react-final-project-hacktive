import React, { Component } from 'react';
import {Button,ButtonToolbar} from 'react-bootstrap';
import Jumbotron from '../Components/Template/Jumbotron/Jumbotron';
import Jelajah from '../Components/Template/Jelajah/Jelajah';
import Rekomendasi from '../Components/Template/Rekomendasi/Rekomendasi';
import TopRated from '../Components/Template/TopRated/TopRated';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; /*bind dari file action */
import {getRumahData,getRekomedasi,getAllData} from '../redux/Data/actions';
class Homepage extends Component {
  componentDidMount(){
    this.props.getAllData();
    this.props.getRekomedasi();
  }
  render() {
    return (
      <div>
      <Jumbotron />
      <Jelajah />
      <Rekomendasi rekomendasi={this.props.rekomendasi}/>
      <TopRated data={this.props.rumah} ctg="Rumah" compTitle="Rumah yang di nilai tinggi" />
      <TopRated data={this.props.pengalaman} ctg="Pengalaman"compTitle="Pengalaman yang di nilai tinggi"/>
      <TopRated data={this.props.restoran} ctg="Restoran" compTitle="Restoran yang di nilai tinggi"/>

      </div>
    );
  }
}

const mapStateToProps = (state) =>({
  rumah:state.data.rumah,
  pengalaman:state.data.pengalaman,
  restoran:state.data.restoran,
  islogin:state.data.isLogin,
  rekomendasi:state.data.rekomendasi
})


const mapDispatchToProps =(dispatch) =>bindActionCreators({
  getRumahData,getRekomedasi,getAllData
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Homepage);