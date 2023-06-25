import React from "react";
import { useLocation } from "react-router-dom";
export default function StationInfo() {
  const { state } = useLocation();
  return (
    <div id="facility">
      <section id="facility-info">
        {state.map((info) =>
          Object.keys(info).map((key, index) => {
            const header = key.replaceAll("_", " ");
            const subHeaders = Object.keys(info[key]);
            if (/name/gi.test(header)) {
              return (
                <div id="name" key={index}>
                  <h3>Name</h3>
                  <p>{info["name"]}</p>
                </div>
              );
            }
            if (!/(page|map|name)/gi.test(header)) {
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
