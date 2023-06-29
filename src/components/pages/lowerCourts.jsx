import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowDown } from "react-icons/bs";
import { BiMapPin } from "react-icons/bi";
import lowerCouertsContext from "../../contexts/courts/context";
import xss from "xss";

export default function lowerCourts() {
  const navigate = useNavigate();
  const {
    searchByProvince,
    searchByMagDistrict,
    searchByCourtType,
    searchByOffice,
  } = useContext(lowerCouertsContext);
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
  const choices = [
    "Province",
    "Magisterial District",
    "Court Type",
    "Court Office",
  ];

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
      switch (cleanedType.trim()) {
        case choices[0]:
          results = searchByProvince(cleanedInput);
          noError = searchError(results);
        
          if (noError) {
            setSuggestions({
              title: `Lower Court(s) Suggestions for ${cleanedInput} Province.`,
              list: results,
            });
            handleCloseSearchDialog();
            handleOpenSuggestionsDialog();
          }
          return;
        case choices[1]:
          results = searchByMagDistrict(cleanedInput);
          noError = searchError(results);
          if (noError) {
            setSuggestions({
              title: `Lower Court(s) Suggestions for ${cleanedInput} Magistrate District.`,
              list: results,
            });
            handleCloseSearchDialog();
            handleOpenSuggestionsDialog();
          }
          return;
        case choices[2]:
          results = searchByCourtType(cleanedInput);
          noError = searchError(results);
          if (noError) {
            setSuggestions({
              title: `Lower Court(s) Suggestions for ${cleanedInput} Court Type.`,
              list: results,
            });
            handleCloseSearchDialog();
            handleOpenSuggestionsDialog();
          }
          return;
        case choices[3]:
          results = searchByOffice(cleanedInput);
          noError = searchError(results);
          if (noError) {
            setSuggestions({
              title: `Lower Court(s) Suggestions for ${cleanedInput} Court office.`,
              list: results,
            });
            handleCloseSearchDialog();
            handleOpenSuggestionsDialog();
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
      <div className="page" id="courtpage">
        <h4>South African Lower Courts:</h4>
        <p>Search for court by:</p>
        
        <ol style={{marginTop:"4px"}}>
          <li>Province</li>
          <li>Magisterial District</li>
          <li>Court Type</li>
          <li>Court Office</li>
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
          <button disabled onClick={loadMap}>
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
                      navigate("/courts/court-info", {
                        state: [facilityInfo],
                      });
                    }}
                  >
                    {facilityInfo["MagDistrict"]}
                  </p>
                );
              })}
          </section>
        </div>
      </dialog>
    </>
  );
}
