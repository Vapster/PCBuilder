import React from 'react';
import classes from './PCSpecifications.module.css'
import Button from '../../../components/Button/Button'
import { withRouter } from 'react-router-dom';
import Speclist from './Speclist/Speclist';

const PCSpecifications = (props) => {
    
    const handleCheckout = () => {
        props.history.push({
            pathname: '/checkout',
            state: props.specs}
        )
    } 

    return(
        <Speclist printSum specs={props.specs}>
            <div className={classes.button}>
                <Button text="Checkout" clicked={handleCheckout}></Button>
            </div>
        </Speclist>
    );
}

export default withRouter(PCSpecifications);