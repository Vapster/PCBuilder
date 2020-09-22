import React, { Component } from 'react';
import classes from './Products.module.css'
import Axios from 'axios';
import Card from '../../components/Card/Card'

class Products extends Component{

    state = {
        cats: []
    }

    componentDidMount() {
        Axios({
            url: 'http://localhost:8080/getComputerCat',
            //headers: { 'Content-Type': 'application/json'},
            method: 'GET'
        }).then((res) => {
            this.setState({cats: res.data});
        })
        .catch((e) => {
            console.log(e)
            console.log("error in /getComputerCat request");
        })
    }

    render(){
        // console.log(this.state.cats)
        return(
            <div>
                <div className={classes.cardsContainer}>
                    {this.state.cats.map( cat => { return (<Card key={cat.name} className="" title={cat.name} price={cat.val} img={cat.img} des={cat.description} />) })}
                </div>
            </div>
        )
    }
}

export default Products;