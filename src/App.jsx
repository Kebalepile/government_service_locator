import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PagesNavigations from "./components/navigation/PagesNavigations";
import HomePage from "./components/pages/Index";
import AboutPage from "./components/pages/About";
import  Districts  from "./components/healthCare/districts"
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <PagesNavigations />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/:province/districts" element={<Districts/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
