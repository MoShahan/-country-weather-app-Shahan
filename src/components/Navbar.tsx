import React from 'react'
import { NavbarType } from '../types';
import FormInput from './FormInput';
import "../styles/Navbar.css"
import image from "../images/weather-app-icon.png"

export default function Navbar({ title, searchText, handleChange }: NavbarType) {

    console.log("Navbar Called")

    return (
        <nav className='navbar'>
            <div className="nav-heading">
                <img className="weather-icon" src={image} />
                <h1>{title}</h1>
            </div>
            <FormInput
                searchText={searchText}
                onChange={handleChange}
                id="searchInput"
            >
                Search
            </FormInput>
        </nav>
    )
}
