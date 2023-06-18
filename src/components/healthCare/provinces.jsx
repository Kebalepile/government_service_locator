import { useContext } from "react";
import healthFacilitesContext from "../../contexts/clinics/context";
export default function provinces() {
  const {
    hasProvince,
    searchByProvince,
    searchByDistrict,
    searchByMunicipality,
    searchByHealthFacility,
  } = useContext(healthFacilitesContext);
console.log(hasProvince("Zulu"))
console.log(searchByProvince('mpumalanga'))
console.log(searchByDistrict('bojanala'))

  return (
    <>
      <h1>Provinces</h1>
    </>
  );
}
