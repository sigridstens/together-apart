import React from 'react';
import '../App.css';
import {Link, withRouter} from "react-router-dom";
import logo from "../logo.svg";


const Header = withRouter(props => {
    const { location } = props;
    console.log(location.pathname);


    return(
        <header className="App-header">

            <Link to="/">
                <img src={logo} className="App-logo" alt="logo" />
            </Link>

            <nav className="main-nav">
                <ul>
                    <li className={`nav-item ${location.pathname === '/contribute' ? 'nav-focus' : ''}`}>
                        <Link to="/contribute">Contribute</Link>
                    </li>
                    <li className={`nav-item ${location.pathname === '/about' ? 'nav-focus' : ''}`}>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
});

export default Header;