import React from "react";
import { useLocation } from "react-router-dom";
export default function FacilityInfo() {
  const { state } = useLocation();
  return (
    <>
      <h1>facility info</h1>
      {state.map((facility, index) => (
        <code key={index}>
          {JSON.stringify(facility,null, 4)}
        </code>
      ))}
    </>
  );
}
