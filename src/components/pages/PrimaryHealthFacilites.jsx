import React, { useState } from "react";
import { BsArrowDown } from "react-icons/bs";
import { BiMapPin } from "react-icons/bi";
export default function PrimaryHealthFacility() {
  const [showDialog, setShowDialog] = useState(false);

  const handleOpenDialog = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };
  const loadMap = () => {
    console.log("map.");
  };
  const searchBy = () => {};

  return (
    <>
      <div className="page" id="healthcarepage">
        <h4>Health Care:</h4>
        <p>Search for facility by:</p>
        <ol>
          <li>Province</li>
          <li>District</li>
          <li>Municipality</li>
        </ol>
        <p>
          <strong>or</strong>
        </p>
        <p>Use the Map</p>
        <br />
        <BsArrowDown id="arrow" />
        <br />
        <section id="choice">
          <button onClick={handleOpenDialog}>search</button>
          <button onClick={loadMap}>
            <BiMapPin />
            load map
          </button>
        </section>
      </div>
      <dialog open={showDialog} className="dialog-centered">
        <p>Hello from dialog.</p>
        <button onClick={handleCloseDialog}>close</button>
      </dialog>
    </>
  );
}
