import React, { useContext, useState } from "react";
import healthFacilitesContext from "../../contexts/clinics/context";
import Municipalities from "./municipalities";

export default function provinceDistricts({ province }) {
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const { districts } = useContext(healthFacilitesContext);
  const districtNames = districts(province);
  const handleClick = (e) => {
    const district = e.target.textContent;
    setSelectedDistrict((selectedDistrict) =>
      district !== selectedDistrict ? district : selectedDistrict
    );
  };
  const renderMunicipalities = () => {
    if (selectedDistrict) {
      return (
        <>
          <Municipalities district={selectedDistrict} />
        </>
      );
    }
    return null;
  };
  return (
    <>
      <h2>Districts:</h2>
      <h3>province: {province}</h3>
      {districtNames.length &&
        districtNames.map((name, index) => (
          <p key={index} onClick={handleClick}>
            {name}
          </p>
        ))}
      {renderMunicipalities()}
    </>
  );
}
