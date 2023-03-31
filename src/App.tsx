import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CV from "./components/CV/CV";
import Portfolio from "./components/Portfolio/Portfolio";
import Training from "./components/Trainig/Training";
import PageNotFound from "./components/PageNotFoung/PageNotFound";

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<CV title="Резюме" />} />
        <Route path="/portfolio" element={<Portfolio title="Портфолио" />} />
        <Route path="/training" element={<Training title="Обучение" />} />
      </Routes>

      <Footer />
    </>
  );
};
export default App;
