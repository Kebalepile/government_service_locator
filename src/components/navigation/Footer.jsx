import React from "react";
export default function FooterNavigation() {
  return (
    <footer>
      <section id="contacts">
        <h5>Contacts:</h5>
        <h6>
          Email:{" "}
          <a href="mailto:kmotshoana@gmail.com?subject=Helo&body=How%20are%20you%3F">
            kmotshoana@gmail.com
          </a>
        </h6>
        <h6>
          Cell Phone: <a href="tel:+27672718374">Call me</a>
        </h6>
      </section>
      <h6>© K.T Motshoana 2023</h6>
    </footer>
  );
}
