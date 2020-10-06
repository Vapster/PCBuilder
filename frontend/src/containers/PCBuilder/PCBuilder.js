import React, { Component } from 'react';
import Aux from '../../hoc/auxiliry';
import PCCustomization from './PCCustomization/PCCustomization';
import PCSpecifications from './PCSpecifications/PCSpecifications';
import Case from '../../assets/images/case/case1.jpg'
import classes from './PCBuilder.module.css'
import { connect } from 'react-redux';
import AxiosInstance from '../../axiosInstance'

class PCBuilder extends Component {
    state = {
        listOfModels: {},
        components: {},
        specifications:{}
    }

    setInitialSpecs(){

        const settingInitialSpecifications = {}
        // console.log("this.state.listOfModels", this.state.listOfModels)
        Object.keys(this.state.listOfModels).map((hardware)=>{
            // console.log("from loop", hardware)
            const firstModelKey = this.state.listOfModels[hardware][0] //Object.keys(this.state.customMenu[hardware])[0];
            settingInitialSpecifications[hardware] = [firstModelKey, this.state.components[firstModelKey][0], this.state.components[firstModelKey][1]];
            return null;
        });
        // console.log("new Specs", settingInitialSpecifications)
        this.setState({specifications: settingInitialSpecifications});
    }

    radioButtonChangeHandler = (event, hardware)=>{
        let specs = {...this.state.specifications};
        specs[hardware] = [event.target.value, this.state.components[event.target.value][0], this.state.components[event.target.value][1]];
        this.setState({specifications: specs});
    }

    constructor(props){
        super(props);
        this.state.specifications = this.props.specs;
        this.state.components = this.props.components;
        this.state.listOfModels = this.props.listOfModels;
    }

    componentDidMount(){

        if (Object.keys(this.state.components).length || Object.keys(this.state.listOfModels).length){
            console.log("components are already stored.")
            return 0
        }
        else{
            AxiosInstance.get("/desktops/budget/components.json").then((res1) => {
                AxiosInstance.get("/components.json").then((res) => {
                    this.setState({components: res.data, listOfModels: res1.data})
                    this.setInitialSpecs()
                    this.props.submitLOMO(this.state.listOfModels)
                    this.props.submitComp(this.state.components)
                }).catch((e) => {
                    console.log("error at /components.json")
                    console.log(e)
                })
            }).catch((e) => {
                console.log("error at /desktops/budget.json")
                console.log(e)
            })
        }
    }

    render() {
        console.log("props.specs", this.state.specifications)
        const containerClasses = ["container", "row", "no-gutters", classes.toCenter]
        return (
            <Aux>
                <div className={containerClasses.join(" ")}>
                    <div className=" col-sm-6 col-xs-12">
                        <div className="row">
                            {Object.keys(this.state.specifications).length ? <img className={classes.case} alt="case" src={Case}></img> : null}
                        </div>
                        <div className="row">
                            <div className="col">
                                {Object.keys(this.state.specifications).length ? <PCCustomization listOfModels={this.state.listOfModels} components={this.state.components} specs={this.state.specifications} onRadioButtonChange={this.radioButtonChangeHandler}/>: null}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xs-12">
                        {Object.keys(this.state.specifications).length ? <PCSpecifications components={this.state.components} specs={this.state.specifications} submitSpecs={() => this.props.submitSpecs(this.state.specifications)}/>: null}
                    </div>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return ({
        specs: state.Specifications,
        components: state.components,
        listOfModels: state.listOfModels
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        submitSpecs: (specs) => dispatch({ type: "ADD_SPECS", specs }),
        submitComp: (components) => dispatch({ type: "ADD_COMP", components }),
        submitLOMO: (listOfModels) => dispatch({ type: "ADD_LOMO", listOfModels })
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PCBuilder);