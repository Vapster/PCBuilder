import React, { Component } from 'react';
// import Box from '../../components/Box/Box';
import Order from './Order/Order'
import { connect } from 'react-redux'

class Cart extends Component{
    state = {
        orders:[
            {
                des: {
                    name: "Budget Desktop",
                    val: 700,
                    img: "case1.jpg"
                },
                components:{}
            }
        ]
    }

    render(){
        console.log(this.props.specs)
        return(
            <div>
                <div>Your Orders</div>
                {this.state.orders.map((order) => <Order order={order} />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        specs: state.Specifications
    })
}

const mapDispatchToProps = (Dispatch) => {
    return({})
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);