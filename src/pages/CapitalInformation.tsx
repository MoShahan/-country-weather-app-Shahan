import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import Error from '../components/Error'
import "../styles/CapitalInformation.css"

const ACCESS_KEY = "076f152151d94ca04e96d05d13042e24"

// const CAPITAL_API = `http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=`

function CapitalInformation() {

  const [myData, setMyData] = useState({
    location: {
      timezone_id: ""
    },
    current: {
      temperature: 0,
      weather_icons: "",
      wind_speed: 0
    }
  })

  const pathParams = useParams()

  // fetch(CAPITAL_API + pathParams.capitalCity)
  //   .then(res => res.json())
  //   .then(data => {
  //     localStorage.setItem("Temperature", data.current.temperature)
  //     localStorage.setItem("WeatherIcons", data.current.weather_icons)
  //     localStorage.setItem("WindSpeed", data.current.wind_speed)
  //     localStorage.setItem("TimeZoneId", data.location.timezone_id)
  //   })

  // useEffect(
  //   () => {
  //     const fetchCapitalData = async () => (
  //       await fetch(CAPITAL_API + pathParams.capitalCity)
  //         .then(res => {
  //           return res.json()
  //         })
  //         .then(data => {

  //           console.log(data.current.temperature)
  //           console.log(data.current.weather_icons)
  //           console.log(data.current.wind_speed)
  //           console.log(data.location.timezone_id)

  //           setMyData(data)

  //         })
  //     )
  //     fetchCapitalData();
  //   }, []
  // )

  console.log("data == ", myData)

  return (
    <div>
      <h1>Capital  Information</h1>
      <table className='capitalInfoTable'>
        <thead>
          <tr>
            <td> Properties </td>
            <td> Values </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Temperature </td>
            <td> {myData.current.temperature} </td>
          </tr>
          <tr>
            <td> Weather Icons </td>
            <td> <img src={myData.current.weather_icons}></img>  </td>
          </tr>
          <tr>
            <td> Time Zone ID </td>
            <td> {myData.location.timezone_id} </td>
          </tr>
          <tr>
            <td> Wind Speed </td>
            <td> {myData.current.wind_speed} </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CapitalInformation