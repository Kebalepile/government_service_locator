import React, { useContext } from "react";
import healthFacilitesContext from "../../contexts/clinics/context";

export default function municipalityHealthFacilites({ municipality }) {
  const { totalMunicipalityHeathFacilites } = useContext(
    healthFacilitesContext
  );
  const healthFacilites = totalMunicipalityHeathFacilites(municipality);
  const healthFacilitesMap = new Map();

  for (let facility of healthFacilites) {
    let facilityName = facility["Facility_identification"]["Facility_name"];

    healthFacilitesMap.set(facilityName, facility);
  }
  const handleClick = (e) => {
    const facilityName = e.target.textContent;
    // ENDED HERE.
    console.log(healthFacilitesMap.get(facilityName));
  };
  return (
    <>
      <h3>{municipality} health facilites:</h3>
      {healthFacilites.length &&
        healthFacilites.map((facility, index) => {
          const facilityName =
            facility["Facility_identification"]["Facility_name"];

          return (
            <p key={index} onClick={handleClick}>
              {facilityName}
            </p>
          );
        })}
    </>
  );
}
