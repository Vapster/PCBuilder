import React, { Component } from 'react';
import Aux from '../../../hoc/auxiliry';

class PCCustomization extends Component {
    state = {  }
    render() { 
        return (
            <Aux>
                <input type="radio" id="male" name="gender" value="male"/>
                <label for="male">Male</label><br/>
                <input type="radio" id="female" name="gender" value="female"/>
                <label for="female">Female</label>
            </Aux>
        );
    }
}
 
export default PCCustomization;