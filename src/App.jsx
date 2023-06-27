import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PagesNavigations from "./components/navigation/PagesNavigations";
import Footer from "./components/navigation/Footer";
import HomePage from "./components/pages/Index";
import AboutPage from "./components/pages/About";
import PrimaryHealthFacility from "./components/pages/PrimaryHealthFacilites";
import FacilityInfo from "./components/healthCare/facilityInfo";
import ProtectionServices from "./components/pages/ProtectionServices";
import StationInfo from "./components/protectionServices/stationInfo";
import LowerCourts from "./components/pages/lowerCourts";
import CourtInfo from "./components/courts/courtInfo";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <PagesNavigations />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/health-care" element={<PrimaryHealthFacility />} />
        <Route path="/health-care/facility-info" element={<FacilityInfo />} />
        <Route path="/protection-services" element={<ProtectionServices />} />
        <Route
          path="/protection-services/satation-info"
          element={<StationInfo />}
        />
        <Route path="/courts" element={<LowerCourts />} />
        <Route path="courts/court-info" element={<CourtInfo />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
