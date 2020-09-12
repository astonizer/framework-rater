import React from 'react';

function Home() {
    return(
        <div className="home">
            <span>Select your programming language</span>
            <div className="options">
                <a href="/javascript" className="link1">Javascript</a>
                <a href="/python" className="link1">Python</a>
                <a href="/php" className="link1">PHP</a>
                <a href="/java" className="link2">Java</a>
                <a href="/css" className="link2">CSS</a>
                <a href="/ruby" className="link2">Ruby</a>
            </div>
        </div>
    );
}

export default Home;
