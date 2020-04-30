import React from 'react';
import './App.css';
import Footer from './components/footer.js';
import Home from './components/home.js';
import Contribute from './components/contribute.js';
import About from './components/about.js';
import {
    BrowserRouter as Router,
    Switch,
    Route, Link,
} from "react-router-dom";
import logo from "./logo.svg";


function App() {
  return (
    <div className="App">
        <Router>

            <header className="App-header">

                <Link to="/">
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

            </header>

\           <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/contribute">
                    <Contribute />
                </Route>

                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </Router>

        <Footer />

    </div>
  );
}

export default App;
