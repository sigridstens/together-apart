import React from 'react';
import './App.css';
import Footer from './components/footer.js';
import Home from './components/home.js';
import Contribute from './components/contribute.js';
import About from './components/about.js';
import Header from './components/header.js';
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

        <Header />

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
