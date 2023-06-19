import React from "react";
import ReactDOM from "react-dom/client";
import HealthFacilitiesProvider from "./contexts/clinics/state";
import ProtectionServicesProvider from "./contexts/saps/state";
import App from "./App";

// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker
//       .register("./src/sw.js")
//       .then((registration) => {
//         console.log("service worker registered as: ", registration.scope);
//       })
//       .catch((error) =>
//         console.error("service worker registration: ", error)
//       );
//   });
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HealthFacilitiesProvider>
      <ProtectionServicesProvider>
        <App />
      </ProtectionServicesProvider>
    </HealthFacilitiesProvider>
  </React.StrictMode>
);
