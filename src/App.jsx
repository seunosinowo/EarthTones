import React from "react"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import WeatherSection from "./components/WeatherSection"
import Services from "./components/Services"


function App() {

  return (
    <>
      <div>
        <NavBar/>
        <HeroSection/>
        <WeatherSection/>
        <Services/>
      </div>
    </>
  )
}

export default App
