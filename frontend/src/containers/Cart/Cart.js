import React, { Component } from 'react';
// import Box from '../../components/Box/Box';
import Order from './Order/Order'
import { connect } from 'react-redux'
import Button from '../../components/Button/Button'

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


    // ****************************

        ////////        add specs to orders[0].components

    // ****************************

    render(){
        console.log(this.props.specs)
        return(
            <React.Fragment>
                <div>
                    <div>Your Orders</div>
                    {this.state.orders.map((order) => <Order order={order} specs={this.props.specs} />)}
                </div>
                <div>
                    <Button text="Checkout" />
                </div>
            </React.Fragment>
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