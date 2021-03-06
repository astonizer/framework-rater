import React from 'react'

const Icons = (props) => {
    const handleGithub = (e) => {
        e.preventDefault();
        props.history.push('https://github.com/astonizer/framework-rater')
    }
    return (
        <div className='icons'>
            <img src={'https://raw.githubusercontent.com/rdimascio/icons/master/icons/github.svg'} alt="github" width='25' align='right' />
            <img onClick={handleGithub} src={'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/home.svg'} alt="home" width='25' align='right' />
        </div>
    )
}

export default Icons
