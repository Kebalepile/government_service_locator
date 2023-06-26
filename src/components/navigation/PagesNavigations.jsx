import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import appLogo from "/assets/logo/gsl_logo.gif";
import { HiHome } from "react-icons/hi";
import { RiServiceFill } from "react-icons/ri";
import { GiHealthNormal } from "react-icons/gi";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { GrInfo } from "react-icons/gr";
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
                 <span> <GiHealthNormal /> Health care</span>
                </li>
              
                <li onClick={(e) => navigate("protection-services")}>
                  <GiPoliceOfficerHead /> Protection services
                </li>
              </ul>
            </details>
          </li>
          <li onClick={(e) => navigate("about")}>
           <span> <GrInfo  /> About</span>
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
