import React from "react";
import { useLocation } from "react-router-dom";
export default function FacilityInfo() {
  const { state } = useLocation();
  return (
    <div id="facility">
      <section id="facility-info">
        {state.map((info) =>
          Object.keys(info).map((key, index) => {
            const header = key.replaceAll("_", " ");
            const subHeaders = Object.keys(info[key]);
            if (!/(location|governance)/gi.test(header)) {
              return (
                <div key={index}>
                  <h3>{header}</h3>
                  <br />
                  {subHeaders.map((subHeader, index) => {
                    if (
                      !subHeader.replaceAll("_", " ").includes("governance")
                    ) {
                      return (
                        <p key={index}>
                          <code>{subHeader.replaceAll("_", " ")} : </code>{" "}
                          {info[key][subHeader]}
                        </p>
                      );
                    }
                  })}
                </div>
              );
            }
          })
        )}
      </section>
    </div>
  );
}
