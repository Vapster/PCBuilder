import React, { Component } from 'react';
import Aux from '../../hoc/auxiliry';

class Layout extends Component {
    state = {  }
    render() { 
        return (
        <Aux>
            <div>Navbar, sidebar, icon</div>
            {this.props.children}
        </Aux>
        );
    }
}
 
export default Layout;