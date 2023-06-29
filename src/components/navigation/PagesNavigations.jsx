import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import appLogo from "/assets/logo/gsl_logo.gif";
import { HiHome } from "react-icons/hi";
import { RiServiceFill } from "react-icons/ri";
import { GiHealthNormal,GiPoliceOfficerHead } from "react-icons/gi";
import { GrInfo } from "react-icons/gr";
import { VscLaw } from "react-icons/vsc";

export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();

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
                  <GiHealthNormal /> Clinic's
                </li>

                <li onClick={(e) => navigate("protection-services")}>
                  <GiPoliceOfficerHead /> Police Station's
                </li>
                <li onClick={(e) => navigate("courts")}>
                  <VscLaw />
                  Lower Courts
                </li>
              </ul>
            </details>
          </li>
          <li onClick={(e) => navigate("about")}>
            <GrInfo /> About
          </li>
        </ul>
        <div
          id="logo-parent"
          onClick={(e) => {
            const currentURL = location.pathname;
            if (currentURL != "/") {
              navigate("/");
            }
          }}
        >
          <img src={appLogo} loading="lazy" alt="web app logo." id="logo" />
        </div>
      </nav>
      <hr id="navbar-hr" />
    </>
  );
}
