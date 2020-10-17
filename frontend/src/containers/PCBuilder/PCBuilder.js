import React, { Component } from 'react';
import Aux from '../../hoc/auxiliry';
import PCCustomization from './PCCustomization/PCCustomization';
import PCSpecifications from './PCSpecifications/PCSpecifications';
import classes from './PCBuilder.module.css'
import { connect } from 'react-redux';
import AxiosInstance from '../../axiosInstance'
import queryString from 'query-string'

class PCBuilder extends Component {
    state = {
        listOfModels: null,
        components: null,
        specifications: null,
        query: {},
        imgName: "case1.jpg"
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
        const finalSpecs = {
            components: settingInitialSpecifications,
            metadata: {
                model: this.state.model
            }
        }
        this.setState({specifications: finalSpecs});
    }

    radioButtonChangeHandler = (event, hardware)=>{
        let specs = {...this.state.specifications};
        specs["components"][hardware] = [event.target.value, this.state.components[event.target.value][0], this.state.components[event.target.value][1]];
        this.setState({specifications: specs});
    }

    constructor(props){
        super(props);
        this.state.specifications = this.props.specs;
        // this.state.components = this.props.components;
        // this.state.listOfModels = this.props.listOfModels;
        const query = queryString.parse(window.location.search)
        if (query.model){
            this.state.model = query.model
        }else{
            this.state.model = "budget"
        }
        if ( this.state.specifications && this.state.model !== this.state.specifications.metadata.model){
            this.state.specifications = null
        }
    }

    componentDidMount(){

        const url = "/desktops/" + this.state.model + ".json";
        
        AxiosInstance.get(url).then((res1) => {
            AxiosInstance.get("/components.json").then((res) => {
                this.setState({components: res.data, listOfModels: res1.data.components, imgName: res1.data.description.img})
                if (!this.state.specifications){
                    this.setInitialSpecs()
                }
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

    render() {

        const images = require.context('../../assets/images/case', true);
        let img = images('./' + this.state.imgName);

        let page = <div></div>
        
        const containerClasses = ["container", "row", "no-gutters", classes.toCenter]

        if (this.state.components && this.state.listOfModels && this.state.specifications){
            page = 
            <div className={containerClasses.join(" ")}>
                <div className=" col-sm-6 col-xs-12">
                    <div className="row">
                        {this.state.specifications ? <img className={classes.case} alt="case" src={img}></img> : null}
                    </div>
                    <div className="row">
                        <div className="col">
                            {this.state.specifications ? <PCCustomization listOfModels={this.state.listOfModels} components={this.state.components} specs={this.state.specifications.components} onRadioButtonChange={this.radioButtonChangeHandler}/>: null}
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xs-12">
                    {this.state.specifications ? <PCSpecifications components={this.state.components} specs={this.state.specifications.components} submitSpecs={() => this.props.submitSpecs(this.state.specifications)}/>: null}
                </div>
            </div>
        }
        return (
            <Aux>
                {page}
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