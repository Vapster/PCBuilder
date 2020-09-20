import React, {Component} from 'react';
import Speclist from '../PCBuilder/PCSpecifications/Speclist/Speclist'

class Checkout extends Component{
    state = {

    }

    render(){
        console.log(this.props)
        return(
            <Speclist specs={this.props.history.location.state}>
            </Speclist>
        )
    }
}

export default Checkout;