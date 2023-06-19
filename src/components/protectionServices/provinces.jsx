import { useContext, useEffect } from "react";
import protectionServicesContext from "../../contexts/saps/context";
export default function provinces() {
  const {
    hasProvince,
    searchByProvince,
    searchByStation
  } = useContext(protectionServicesContext);
useEffect(() => {
//    console.log(hasProvince("pop"))
//   console.log(searchByProvince("zulu"))
//   console.log(searchByStation('taung'))
 
},[])

  return (
    <>
      <h1>Provinces</h1>
    </>
  );
}
