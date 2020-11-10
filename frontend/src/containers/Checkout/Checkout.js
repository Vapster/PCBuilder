import React, {Component} from 'react';
// import Speclist from '../PCBuilder/PCSpecifications/Speclist/Speclist'
import { connect } from 'react-redux';
import Button from '../../components/Button/Button'
import classes from './Checkout.module.css'
import Box from '../../components/Box/Box'
import Box1 from '../../assets/images/box.jpg'
import Box2 from '../../assets/images/expressBox.jpg'
import Axios from '../../axiosform'
import AxiosInstance from '../../axiosInstance'
import Order from '../Cart/Order/Order'

class Checkout extends Component{
    state = {
        add: {
            street1: "",
            street2: "",
            state: "",
            country: "",
            pincode: ""
        },
        fastDel: false,
        tax: 13,
        components: null,
        orders: []
    }

    onDelivaryChange = (event) => {
        if (event === "express"){
            this.setState({fastDel: true})
        }else{
            this.setState({fastDel: false})
        }
    }



    componentDidMount(){
        if(!this.props.components){
            AxiosInstance.get("/components.json").then((res) => {
                this.setState({components: res.data})
            }).catch((e) => {
                console.log("error at /components.json")
            })
        }else{
            this.setState({components: this.props.components})
        }

        if(this.props.token){
            Axios({
                method: 'get',
                url: '/cart',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.props.token
                }
            })
            .then((response) => {
                this.setState({orders: response.data})
            })
            .catch((error) => {
                console.log(error)
            });
        }else{
            if(this.props.specs){
                this.setState({orders: [this.props.specs]})
                console.log(this.props.specs)
            }
        }

    }

    render(){

        let sum = 0
        const emptyCart = <div className={classes.empty}>Please select your orders.</div>
        // console.log(this.props.specs)

        let standardClasses = []
        let expressClasses = []

        if (this.state.fastDel){
            expressClasses.push(classes.selected)
            standardClasses = []
        }else{
            standardClasses.push(classes.selected)
            expressClasses = []
        }

        return(
            <React.Fragment>
                {/* <Box title="Orders"></Box> */}
                <div>Orders:</div>
                { this.state.orders.length > 0 && this.state.components ? this.state.orders.map((order, index) => <Order key={index} order={order} components={this.state.components} />) : emptyCart}
                <Box title="Shipping Address">
                    <form>
                        <input className={classes.text} name="name" type="text" placeholder="Full Name"></input>
                        <input className={classes.text} name="email" type="email" placeholder="Email ID"></input>
                        <input className={classes.text} name="street1" type="text" placeholder="Street 1"></input>
                        <input className={classes.text} name="street2" type="text" placeholder="Street 2"></input>
                        <input className={classes.text} name="city" type="text" placeholder="City"></input>
                        <input className={classes.text} name="state" type="text" placeholder="State"></input>
                        <input className={classes.text} name="country" type="text" placeholder="Country"></input>
                        <input className={classes.text} name="zipcode" type="text" placeholder="Zipcode"></input>
                    </form>
                </Box>
                <Box title="Delivery">
                    <div className={standardClasses.join(" ")} onClick={() => this.onDelivaryChange("standard")} ><img className={classes.box} src={Box1} alt="Standard Delivery" /> Standard Delivery </div>
                    <div className={expressClasses.join(" ")} onClick={() => this.onDelivaryChange("express")}><img className={classes.box} src={Box2} alt="Express Delivery" /> Express Delivery </div>
                </Box>
                <Box title="Payment">
                    <div>Billing address</div>
                    <div>Card info</div>
                </Box>
                <Box title="Billing">
                    <div>Subtotal: <span>{sum}</span></div>
                    <div>Discount: <span></span></div>
                    <div>Shipping: <span></span></div>
                    <div>Tax: <span></span></div>
                    <div>Total: <span></span></div>
                    <Button text="Buy" />
                </Box>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return ({
        specs: state.Specifications,
        token: state.token,
        components: state.components
    })
}

export default connect(mapStateToProps, null)(Checkout);