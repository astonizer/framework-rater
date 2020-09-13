import React, { useState } from 'react'

function Rater(props) {
    const [frames, setFrames] = useState({});
    console.log(props.match.params.lang)
    return (
        <div className='rater-body'>
            This is the rater
        </div>
    )
}

export default Rater
