import React, { useState } from 'react'

function DataProvider({ frameworks }) {
    const list = frameworks.map(frame => {
        return frame.githubStars !== null ? (
            <div className="bar-content" key={frame.id}>
                <span className="brand">{frame.id}</span>
                <span className="bar">{frame.githubStars}</span>
            </div>
        ) : (
            <div>Error fetching data</div>
        )
    })
    return (
        <section className="chart">
            { frameworks.length &&  list }
        </section>
    )
}

export default DataProvider
