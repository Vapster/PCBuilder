import React from 'react';
import Box from '../../../components/Box/Box'
import classes from './Order.module.css'

const Order = (props) => {
    
    const images = require.context('../../../assets/images/case', true);
    let img = images('./' + props.order.des.img);

    return (
        <Box title={props.order.des.name}>
            <img className={classes.image} src={img} alt="order1" />
            <div>{props.order.des.val}</div>
        </Box>
    )
}

export default Order;