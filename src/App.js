import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CV from "./components/CV/CV";
import Portfolio from "./components/Portfolio/Portfolio"


function App() {     
  return (
    <Fragment>
      <Header />       
      <Routes>       
        <Route exact path="/" element={<CV title="Резюме"/>} />
        <Route exact path="/portfolio" element={<Portfolio title="Портфолио"/>} />        
      </Routes>   
      <Footer />
    </Fragment>
  )
 
};



export default App;
