import React from "react";
import { useNavigate } from "react-router-dom";
import appLogo from "/assets/logo/gsl_logo.png";
export default function Nav() {
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <ul>
          <li onClick={(e) => navigate("/")}>home</li>
          <li>
            <details>
              <summary>service</summary>
              <ul id="services">
                <li onClick={(e) => navigate("health-care")}>
                  primary health care
                </li>
                <li onClick={(e) => navigate("protection-services")}>
                  protection services
                </li>
              </ul>
            </details>
          </li>
          <li onClick={(e) => navigate("about")}>about</li>
          <hr />
        </ul>
        <div id="logo-parent">
          <img src={appLogo} alt="web app logo." id="logo" />
        </div>
      </nav>
    </>
  );
}
