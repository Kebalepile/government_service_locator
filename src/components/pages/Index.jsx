import React from "react";

export default function Index() {
  return (
    <>
      <section id="homepage" className="page">
        <h4>Welcome to the Government Service Locator (GLS)</h4>
        <br />
        <h4>
          {" "}
          Our app is designed to help you easily find and locate government
          services in South Africa.
        </h4>
        <br />
        <p>
          <strong>How is this services provided ?</strong>
         
        </p>
        <br />
        <p>
          We scrape data from official government websites such as departments,
          agencies and public services to provide you with up-to-date
          information on contact details, operating hours and services offered.
          Currently, our app provides information on SAPS, clinics and community
          health centers.{" "}
        </p>
        <br />
        <h5>
          We encourage you to try our app and discover how easy it is to find
          the government services you need. Give it a try today!
        </h5>
      </section>
    </>
  );
}
