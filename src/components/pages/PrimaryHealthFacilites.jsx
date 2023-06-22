import React, { useState, useContext } from "react";
import { BsArrowDown } from "react-icons/bs";
import { BiMapPin } from "react-icons/bi";
import healthFacilitesContext from "../../contexts/clinics/context";
import sanitizeInput from "../../utils/sanitizeInput";

export default function PrimaryHealthFacility() {
  const {
    searchByProvince,
    searchByDistrict,
    searchByMunicipality,
    searchByHealthFacility,
  } = useContext(healthFacilitesContext);

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
  const choices = ["province", "district", "municipality", "facility"];
  const searchBy = (type, input) => {
    if (input) {
      const cleanedType = sanitizeInput(type);
      // cleanedInput = sanitizeInput(input);

      switch (cleanedType.toLowerCase().trim()) {
        case choices[0]:
          searchByProvince(input);
          return;
        case choices[1]:
          searchByDistrict(input);
          return;
        case choices[2]:
          searchByMunicipality(input);
          return;
        case choices[3]:
          searchByHealthFacility(input);
          return;
        default:
          return;
      }
    }
  };
  const [choice, setChoice] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const handleChange = (e) => {
    if (errorMessage) {
      setErrorMessage(null);
    }
    setChoice(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(choice);
    if (!choice) {
      setErrorMessage("Please select one of the choices.");
    } else {
      console.log(`Selected choice is: ${choice}.`);
    }
  };

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
        <form onSubmit={handleSubmit} id="searchby-form">
          <input
            type="radio"
            id={choices[0]}
            name="choice"
            value={choices[0]}
            onChange={handleChange}
            // required
          />
          <label htmlFor={choices[0]}>{choices[0]}</label>
          <br />
          <input
            type="radio"
            id={choices[1]}
            name="choice"
            value={choices[1]}
            onChange={handleChange}
          />
          <label htmlFor={choices[1]}>{choices[1]}</label>
          <br />
          <input
            type="radio"
            id={choices[2]}
            name="choice"
            value={choices[2]}
            onChange={handleChange}
          />
          <label htmlFor={choices[2]}>{choices[2]}</label>
          <br />
          <input
            type="radio"
            id={choices[3]}
            name="choice"
            value={choices[3]}
            onChange={handleChange}
          />
          <label htmlFor={choices[3]}>{choices[3]}</label>
          <br />
          <input type="submit" value="Submit" />
          <input
            type="reset"
            value="Cancel"
            onClick={(e) => {
              if (errorMessage) {
                setErrorMessage(null);
              }
              setChoice(null);
            }}
          />
        </form>
        {errorMessage && <p>{errorMessage}</p>}
        {errorMessage &&
          (() => {
            setTimeout(() => {
              setErrorMessage(null);
              console.log("done");
            }, 2000);
          })()}
        <button onClick={handleCloseDialog}>close</button>
      </dialog>
    </>
  );
}
