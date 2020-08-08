import React, { Component } from 'react';
import Aux from '../../../hoc/auxiliry';
import Collapse from './Collapse/Collapse';

class PCCustomization extends Component {
    state = {  }
    render() {

        return (
            <Aux>
                <div className="row">
                    <input type="radio" id="male" name="gender" value="male"/>
                    <label htmlFor="male">Male</label><br/>
                </div>
                <div className="row">
                    <input type="radio" id="female" name="gender" value="female"/>
                    <label htmlFor="female">Female</label>
                </div>
                <div className="row">
                    <div className="accordion" id="collapseofhardwares">
                    {Object.keys(this.props.menu).map((hardware)=>{
                        return (
                            <Collapse key={hardware} hardware={hardware} models={this.props.menu[hardware]} />
                        );
                    })}
                    </div>
                </div>
            </Aux>
        );
    }
}
 
export default PCCustomization;