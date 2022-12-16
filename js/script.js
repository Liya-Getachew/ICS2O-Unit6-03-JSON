// Copyright (c) 2022 liya getachew All rights reserved
//
// Created by: liya getachew
// Created on: Dec 14 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-03-JSON/sw.js", {
    scope: "/ICS2O-Unit6-03-JSON/",
  })
}

/**
 * This function displays the weather to date.
 */

const getWeather = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData)
    const tempKelvin = jsonData.main.temp
    const tempCelsius = tempKelvin - 273.15
    const tempK = jsonData.main.feels_like
    const tempC = tempK - 273.15
    document.getElementById("icon-weather").innerHTML = '<img src="http://openweathermap.org/img/wn/' + jsonData.weather[0].icon + '@2x.png" alt="icon" height="300" width="300">'
    document.getElementById("description").innerHTML = jsonData.weather[0].main + ", " + jsonData.weather[0].description
    document.getElementById("temperature").innerHTML = Math.round(tempCelsius) + "°C feels like " + Math.round(tempC) + "°C"
    document.getElementById("humidity").innerHTML = "humidity: " + jsonData.main.humidity + "%"
  } catch (err) {
    console.log(err)
  }
}

getWeather("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")
