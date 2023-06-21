import React from "react";
import { BsArrowDown } from "react-icons/bs";
import { BiMapPin } from "react-icons/bi";
export default function PrimaryHealthFacility() {
  return (
    <div className="page">
      <h4>Health Care:</h4>
      <p>Search for facility by:</p>
      <ol>
        <li>Province</li>
        <li>District</li>
        <li>Municipality</li>
      </ol>
      <p>or</p>
      <p>Use the Map</p>
      <br />
      <BsArrowDown />
      <section id="choice">
        <button>search</button>
        <button>
          <BiMapPin />
          load map
        </button>
      </section>
    </div>
  );
}
