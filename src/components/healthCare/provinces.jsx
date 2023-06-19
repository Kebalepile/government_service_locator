import { useContext, useRef } from "react";
import healthFacilitesContext from "../../contexts/clinics/context";
import Districts from "./districts";
export default function provinces() {
  const { provinces } = useContext(healthFacilitesContext);

  const provinceNames = provinces();
  const districtRef = useRef(null);

  return (
    <>
      <h1>Health Facilitees</h1>
      <h2>Select a Province: </h2>
      <br />
      {provinceNames.length &&
        provinceNames.map((name, index) => (
          <p
            key={index}
            onClick={(e) => {
              // districtRef.current.appendChild(
              //   <Districts province={e.target.textContent} />
              // );
              console.log(e.target.textContent);
            }}
          >
            {name}
          </p>
        ))}
      <section id="disticts" ref={districtRef}>
        <h2>Districts:</h2>
        <br />
      </section>
    </>
  );
}
