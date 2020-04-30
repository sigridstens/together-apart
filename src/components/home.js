import React from 'react';
import '../App.css';
import livestream from "../livestream-placeholder.jpg";
import playicon from "../play-icon.png";



function Home() {
    return(
        <main className="home">
            <img src={livestream} alt="Livestream of the collaborative Together Apart mural"/>
            <img className="play-icon" src={playicon} alt="play"/>
        </main>
    )
}

export default Home;