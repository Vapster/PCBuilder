import React, { Component } from 'react';
import Collapse from './Collapse/Collapse';
import classes from './PCCustomization.module.css'
// import Box from '../../../components/Box/Box'

class PCCustomization extends Component {
    state = {  }
    render() {

        const classesforrow = ["row", "accordion", classes.contain]

        return (
            // <Box title="Customization">
            //     <div className="row accordion">
            //         {Object.keys(this.props.menu).map((hardware)=>{
            //             return (
            //                 <Collapse key={hardware} hardware={hardware} specs={this.props.specs} menu={this.props.menu} onRadioButtonChange={this.props.onRadioButtonChange} />
            //             );
            //         })}
            //     </div>
            // </Box>
            <div className={classesforrow.join(" ")} id="collapseofhardwares">
                <p className={classes.containHead}>Customization</p>
                    {Object.keys(this.props.menu).map((hardware)=>{
                        return (
                            <Collapse key={hardware} hardware={hardware} specs={this.props.specs} menu={this.props.menu} onRadioButtonChange={this.props.onRadioButtonChange} />
                        );
                    })}
            </div>
        );
    }
}

export default PCCustomization;