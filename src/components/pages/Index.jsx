import React from "react";
import HealthFacilitiesProvinces from "../healthCare/provinces";
import ProtectionProvinces from "../protectionServices/provinces";
export default function Index() {
  return (
    <>
      <h1>Home page</h1>
      <HealthFacilitiesProvinces/>
      <ProtectionProvinces />
    </>
  );
}
