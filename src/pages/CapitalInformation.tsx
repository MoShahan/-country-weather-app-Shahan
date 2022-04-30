import React from 'react'
import { useParams } from 'react-router-dom'

const CAPITAL_API = "http://api.weatherstack.com/current?access_key=88be182651a79f2023dfd07c8192c86b&query="



function CapitalInformation() {

  const pathParams = useParams()

  console.log(pathParams.capitalCity)

  return (
    <div>Capital  Information</div>
  )
}

export default CapitalInformation