import React from 'react'
import Icons from './Icons/Icons'

const Header = () => {
    return (
        <div className="navbar">
            <Icons />
            <div className="heading">
                <h1 className='title'>Framework Rater</h1>
                <div className="heading_content">
                    <span className="heading_details">You can get the details about the famous open source frameworks here.</span>
                </div>
            </div>
        </div>
    )
}

export default Header