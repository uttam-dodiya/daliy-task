import { useState, React } from "react";
import dataBase from "./Dropdown.json";

export default function Dropdown() {
  const [stateValue, setStateValue] = useState("");
  const [cityValue, setCityValue] = useState("");
  const [stateData, setStateData] = useState(Object.keys(dataBase));

  const changeState = (event) => {
    setStateValue(event.target.value);
  };
  const changeCity = (event) => {
    setCityValue(event.target.value);
  };
  let personData = [];
  const submitData = () => {
    personData.push(stateValue, cityValue);
    console.log(personData);
  };

  return (
    <>
      <select onChange={changeState}>
        <option>--select--</option>
        {stateData.map((state, index) => {
          return <option key={index}>{state}</option>;
        })}
      </select>

      <select onChange={changeCity}>
        <option>--select--</option>
        {dataBase[stateValue]?.map((city, index) => {
          return <option key={index}>{city}</option>;
        })}
      </select>
      <input type="button" onClick={submitData} value="Submit" />
    </>
  );
}
