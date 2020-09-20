import React, { Component } from 'react';
import Aux from '../../hoc/auxiliry';
import PCCustomization from './PCCustomization/PCCustomization';
import Axios from 'axios';
import PCSpecifications from './PCSpecifications/PCSpecifications';
import Case from '../../assets/images/case1.jpg'
import classes from './PCBuilder.module.css'

class PCBuilder extends Component {
    state = {
        customMenu: {},
        specifications:{}
    }

    setInitialSpecs(){
        const settingInitialSpecifications = {}
        Object.keys(this.state.customMenu).map((hardware)=>{
            const firstModelKey = Object.keys(this.state.customMenu[hardware])[0];
            settingInitialSpecifications[hardware] = [firstModelKey, this.state.customMenu[hardware][firstModelKey][0], this.state.customMenu[hardware][firstModelKey][1]];
            return null;
        });
        this.setState({specifications: settingInitialSpecifications});
    }

    radioButtonChangeHandler = (event, hardware)=>{
        let specs = {...this.state.specifications};
        specs[hardware] = [event.target.value, this.state.customMenu[hardware][event.target.value][0], this.state.customMenu[hardware][event.target.value][1]];
        this.setState({specifications: specs});
    }

    componentDidMount(){

    	Axios({
            url: 'http://localhost:8080/getall',
            //headers: { 'Content-Type': 'application/json'},
        	method: 'GET'
        }).then((res) => {
            this.setState({customMenu: res.data});
            this.setInitialSpecs();
        })
        .catch((e) => {
            console.log(e)
        	console.log("error in /getall request");
        })
    }

    render() {
        // console.log(this.props)
        return (
            <Aux>
                <div className="container row no-gutters">
                    <div className=" col-sm-6 col-xs-12">
                        <div className="row">
                            {Object.keys(this.state.specifications).length ? <img className={classes.case} alt="case" src={Case}></img> : null}
                        </div>
                        <div className="row">
                            <div className="col">
                                {Object.keys(this.state.specifications).length ? <PCCustomization menu={this.state.customMenu} specs={this.state.specifications} onRadioButtonChange={this.radioButtonChangeHandler}/>: null}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xs-12">
                        {Object.keys(this.state.specifications).length ? <PCSpecifications specs={this.state.specifications}/>: null}
                    </div>
                </div>
            </Aux>
        );
    }
}
 
export default PCBuilder;