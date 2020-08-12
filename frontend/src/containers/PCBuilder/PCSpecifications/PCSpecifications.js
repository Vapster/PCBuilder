import React from 'react';

const PCSpecifications = (props) => {
    return(
        <React.Fragment>
            {Object.keys(props.specs).map((hardware) => {
                return (<div key={hardware}>{hardware}: {props.specs[hardware]}</div>)
            })}
        </React.Fragment>
    );
}

export default PCSpecifications;