import { useReducer } from "react";
import healthFacilitesContext from "./context";
import reducer from "./reducer";
import { PrimaryHealthCareBST } from "../../utils/BinarySearchTree";
import healthCareData from "../../database/healthFacilites.json";
// import { PROVINCES } from "../types";

export default function state({ children }) {
  const phcTree = new PrimaryHealthCareBST();

  for (let province of healthCareData) {
    // console.log(province.province)
    phcTree.insert(province);
  }
  // console.log("========")

  const initialState = new Map([["health", phcTree]]);
  const [state, dispatch] = useReducer(reducer, initialState);
  const hasProvince = (name) => {
    return state.get("health").hasProvince(name.trim());
  };
  const searchByProvince = (name) => {
    return state.get("health").searchByProvince(name.trim());
  };
  const searchByDistrict = (name) => {
    return state.get("health").searchByDistrict(name.trim());
  };
  const searchByMunicipality = (name) => {
    return state.get("health").searchByMunicipality(name.trim());
  };
  const searchByHealthFacility = (name) => {
    return state.get("health").searchByHealthCareFacility(name.trim());
  };

  return (
    <healthFacilitesContext.Provider
      value={{
        hasProvince,
        searchByProvince,
        searchByDistrict,
        searchByMunicipality,
        searchByHealthFacility,
      }}
    >
      {children}
    </healthFacilitesContext.Provider>
  );
}
