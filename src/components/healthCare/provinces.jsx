import { useContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import healthFacilitesContext from "../../contexts/clinics/context";

export default function provinces() {
  const navigate = useNavigate();

  const { provinces } = useContext(healthFacilitesContext);

  const provinceNames = provinces();

  const [selectedProvince, setSelectedProvince] = useState(null);

  const handleClick = (e) => {
    const province = e.target.textContent;
    setSelectedProvince(() => province);
  };
  useEffect(() => {
    if (selectedProvince) {
      navigate(`${selectedProvince}/districts`, {
        state: { province: selectedProvince },
      });
    }
  }, [selectedProvince, navigate]);

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
    </>
  );
}
