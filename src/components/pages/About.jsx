import React from "react";

export default function About() {
  return (
    <div className="page" id="aboutpage">
      <h2>About Government Service Locator</h2>
      <br />
      <p>
        The Government Service Locator (GLS) is a web app that allows end-users
        to easily find and locate government services in South Africa. Our app
        scrapes data from official government websites such as departments,
        agencies and public services to provide you with up-to-date information
        on contact details, operating hours and services offered.
      </p>
      <br />
      <p>
        Our app focuses on being a victimization combat tool that can show the
        nearest police station, clinic, community center or hospital. We use
        technologies such as Scrapy, Python, JavaScript and React to provide a
        seamless user experience.
      </p>
      <br />
      <p>
        Contributions to our project are welcome! Please use open issue or
        submit a{" "}
        <a
          href="https://github.com/Kebalepile/government_service_locator"
          target="_blank"
        >
          pull request
        </a>{" "}
        if you would like to contribute.
      </p>
    </div>
  );
}
