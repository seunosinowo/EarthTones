import React, {lazy, Suspense} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Loader from "./components/Loader/Loading";

const HeroSection = lazy(() => import('./components/HeroSection'))
const WeatherSection = lazy(() => import('./components/WeatherSection'))
const Services = lazy(() => import('./components/Services'))
const Popular = lazy(() => import('./components/Popular'))


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
            <Popular/>


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
