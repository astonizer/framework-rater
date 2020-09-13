import React, { useState, useEffect } from 'react'
import data from '../../data/data.json'

function DataProvider(props) {
    const [frames, setFrames] = useState([]);
    //const lang = props.match.params.lang;
    const langData = []
    data.map(aData => {
        aData.map(data => {
            langData.push({ id: data.id, user: data.user, repo: data.repo })
        })
    })
    useEffect(() => { 
        setFrames([...frames, ...langData])
    }, [])
    return (
        <div className='rater-body'>
            { frames.length && frames.map(frame => {
                return (
                    <div key={frame.id} >{frame.user}</div>
                )
            })}
        </div>
    )
}

export default DataProvider
