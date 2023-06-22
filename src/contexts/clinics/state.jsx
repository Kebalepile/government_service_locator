import React, { useReducer } from "react";
import healthFacilitesContext from "./context";
import reducer from "./reducer";
import { PrimaryHealthCareBST } from "../../utils/BinarySearchTree";
import healthCareData from "../../database/healthFacilites.json";
import sanitizeInput from "../../utils/sanitizeInput";

export default function state({ children }) {
  const initialState = new Map();
  const [state] = useReducer(reducer, initialState);

  const binaryTree = new PrimaryHealthCareBST();
  const provinceNames = [];

  for (let data of healthCareData) {
    provinceNames.push(data.province);
    state.set(data.province, data["districts"]["district_names"]);
    binaryTree.insert(data);
  }

  state.set("provinces", provinceNames);
  state.set("health", binaryTree);

  const provinces = () => state.get("provinces");

  const districts = (province) => (province ? state.get(province) : []);

  const hasProvince = (name) => {
    name = sanitizeInput(name);
    return state.get("health").hasProvince(name.trim());
  };
  const searchByProvince = (name) => {
    name = sanitizeInput(name);
    return state.get("health").searchByProvince(name.trim());
  };
  const searchByDistrict = (name) => {
    name = sanitizeInput(name);
    return state.get("health").searchByDistrict(name.trim());
  };
  const searchByMunicipality = (name) => {
    name = sanitizeInput(name);
    return state.get("health").searchByMunicipality(name.trim());
  };
  const searchByHealthFacility = (name) => {
    name = sanitizeInput(name);
    return state.get("health").searchByHealthCareFacility(name.trim());
  };
  const totalProvinceFacilities = (name) => {};
  const totalDistrictFacilities = (name) => {};
  const totalMunicipalityFacilities = (name) => {};
  const totalDistrictMunicipalities = (name) => {
    name = sanitizeInput(name);
    const district = searchByDistrict(name);
    const municipalities = [];
    if (district.length) {
      const uniqueNames = new Set();
      for (let facility of district) {
        uniqueNames.add(
          facility["Facility_identification"]["Local_Municipality"]
        );
      }
      municipalities.push(...uniqueNames);
    }
    return municipalities;
  };
  const totalMunicipalityHeathFacilites = (name) => {
    const municipalityHealthFacilites = searchByMunicipality(name);
    return municipalityHealthFacilites;
  };
  const totalMomConnectProvinceFacilites = (name) => {};
  const totalMomConnectDistrictFacilites = (name) => {};
  const totalMomConnectMunicipalityFacilites = (name) => {};

  return (
    <healthFacilitesContext.Provider
      value={{
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
