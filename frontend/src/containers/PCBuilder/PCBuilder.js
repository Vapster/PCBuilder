import React, { Component } from 'react';
import Aux from '../../hoc/auxiliry';
import PCData from './PCData/PCData';
import PCCustomization from './PCCustomization/PCCustomization';

class PCBuilder extends Component {
    state = {
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