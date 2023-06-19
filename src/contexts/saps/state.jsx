import { useReducer } from "react";
import protectionServicesContext from "./context";
import reducer from "./reducer";
import { SouthAfricaPoliceServiceBST } from "../../utils/BinarySearchTree";
import sapsContactData from "../../database/saps.json";

export default function state({ children }) {
  const binaryTree = new SouthAfricaPoliceServiceBST();
  for (let data of sapsContactData) {
    binaryTree.insert(data);
  }
  const initialState = new map([["police", binaryTree]]);
  const [state] = useReducer(initialState, reducer);

  const hasProvince = (name) => {
    return state.get("health").hasProvince(name.trim());
  };
  const searchByProvince = (name) => {
    return state.get("health").searchByProvince(name.trim());
  };
  const searchByStation = (name) => {
    return state.get("health").searchByStation(name.trim());
  };
  return (
    <protectionServicesContext.Provider
      value={{
        hasProvince,
        searchByProvince,
        searchByStation,
      }}
    >
      {children}
    </protectionServicesContext.Provider>
  );
}
