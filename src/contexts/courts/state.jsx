import React, { useReducer } from "react";
import lowerCouertsContext from "./context";
import reducer from "./reducer";
import { LowerCourtsBTS } from "../../utils/BinarySearchTree";
import courts from "../../database/courts.json";
import xss from "xss";

export default function state({ children }) {
  const binaryTree = new LowerCourtsBTS();
  for (let court of courts) {
    binaryTree.insert(court);
  }
  const initialState = new Map([["lowerCourts", binaryTree]]);
  const [state] = useReducer(reducer, initialState);
  const searchByProvince = (name) => {
    name = xss(name);
    return state.get("lowerCourts").searchByProvince(name.trim());
  };
  const searchByMagDistrict = (name) => {
    name = xss(name);
    return state.get("lowerCourts").searchByMagDistrict(name.trim());
  };
  const searchByCourtType = (name) => {
    name = xss(name);
    return state.get("lowerCourts").searchByCourtType(name.trim());
  };
  const searchByOffice = (name) => {
    name = xss(name);
    return state.get("lowerCourts").searchByOffice(name.trim());
  };
  return (
    <lowerCouertsContext.Provider
      value={{
        searchByProvince,
        searchByMagDistrict,
        searchByCourtType,
        searchByOffice,
      }}
    >
      {children}
    </lowerCouertsContext.Provider>
  );
}
