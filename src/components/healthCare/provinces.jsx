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
  // console.log(searchByHealthFacility('kana'))
},[])

  return (
    <>
      <h1>Provinces</h1>
    </>
  );
}
