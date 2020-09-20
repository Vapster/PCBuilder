import React from 'react';
import classes from './Speclist.module.css'
import Box from '../../../../components/Box/Box'

const Speclist = (props) => {
    let sum = 0
    
    return (
        <Box title="Specifications">
            {Object.keys(props.specs).map((hardware) => {
                sum = sum +props.specs[hardware][1];
                return (<div className={classes.specLine} key={hardware}><div><b>{hardware}:</b> <span className={classes.description}>{props.specs[hardware][2]}</span></div><span className={classes.price}>{"$ "+props.specs[hardware][1]}</span></div>)
            })}
            { props.printSum ? <br/> : null}
            { props.printSum ? <div className={classes.sum}><b>Total sum: </b>${sum}</div> : null}
            {props.children}
        </Box>
        // <div className={classes.contain}>
        //     <p className={classes.containHead}><strong>Specifications</strong></p>
        //     {Object.keys(props.specs).map((hardware) => {
        //         sum = sum +props.specs[hardware][1];
        //         return (<div className={classes.specLine} key={hardware}><div><b>{hardware}:</b> <span className={classes.description}>{props.specs[hardware][2]}</span></div><span className={classes.price}>{"$ "+props.specs[hardware][1]}</span></div>)
        //     })}
        //     { props.printSum ? <br/> : null}
        //     { props.printSum ? <div className={classes.sum}><b>Total sum: </b>${sum}</div> : null}
        //     {props.children}
        // </div>
    )
}

export default Speclist;