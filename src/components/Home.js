import React, { useState } from 'react';
import axios from 'axios'
import data from '../data/data.json'
import Rater from './rater/Rater'

const Home = () => {
    const [frameworks, setFrameworks] = useState([])
    const handleChange = (e) => {
        const frames = data[e.target.id]   //Array of framework objects
        try {
            let dupFrameworks = frames
            let maxStars = 0
            frames.forEach(async frame => {
                let result = await axios(`https://api.github.com/repos/${frame.user}/${frame.repo}`)
                let stars = result.data.stargazers_count
                frame.githubStars = stars
            })
            setFrameworks(dupFrameworks)
        } catch(err) {
            console.log(err)
        }
    }
    return(
        <div className="home">
            <span>Select your prefered language</span>
            <div className="options">
                <button onClick={handleChange} id='javascript'>Javascript</button>
                <button onClick={handleChange} id='python'>Python</button>
                <button onClick={handleChange} id='php'>PHP</button>
                <button onClick={handleChange} id='java'>Java</button>
                <button onClick={handleChange} id='css'>CSS</button>
                <button onClick={handleChange} id='ruby'>Ruby</button>
            </div>
            <Rater frameworks={frameworks} />
        </div>
    );
}

export default Home;
