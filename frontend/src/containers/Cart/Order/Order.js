import React from 'react';
import Box from '../../../components/Box/Box'
import classes from './Order.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretRight, faCaretLeft} from '@fortawesome/free-solid-svg-icons'

const Order = (props) => {
    
    const images = require.context('../../../assets/images/case', true);
    let img = images('./' + props.order.des.img);

    return (
        <Box title={props.order.des.name}>
            <img className={classes.image} src={img} alt="order1" />
            {Object.keys(props.specs).map( (hardware, index) => { return (<div key={index} className={classes.li}>{props.specs[hardware][2]}</div>)} )}
            <div>Subtotal: {props.order.des.val}</div>
            <div className={classes.quantity}><span className={classes.text}>Quantity: </span><FontAwesomeIcon icon={faCaretLeft} className="mx-2" size="2x"/><span className={classes.text}>{1}</span><FontAwesomeIcon icon={faCaretRight} className="mx-2" size="2x"/></div>
        </Box>
    )
}

export default Order;