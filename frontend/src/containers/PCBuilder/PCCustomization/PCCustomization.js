import React, { Component } from 'react';
import Collapse from './Collapse/Collapse';

class PCCustomization extends Component {
    state = {  }
    render() {

        return (
            <div className="row">
                <div className="accordion" id="collapseofhardwares">
                {Object.keys(this.props.menu).map((hardware)=>{
                    return (
                        <Collapse key={hardware} hardware={hardware} specs={this.props.specs} menu={this.props.menu} onRadioButtonChange={this.props.onRadioButtonChange} />
                    );
                })}
                </div>
            </div>
        );
    }
}

export default PCCustomization;