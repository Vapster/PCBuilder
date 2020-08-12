import React from 'react';
import 'bootstrap';

const Collapse = (props) => {

    let headerid = `header${props.hardware}`;
    let collapseid = `collapse${props.hardware}`;

    return(
            <div className="card">
                <div className="card-header" id={headerid}>
                    <h2 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#${collapseid}`} aria-expanded="true" aria-controls={collapseid}>
                        {props.hardware}
                        </button>
                    </h2>
                </div>

                <div id={collapseid} onChange={(event)=>{props.onRadioButtonChange(event, props.hardware)}} className="collapse" aria-labelledby={headerid} data-parent='#collapseofhardwares'>
                    {Object.keys(props.models).map((model)=>{return (
                        <div key={model} className="card-body">
                            <div className="row">
                                <input type="radio" id={model} name={props.hardware} value={model} checked={model === props.selectedModel}/>
                                <label htmlFor={model}>{model}</label><br/>
                            </div>
                        </div>
                    );})}
                </div>
            </div>
    );
}

export default Collapse;