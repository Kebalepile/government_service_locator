import React from "react";
import { useNavigate } from "react-router-dom";
import appLogo from "/assets/logo/gsl_logo.png";
import { HiHome } from "react-icons/hi";
import { RiServiceFill } from "react-icons/ri";
import { GiHealthNormal } from "react-icons/gi";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { GrInfo } from "react-icons/gr";
export default function Nav() {
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <ul>
          <li onClick={(e) => navigate("/")}>
            <HiHome /> Home
          </li>
          <li>
            <details>
              <summary>
                <RiServiceFill /> Services
              </summary>
              <ul id="services">
                <li onClick={(e) => navigate("health-care")}>
                  <GiHealthNormal /> Health care
                </li>
                <li onClick={(e) => navigate("protection-services")}>
                  <GiPoliceOfficerHead /> Protection services
                </li>
              </ul>
            </details>
          </li>
          <li onClick={(e) => navigate("about")}>
            <GrInfo /> About
          </li>
        
        </ul>
        <div id="logo-parent">
          <img src={appLogo} alt="web app logo." id="logo" />
        </div>
        
      </nav>
        <hr />
    </>
  );
}
