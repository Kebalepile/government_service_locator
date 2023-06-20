import { useContext, useState } from "react";
import healthFacilitesContext from "../../contexts/clinics/context";
import Districts from "./districts";
export default function provinces() {
  const { provinces } = useContext(healthFacilitesContext);

  const provinceNames = provinces();

  const [selectedProvince, setSelectedProvince] = useState(null);

  const handleClick = (e) => {
    const province = e.target.textContent;
    setSelectedProvince(() => province);
  };
  const renderDistricts = () => {
    if (selectedProvince) {
      return (
        <>
          <button onClick={(e) => setSelectedProvince(() => null)}>
            close
          </button>
          <Districts province={selectedProvince} />
        </>
      );
    }
    return null;
  };
  return (
    <>
      <h1>Health Facilitees</h1>
      <h2>Select a Province: </h2>
      <br />
      {provinceNames.length &&
        provinceNames.map((name, index) => (
          <p key={index} onClick={handleClick}>
            {name}
          </p>
        ))}

      {renderDistricts()}
    </>
  );
}
