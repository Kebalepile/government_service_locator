import React, { useReducer } from "react";
import protectionServicesContext from "./context";
import reducer from "./reducer";
import { SouthAfricaPoliceServiceBST } from "../../utils/BinarySearchTree";
import sapsContactsData from "../../database/saps.json";
import xss from "xss";

export default function state({ children }) {
  const binaryTree = new SouthAfricaPoliceServiceBST();
  for (let data of sapsContactsData) {
    binaryTree.insert(data);
  }
  const initialState = new Map([["police", binaryTree]]);
  const [state] = useReducer(reducer, initialState);

  const hasProvince = (name) => {
    name = xss(name);
    return state.get("police").hasProvince(name.trim());
  };
  const searchByProvince = (name) => {
    name = xss(name);
    return state.get("police").searchByProvince(name.trim());
  };
  const searchByStation = (name) => {
    name = xss(name);
    return state.get("police").searchByStation(name.trim());
  };
  return (
    <protectionServicesContext.Provider
      value={{
        searchByProvince,
        searchByStation,
      }}
    >
      {children}
    </protectionServicesContext.Provider>
  );
}
