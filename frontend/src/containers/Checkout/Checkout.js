import React, {Component} from 'react';
import Speclist from '../PCBuilder/PCSpecifications/Speclist/Speclist'
import { connect } from 'react-redux';

class Checkout extends Component{
    state = {

    }

    render(){
        // console.log(this.props.specs)
        return(
            <React.Fragment>
                <Speclist specs={this.props.specs}>
                </Speclist>
                <form>
                    {/* <input className={} name="" type="" placeholder=""></input> */}
                </form>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return ({
        specs: state.Specifications
    })
}

export default connect(mapStateToProps, null)(Checkout);