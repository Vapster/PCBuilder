import React, { Component } from 'react';
// import Box from '../../components/Box/Box';
import Order from './Order/Order'
import { connect } from 'react-redux'
import Button from '../../components/Button/Button'
import classes from './cart.module.css'

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
        ],
        tempSpecs: null
        // *********************** remove tempSpecs and put everything into orders
    }


    // ****************************

        ////////        add specs to orders[0].components

    // ****************************

    constructor(props){
        super(props)
        if(this.props.specs){
            this.state.tempSpecs = this.props.specs.components
        }
    }

    render(){

        const emptyCart = <div className={classes.empty}> Your cart is empty. Checkout our Products.</div>
        const productsButton = <div className={classes.empty}><br/><Button text="Products" clicked={ () => this.props.history.push({ pathname: '/Products' })} /> </div>

        return(
            <React.Fragment>
                <div>
                    <div>Your Orders</div>
                    { this.state.tempSpecs ? this.state.orders.map((order) => <Order key={order.des.name} order={order} specs={this.state.tempSpecs} />) : emptyCart}
                </div>
                <div>
                    { this.state.tempSpecs ? <Button text="Checkout" /> : productsButton}
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