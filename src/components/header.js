import React from 'react';
import '../App.css';
import logo from "../logo.svg";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

function Header() {
    return(
        <header className="App-header">
            <Router>

                <Link to="/home">
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>

                <nav className="main-nav">
                    <ul>
                        <li className="nav-item">
                            <Link to="/contribute">Contribute</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </Router>

        </header>
    )
}

export default Header;