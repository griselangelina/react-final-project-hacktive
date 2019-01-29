import React, { Component } from 'react';
import Navigator from  '../Components/Molecule/Navigator/Navigator';
import {Row,Col,Grid} from 'react-bootstrap';
 import SideDetail from '../Components/Template/SideDetail/SideDetail';
 import Ulasan from '../Components/Template/Ulasan/Ulasan';
import PriceDetail from '../Components/Template/PriceDetail/PriceDetail';
import DetailHeader from '../Components/Template/DetailHeader/DetailHeader';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; /*bind dari file action */
import {getRumahDetail} from '../redux/Data/actions';
class Detail extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getRumahDetail(this.props.match.params.ctg,this.props.match.params.idx);
    }
    render() {
        return (
            <div>
                <DetailHeader />
                <Grid className="">
                    <Row className="title" >
                        <Col xs={12} md={8}>
                        

                            <Row>
                                <Col xs={12} md={12}>
                                    <SideDetail sideData={this.props.detail}/>
                                </Col>
                                <Col xs={12} md={12}>
                                <p><Ulasan ulasan={this.props.ulasan} rate={this.props.detail.rate}/></p>
                                </Col>
                            </Row>


                        </Col>
                        <Col xs={12} md={4}>
                        <PriceDetail price={this.props.detail}/>
                        </Col>
                    </Row>
                    
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) =>({
    detail:state.data.detail,
    ulasan:state.data.ulasan,
    islogin:state.data.isLogin

  })
  
  
  const mapDispatchToProps =(dispatch) =>bindActionCreators({
    getRumahDetail
  },dispatch)
  
  export default connect(mapStateToProps,mapDispatchToProps)(Detail);