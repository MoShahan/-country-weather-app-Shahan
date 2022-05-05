import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import SimpleNavbar from '../components/SimpleNavbar'
import "../styles/CapitalInformation.css"
import { CAPITAL_API } from '../variables'

function CapitalInformation() {

  const [myData, setMyData] = useState({
    location: {
      timezone_id: ""
    },
    current: {
      temperature: "",
      weather_icons: "",
      wind_speed: ""
    }
  })

  const pathParams = useParams()

  useEffect(
    () => {
      const fetchCapitalData = async () => (
        await fetch(CAPITAL_API + pathParams.capitalCity)
          .then(res => {
            return res.json()
          })
          .then(data => {
            setMyData(data)
          })
      )
      fetchCapitalData();
    }, []
  )

  return (
    <div className='capitalBody'>
      <SimpleNavbar/>
      <h1>Information about the Capital City : {pathParams.capitalCity}</h1>
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
            <td> {myData.current.temperature} °C</td>
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
            <td> {myData.current.wind_speed} m/s </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CapitalInformation