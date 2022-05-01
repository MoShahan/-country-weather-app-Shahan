import Navbar from '../components/Navbar'
import usePersistence from '../hooks/usePersistence';
import { appTitle } from '../types'
import "../styles/Home.css"
import axios from "axios";
import { Link } from 'react-router-dom';
import useDebounce from '../hooks/useDebounce';
import { useCallback, useEffect, useState } from 'react';

const API_ENDPOINT = "https://restcountries.com/v3.1/name/"

function Home() {

    // const [searchText, setSearchText]: any = usePersistence("searchTerm", "");

    // const debouncedUrl = useDebounce(API_ENDPOINT + searchText)

    const [countryData, setCountryData] = useState({})

    // function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    //     setSearchText(event.target.value);
    // }

    // const handleFetchStories = useCallback(async () => {

    //     try {
    //         const response = await axios.get(debouncedUrl)
    //         setCountryData(response.data)
    //         console.log(countryData)
    //     } catch {
    //         <Link to="/error"></Link>
    //     }
    // }, [debouncedUrl])

    // useEffect(() => {
    //     handleFetchStories()
    // }, [handleFetchStories]);

    return (
        <>
            {/* <Navbar
                title={appTitle}
                searchText={searchText}
                handleChange={handleChange}
            /> */}
            {/* <List
                listOfItems={stories.data}
              /> */}
        </>
    )
}

export default Home