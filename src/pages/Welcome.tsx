import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Welcome.css"

function Welcome() {
    return (
        <div className='welcomeBody'>
            <h1 className='welcomeTitle'>Welcome to my Weather React application</h1>
            <div className='welcomeInfo'>
                <p>
                    This is a <b> COUNTRY WEATHER APPLICATION </b> created as part of my React JS Training.
                </p>
                <ul className='welcomeFeatures'>
                    Some features of this project are
                    <li>
                        Enter a valid string to fetch details of corresponding countries
                    </li>
                    <li>
                        By clicking on the capital name, you can fetch details about the weather condition in the capital city
                    </li>
                </ul>
            </div>
            <Link to="/home">
                <div className="homeButtonBox">
                    <div className='homeButton'>
                        Go to Home Page
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Welcome