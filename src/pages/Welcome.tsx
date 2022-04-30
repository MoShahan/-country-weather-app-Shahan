import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Welcome.css"

function Welcome() {
    return (
        <div>
            <h1 className='welcomeTitle'>Welcome to my Weather React application</h1>
            <Link to="/home">
                <div className="homeButtonBox">
                    {/* <span className='homeButtonText'>
                        LETS GO
                    </span> */}
                    <div className='homeButton'>
                        Go to Home Page
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Welcome