import { useReducer } from "react";
import healthFacilitesContext from "./context";
import reducer from "./reducer";
import { PROVINCES } from "../types";

export default function state({ children }) {
  const initialState = {};
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <healthFacilitesContext.Provider value={{}}>
      {children}
    </healthFacilitesContext.Provider>
  );
}
