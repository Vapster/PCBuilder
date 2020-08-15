import React from 'react';

const PCSpecifications = (props) => {

    let sum = 0;

    return(
        <React.Fragment>
            {Object.keys(props.specs).map((hardware) => {
                sum = sum +props.specs[hardware][1];
                return (<div key={hardware}>{hardware}: {props.specs[hardware][2]}, {props.specs[hardware][1]}</div>)
            })}
            <div>Total sum: {sum}</div>
        </React.Fragment>
    );
}

export default PCSpecifications;