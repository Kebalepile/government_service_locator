import React from "react";
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
        <div id="logo">
          logo
        </div>
       
      </nav>
    </>
  );
}
