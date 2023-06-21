import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PagesNavigations from "./components/navigation/PagesNavigations";
import Footer from "./components/navigation/Footer";
import HomePage from "./components/pages/Index";
import AboutPage from "./components/pages/About";
import PrimaryHealthFacility from "./components/pages/PrimaryHealthFacilites";
import ProtectionServices from "./components/pages/ProtectionServices";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <PagesNavigations />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="health-care" element={<PrimaryHealthFacility />} />
        <Route path="protection-services" element={<ProtectionServices />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
