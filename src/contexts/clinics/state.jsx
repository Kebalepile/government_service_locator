import { useReducer } from "react";
import healthFacilitesContext from "./context";
import reducer from "./reducer";
import { PrimaryHealthCareBST } from "../../utils/BinarySearchTree";
import healthCareData from "../../database/healthFacilites.json";
// import { PROVINCES } from "../types";

export default function state({ children }) {
  const binaryTree = new PrimaryHealthCareBST();

  for (let data of healthCareData) {
    binaryTree.insert(data);
  }

  const initialState = new Map([["health", binaryTree]]);
  const [state, ] = useReducer(reducer, initialState);
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
