import React, { Component } from 'react';
import Aux from '../../hoc/auxiliry';
import PCData from './PCData/PCData';
import PCCustomization from './PCCustomization/PCCustomization';
import Axios from 'axios';

class PCBuilder extends Component {
    state = {
    }

    componentDidMount(){

    	const paylod = {
    		title: "here is title."
    	};

        Axios({
        	url: 'http://localhost:8080/getprices',
        	method: 'POST',
        	data: paylod
        }).then(() => {
        	console.log("done");
        })
        .catch(() => {
        	console.log("error");
        })
    }

    render() {
        return (
            <Aux>
                <div className="container row no-gutters">
                    <div className=" col-sm-6 col-xs-12">
                        <div className="row">PC Image</div>
                        <div className="row">
                        <PCCustomization/>
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