import React from 'react';
import '../App.css';
import {
    Link
} from "react-router-dom";



function About() {
    return(
        <main className="about">
            <p>Let’s come together while we need to stay apart.</p>

            <p>This project is a collaborative community art project capturing and overlaying the anxieties, hopes, dreams, and fears that our community is feeling in the form of poetry, photos, art, videos, text, anything you can imagine.</p>

            <p>Add your feelings to the fabric of this community mural and connect with the  contributions others share.</p>

            <Link className="button" to="/contribute">Share your experience</Link>
        </main>
    )
}

export default About;