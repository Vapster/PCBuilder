import React from 'react';
import 'bootstrap';

const Collapse = (props) => {

    let headerid = `header${props.hardware}`;
    let collapseid = `collapse${props.hardware}`;
    // models={this.props.menu[hardware]} selectedModel={this.props.specs[hardware][0]}
    return(
            <div className="card">
                <div className="card-header" id={headerid}>
                    <div className="mb-0">
                        <div className="btn-link" type="button" data-toggle="collapse" data-target={`#${collapseid}`} aria-expanded="true" aria-controls={collapseid}>
                            <div className="d-flex flex-row justify-content-between">
                                <div className="">{props.hardware}:&nbsp;</div> <div className="">{props.specs[props.hardware][2]}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id={collapseid} onChange={(event)=>{props.onRadioButtonChange(event, props.hardware)}} className="collapse" aria-labelledby={headerid} data-parent='#collapseofhardwares'>
                    {Object.keys(props.menu[props.hardware]).map((model)=>{return (
                        <div key={model} className="card-body">
                            <div className="row">
                                <input type="radio" id={model} name={props.hardware} value={model} checked={model === props.specs[props.hardware][0]}/>
                                <label htmlFor={model}>{props.menu[props.hardware][model][1]} {props.menu[props.hardware][model][0] -  props.specs[props.hardware][1]}</label><br/>
                            </div>
                        </div>
                    );})}
                </div>
            </div>
    );
}

export default Collapse;