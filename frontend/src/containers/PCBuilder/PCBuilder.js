import React, { Component } from 'react';
import Aux from '../../hoc/auxiliry';
import PCData from './PCData/PCData';
import PCCustomization from './PCCustomization/PCCustomization';
import Axios from 'axios';

class PCBuilder extends Component {
    state = {
        customMenu: {},
        specifications:{}
    }

    setInitialSpecs(){
        const settingInitialSpecifications = {}
        Object.keys(this.state.customMenu).map((hardware)=>{
            const firstModelKey = Object.keys(this.state.customMenu[hardware])[0];
            settingInitialSpecifications[hardware] = firstModelKey;
        });
        this.setState({specifications: settingInitialSpecifications});
    }

    radioButtonChangeHandler = (event, hardware)=>{
        console.log(hardware, event.target.value)
        let specs = {...this.state.specifications};
        specs[hardware] = event.target.value;
        this.setState({specifications: specs});
    }

    componentDidMount(){

    	Axios({
        	url: 'http://localhost:8080/getall',
        	method: 'GET'
        }).then((res) => {
            this.setState({customMenu: res.data});
            this.setInitialSpecs();
        })
        .catch(() => {
        	console.log("error in /getall request");
        })
    }

    render() {
        return (
            <Aux>
                <div className="container row no-gutters">
                    <div className=" col-sm-6 col-xs-12">
                        <div className="row">PC Image</div>
                        <div className="row">
                            <div className="col">
                                <PCCustomization menu={this.state.customMenu} specs={this.state.specifications} onRadioButtonChange={this.radioButtonChangeHandler}/>
                            </div>
                            <PCData hardware="CPU" model="i58G" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-xs-12">PC Specifications</div>
                </div>
            </Aux>
        );
    }
}
 
export default PCBuilder;