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

  const [showSearchDialog, setShowSearchDialog] = useState(false);

  const handleOpenSearchDialog = () => {
    setShowSearchDialog(true);
  };

  const handleCloseSearchDialog = () => {
    setShowSearchDialog(false);
  };
  const loadMap = () => {
    console.log("map.");
  };
  const [showSuggestionsDialog, setShowSuggestionsDialog] = useState(false);

  const handleOpenSuggestionsDialog = () => {
    setShowSuggestionsDialog(true);
  };

  const handleCloseSuggestionsDialog = () => {
    setShowSuggestionsDialog(false);
  };

  const [suggestions, setSuggestions] = useState({ title: null, list: [] });
  const choices = ["district", "municipality", "facility"];

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
          results = searchByDistrict(cleanedInput);
          noError = searchError(results);
          if (noError) {
            setSuggestions({
              title: `Health Facility Suggestions for ${cleanedInput} District.`,
              list: results,
            });
            handleCloseSearchDialog();
            handleOpenSuggestionsDialog();
          }
          return;
        case choices[1]:
          results = searchByMunicipality(cleanedInput);
          noError = searchError(results);
          if (noError) {
            setSuggestions({
              title: `Health Facility Suggestions for ${cleanedInput} Municipality.`,
              list: results,
            });
            handleCloseSearchDialog();
            handleOpenSuggestionsDialog();
          }
          return;
        case choices[2]:
          results = searchByHealthFacility(cleanedInput);
          noError = searchError(results);
          if (noError) {
            setSuggestions({
              title: `Health Facility Suggestions for facility named: ${cleanedInput}`,
              list: results,
            });
            handleCloseSearchDialog();
            handleOpenSuggestionsDialog();

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
          <li>District</li>
          <li>Municipality</li>
          <li>Facility Name</li>
        </ol>
        <p>
          <strong>or</strong>
        </p>
        <p>Use the Map</p>
        <br />
        <BsArrowDown id="arrow" />
        <br />
        <section id="choice">
          <button onClick={handleOpenSearchDialog}>search</button>
          <button onClick={loadMap}>
            <BiMapPin />
            load map
          </button>
        </section>
      </div>
      <dialog open={showSearchDialog} className="dialog-centered">
        <section className="dialog-content">
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
            {choice && (
              <input
                type="text"
                placeholder="search"
                autoFocus
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
          <button onClick={handleCloseSearchDialog} className="close-button">
            Close
          </button>
        </section>
      </dialog>
      <dialog open={showSuggestionsDialog} className="dialog-centered">
        <div className="dialog-content">
          <button
            onClick={handleCloseSuggestionsDialog}
            className="close-button"
          >
            Close
          </button>
          <br />
          {suggestions.title && (
            <>
              <h4>{suggestions.title}</h4>
              <br />
              <hr />
            </>
          )}
          <br />
          <section id="suggestions">
            {suggestions.list.length > 0 &&
              suggestions.list.map((facilityInfo, index) => {
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
          </section>
        </div>
      </dialog>
    </>
  );
}
