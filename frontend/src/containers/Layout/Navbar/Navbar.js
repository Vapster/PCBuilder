import React from 'react';
import 'bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = (props) => {
    return (
        <header className="header_area">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">PC Builder</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Products</a>
                </li>
                <li Name="nav-item">
                    <a className="nav-link" href="#">Support</a>
                </li>
                <li className="nav-item my-lg-0">
                    <a className="nav-link" href="#">About us</a>
                </li>
                </ul>
                <div className="my-2 my-lg-0">
                    <ul className="navbar-nav">
                        <li className="nav-item my-lg-0">
                            <a className="nav-link" href="#">Login</a>
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