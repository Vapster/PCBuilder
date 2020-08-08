import React, { Component } from 'react';
import Aux from '../../hoc/auxiliry';
import PCData from './PCData/PCData';
import PCCustomization from './PCCustomization/PCCustomization';
import Axios from 'axios';

class PCBuilder extends Component {
    state = {
        customMenu: {}
    }

    componentDidMount(){

    	const paylod = {
    		title: "here is title."
        };
        
        Axios({
        	url: 'http://localhost:8080/getall',
        	method: 'GET',
        	data: paylod
        }).then((res) => {
            this.setState({customMenu: res.data});
        })
        .catch(() => {
        	console.log("error in /getall request");
        })
    }

    render() {
        return (
            <Aux>
                <div className="container row no-gutters">
                    <div className=" col-sm-6 col-xs-12">
                        <div className="row">PC Image</div>
                        <div className="row">
                            <div className="col">
                                <PCCustomization menu={this.state.customMenu}/>
                            </div>
                            <PCData hardware="CPU" model="i58G" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-xs-12">PC Specifications</div>
                </div>
            </Aux>
        );
    }
}
 
export default PCBuilder;