import React, { Component } from 'react';
import {Button,ButtonToolbar} from 'react-bootstrap';
import CategoryHeader from '../Components/Template/CategoryHeader/CategoryHeader';
import Jelajah from '../Components/Template/Jelajah/Jelajah';
import TopRated from '../Components/Template/TopRated/TopRated';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; /*bind dari file action */
import {getRumahData} from '../redux/Data/actions';
class Category extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getRumahData(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.rumah !== prevProps.rumah) {
      this.props.getRumahData(this.props.match.params.id);
    }
  }

  render() {
    return (
      <div>
      <CategoryHeader />
      <Jelajah />
      <TopRated data={this.props.rumah} ctg={this.props.match.params.id} compTitle="Memperkenalkan Airbnb plus" />
      </div>
    );
  }
}

const mapStateToProps = (state) =>({
  rumah:state.data.rumah,
  islogin:state.data.isLogin
})


const mapDispatchToProps =(dispatch) =>bindActionCreators({
  getRumahData
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Category);