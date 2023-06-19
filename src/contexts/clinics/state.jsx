import { useReducer } from "react";
import healthFacilitesContext from "./context";
import reducer from "./reducer";
import { PrimaryHealthCareBST } from "../../utils/BinarySearchTree";
import healthCareData from "../../database/healthFacilites.json";
// import { PROVINCES } from "../types";

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

  const districts = (province) => province ? state.get(province): [];

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
        districts,
        provinces,
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
