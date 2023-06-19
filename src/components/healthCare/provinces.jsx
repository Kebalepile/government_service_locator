import { useContext, useEffect } from "react";
import healthFacilitesContext from "../../contexts/clinics/context";
export default function provinces() {
  const {
    hasProvince,
    searchByProvince,
    searchByDistrict,
    searchByMunicipality,
    searchByHealthFacility,
  } = useContext(healthFacilitesContext);
useEffect(() => {
  //  console.log(hasProvince("pop"))
  // console.log(searchByProvince("west"))
  // console.log(searchByDistrict('zulu '))
  // console.log(searchByMunicipality("taung"))
  console.log(searchByHealthFacility('taung'))
},[])

  return (
    <>
      <h1>Health Facilitees</h1>
    </>
  );
}
