import React, { Component } from 'react';
import Aux from '../../../hoc/auxiliry';

class PCCustomization extends Component {
    state = {  }
    render() { 
        return (
            <Aux>
                <input type="radio" id="male" name="gender" value="male"/>
                <label htmlFor="male">Male</label><br/>
                <input type="radio" id="female" name="gender" value="female"/>
                <label htmlFor="female">Female</label>
            </Aux>
        );
    }
}
 
export default PCCustomization;