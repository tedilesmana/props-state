import React, {Component} from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

class Nav extends Component{
    render(){
        return(
        <div className="container warna" id="navbar">
            <nav className="navbar navbar-expand-lg navbar-light warna">
                <a className="navbar-brand" to=""><img src={require('../logo/logo.png')} alt="" width="180" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
            <Router>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="">PROMO</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="">PROMO</Link>
                                <Link className="dropdown-item" to="">Partnership</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown1" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                <Link className="dropdown-item" to="">Action</Link>
                                <Link className="dropdown-item" to="">Another action</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="">Something else here</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="" className="nav-link">PUSAT BANTUAN</Link>
                        </li>
                    </ul>
                </div>
            </Router>
            </nav>
        </div>
        )
    }
}

export default Nav;