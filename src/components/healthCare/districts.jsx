import React, { useContext } from "react";
import healthFacilitesContext from "../../contexts/clinics/context";

export default function provinceDistricts({ province }) {
    console.log(province)
  const { districts } = useContext(healthFacilitesContext);
  const districtNames = districts(province);
  return (
    <>
      {districtNames.length &&
        districtNames.map((name, index) => <p key={index}>{name}</p>)}
    </>
  );
}
