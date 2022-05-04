import Navbar from '../components/Navbar'
import "../styles/Home.css"
import axios from "axios";
import React, { useCallback, useEffect, useState } from 'react';
import List from '../components/List';
import { appTitle, COUNTRY_API } from '../variables';

function Home() {

    const [countryData, setCountryData] = useState([])
    const [searchWord, setSearchWord] = useState("")
    const [url, setUrl] = useState(COUNTRY_API)

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchWord(event.target.value);
    }

    function handleSubmitClick(e: React.FormEvent) {
        e.preventDefault()
        setUrl(COUNTRY_API + searchWord)
    }

    const handleFetchCountryData = useCallback(async () => {
        try {
            const response = await axios.get(url)
            setCountryData(response.data)
        } catch {
            console.log("DATA CANNOT BE RETRIEVED")
        }
    }, [url])

    useEffect(() => {
        handleFetchCountryData()
    }, [handleFetchCountryData]);

    console.log("searchWord == ", searchWord)
    console.log("url == ", url);
    console.log("countryData ==", countryData)

    return (
        <>
            <Navbar
                title={appTitle}
                searchText={searchWord}
                handleChange={handleChange}
                handleSubmitClick={handleSubmitClick}
                searchRequired={true}
            />
            <List
                countryData={countryData}
            />
        </>
    )
}

export default Home

// Once the form is successfully submitted, 
// the user should be taken to a Country details page 