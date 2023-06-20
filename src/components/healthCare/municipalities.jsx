import React, { useContext, useState } from "react";
import healthFacilitesContext from "../../contexts/clinics/context";
import MuniciaplityHealthFacilities from "./municipalityHealthFacilities";
export default function municipalities({ district }) {
  const [selectedMunicipality, setSelectedMunicipality] = useState(null);

  const { totalDistrictMunicipalities } = useContext(healthFacilitesContext);

  const municipalities = totalDistrictMunicipalities(district);

  const handleClick = (e) => {
    const municipality = e.target.textContent;
    setSelectedMunicipality(() => municipality);
  };
  const renderMuniciaplityHealthFacilities = () => {
    if (selectedMunicipality) {
      return (
        <MuniciaplityHealthFacilities municipality={selectedMunicipality} />
      );
    }
    return null;
  };

  return (
    <>
      <h2>{district} municipalities:</h2>
      {municipalities.length &&
        municipalities.map((name, index) => (
          <p key={index} onClick={handleClick}>
            {name}
          </p>
        ))}
      {renderMuniciaplityHealthFacilities()}
    </>
  );
}
