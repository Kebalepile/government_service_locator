import React from "react";
import ReactDOM from "react-dom/client";
import HealthFacilitiesProvider from "./contexts/clinics/state";
import ProtectionServicesProvider from "./contexts/saps/state";
import LowerCourtsProvider from "./contexts/courts/state";
import App from "./App";


/**
 * for production use "/serviceWorker.js"
 *  for development use "./src/serviceWorker.js"
 */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./serviceWorker.js") 
      .then((registration) => {
        console.log("service worker registered as: ", registration.scope);
      })
      .catch((error) => console.error("service worker registration: ", error));
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HealthFacilitiesProvider>
      <ProtectionServicesProvider>
        <LowerCourtsProvider>
          <App />
        </LowerCourtsProvider>
      </ProtectionServicesProvider>
    </HealthFacilitiesProvider>
  </React.StrictMode>
);
