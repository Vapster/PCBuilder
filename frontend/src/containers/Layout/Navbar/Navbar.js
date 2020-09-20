import React from 'react';
import 'bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import classes from './Navbar.module.css'

const Navbar = (props) => {
    return (
        <header className="header_area">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/ef">PC Builder</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/abc">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/xyz">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/idl">Support</a>
                    </li>
                    <li className="nav-item my-lg-0">
                        <a className="nav-link" href="/sdf">About us</a>
                    </li>
                </ul>
                <div className="my-2 my-lg-0">
                    <ul className="navbar-nav">
                        <li className="nav-item my-lg-0">
                            <a className="nav-link" href="/ef">Login</a>
                        </li>
                        <li className="nav-item my-lg-0"><FontAwesomeIcon icon={faShoppingCart} className="mx-2" size="2x"/></li>
                        <li className="nav-item my-lg-0"><FontAwesomeIcon icon={faUser} className="mx-2" size="2x"/></li>
                    </ul>
                    
                    
                </div>
            </div>
            </nav>
        </header>
    );
}

export default Navbar;