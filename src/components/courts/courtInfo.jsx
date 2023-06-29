import React from "react";
import { useLocation } from "react-router-dom";
export default function StationInfo() {
  const { state } = useLocation();
  return (
    <div id="facility">
      <section id="facility-info">
        {state.map((info, index) => (
          <div key={index}>
            <h3>{info["Province"]}</h3>
            <br />
            <p>
              <code>Proclaimed Magisterial District: </code>
              {info["MagDistrict"]}
            </p>
            <p>
              <code>Office: </code>
              {info["Office"]}
            </p>

            {info["PreviouslyKnownAs"] && (
              <p>
                <code>Previously known as: </code>
                {info["PreviouslyKnownAs"]}
              </p>
            )}
            {info["AlsoKnownAs"] && (
              <p>
                <code>Also known as: </code>
                {info["AlsoKnownAs"]}
              </p>
            )}

            <p>
              <code>Court Type: </code>
              {info["CourtType"]}
            </p>
            <p>
              <code>Small Claims Court: </code>
              {info["SCC"]}
            </p>
            {info["MOVIT"] && (
              <p>
                <code>Move it site: </code>
                {info["MOVIT"]}
              </p>
            )}
            <p>
              <code>Tel: </code>
              {info["Tel"]}
            </p>
            <p>
              <code>Postal Address: </code>
              {info["Postal"]}
            </p>
            <p>
              <code>Physical Address: </code>
              {info["Physical"]}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
