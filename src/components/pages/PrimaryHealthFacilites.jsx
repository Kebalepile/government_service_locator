import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowDown } from "react-icons/bs";
import { BiMapPin } from "react-icons/bi";
import healthFacilitesContext from "../../contexts/clinics/context";
import xss from "xss";

export default function PrimaryHealthFacility() {
  const navigate = useNavigate();
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
    console.log("close dialog");
    setShowDialog(false);
  };
  const loadMap = () => {
    console.log("map.");
  };

  const [suggestions, setSuggestions] = useState([]);
  const choices = ["province", "district", "municipality", "facility"];

  const searchBy = (type, input) => {
    const searchError = (error) => {
      if (!Array.isArray(error)) {
        setErrorMessage(error);
        return false;
      }
      return true;
    };

    if (input) {
      const cleanedType = xss(type);
      const cleanedInput = xss(input);

      let results, noError;
      switch (cleanedType.toLowerCase().trim()) {
        case choices[0]:
          results = searchByProvince(cleanedInput);
          noError = searchError(results);
          if (noError) {
            console.log(results);
          }
          return;
        case choices[1]:
          results = searchByDistrict(cleanedInput);
          noError = searchError(results);
          if (noError) {
            console.log(results);
          }
          return;
        case choices[2]:
          results = searchByMunicipality(cleanedInput);
          noError = searchError(results);
          if (noError) {
            console.log(results);
          }
          return;
        case choices[3]:
          results = searchByHealthFacility(cleanedInput);
          noError = searchError(results);
          if (noError) {
            setSuggestions(results);
            handleCloseDialog();

            return;
          }
          return;
        default:
          return;
      }
    }
  };
  const [searchInput, setSearchInput] = useState("");
  const [choice, setChoice] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const handleChange = (e) => {
    if (errorMessage) {
      setErrorMessage(() => null);
    }
    setChoice(() => e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!choice) {
      setErrorMessage(() => "Please select one of the choices.");
    } else {
      if (searchInput) {
        searchBy(choice, searchInput);
        setChoice(() => null);
        setSearchInput("");
      }
      if (errorMessage) {
        setErrorMessage(() => null);
      }
      setChoice(() => null);
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
        <section id="dialog-content">
          <form onSubmit={handleSubmit} id="searchby-form">
            <h3>select a search by option below :</h3>
            <br />
            <input
              type="radio"
              id={choices[0]}
              name="choice"
              value={choices[0]}
              checked={choice === choices[0]}
              onChange={handleChange}
            />
            <label htmlFor={choices[0]}>{choices[0]}</label>
            <br />
            <input
              type="radio"
              id={choices[1]}
              name="choice"
              value={choices[1]}
              checked={choice === choices[1]}
              onChange={handleChange}
            />
            <label htmlFor={choices[1]}>{choices[1]}</label>
            <br />
            <input
              type="radio"
              id={choices[2]}
              name="choice"
              value={choices[2]}
              checked={choice === choices[2]}
              onChange={handleChange}
            />
            <label htmlFor={choices[2]}>{choices[2]}</label>
            <br />
            <input
              type="radio"
              id={choices[3]}
              name="choice"
              value={choices[3]}
              checked={choice === choices[3]}
              onChange={handleChange}
            />
            <label htmlFor={choices[3]}>{choices[3]}</label>
            <br />
            {choice && (
              <input
                type="text"
                placeholder="search"
                value={searchInput}
                onChange={(e) => setSearchInput(() => e.target.value)}
              />
            )}
            <br />
            <input type="submit" value="Submit" />
            <input
              type="reset"
              value="Clear"
              onClick={(e) => {
                if (errorMessage) {
                  setErrorMessage(() => null);
                }
                setChoice(null);
              }}
            />
          </form>
          {errorMessage && <p id="error-message">{errorMessage}</p>}
          {errorMessage &&
            (() =>
              setTimeout(() => {
                setErrorMessage(() => null);
                setChoice(null);
              }, 2000))()}
          <button onClick={handleCloseDialog} id="close-button">
            Close
          </button>
        </section>
      </dialog>
      <div id="suggestions">
        {suggestions.length > 0 &&
          suggestions.map((facilityInfo, index) => {
            return (
              <p
                key={index}
                onClick={(e) => {
                  navigate("/health-care/facility-info", {
                    state: [facilityInfo],
                  });
                }}
              >
                {" "}
                {facilityInfo["Facility_identification"]["Facility_name"]}
              </p>
            );
          })}
      </div>
    </>
  );
}
