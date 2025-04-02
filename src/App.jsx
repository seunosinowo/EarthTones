import React, {lazy, Suspense} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Loader from "./components/Loader/Loading";
import ScrollUP from "./components/Scroll/ScrollUP";
import Footer from "./components/Footer";

const HeroSection = lazy(() => import('./components/HeroSection'))
const WeatherSection = lazy(() => import('./components/WeatherSection'))
const Services = lazy(() => import('./components/Services'))
const Popular = lazy(() => import('./components/Popular'))
const NewsLetter = lazy(() => import('./components/NewsLetter'))



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
            <NewsLetter/>
            <ScrollUP/>
          </Suspense>
        </BrowserRouter>
        <Footer/>
      </div>
    </>
  )
}

export default App
