import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CV from "./components/CV/CV";
import Portfolio from "./components/Portfolio/Portfolio"


function App() {     
  return (
    <div>
      <Header />      
      <Routes>     
        <Route path="/" element={<CV />} />
        <Route path="/portfolio" element={<Portfolio />} />     
      </Routes>
     

   
      {/* <CV />     
      <Portfolio /> */}
      <Footer />
    </div>
  )
 
};



export default App;
