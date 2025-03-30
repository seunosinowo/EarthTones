import React, {lazy, Suspense} from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import { Loader } from "lucide-react"

const HeroSection = lazy(() => import('./components/HeroSection'))
const WeatherSection = lazy(() => import('./components/WeatherSection'))
const Services = lazy(() => import('./components/Services'))


function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <NavBar/>
          <Suspense fallback = {<div><Loader/></div>}>
            <HeroSection/>
            <WeatherSection/>
            <Services/>
            </Suspense>
        </BrowserRouter>


            {/* Touch back */}
            {/* <Routes>
              <Route path = "" element={<HeroSection/>}/>
              <Route path = "" element= {<WeatherSection/>}/>
              <Route path = "" element={<Services/>}/>
            </Routes> */}


        
      </div>
    </>
  )
}

export default App
