import React from "react";

import Header from "./Components/Header";

import Hero from "./Components/Hero";
import PopularCars from "./Components/PopularCars";
import TopOffers from "./Components/TopOffers"
import CarBrands from "./Components/CarBrands";
import MobileApp from "./Components/MobileApp";
import Strengths from "./Components/Strengths";
import LatestNews from "./Components/LatestNews"
import Footer from "./Components/Footer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';


function App() {
  return (
   
     <main id="Home" className="page-wrapper">
      <Header />
      <Hero />
      <PopularCars />
      <TopOffers />
      <CarBrands />
      <Strengths />
      <MobileApp />
      <LatestNews />
      <Footer />

     </main>
      
    
  );
}

export default App;
