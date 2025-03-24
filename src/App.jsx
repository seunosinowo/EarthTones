import React from "react"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import WeatherSection from "./components/WeatherSection"


function App() {

  return (
    <>
      <div>
        <NavBar/>
        <HeroSection/>
        <WeatherSection/>
      </div>
    </>
  )
}

export default App
