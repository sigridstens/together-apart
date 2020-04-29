import React from 'react';
import './App.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Home from './components/home.js';
import Contribute from './components/contribute.js';
import About from './components/about.js';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
        <Router>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/contribute" component={Contribute} />
            <Route exact path="/about" component={About} />
        </Router>

        <Footer />

    </div>
  );
}

export default App;
