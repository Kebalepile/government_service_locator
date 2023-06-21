import React from "react";
import appLogo from "/assets/logo/gsl_logo.png";
export default function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>home</li>
          <li>
            <details>
              <summary>service</summary>
              <ul id="services">
                <li>primary health care</li>
                <li>protection services</li>
              </ul>
            </details>
          </li>
          <li>about</li>
          <hr />
        </ul>
        <div id="logo-parent">
          <img src={appLogo} alt="web app logo." id="logo" />
        </div>
      </nav>
    </>
  );
}
