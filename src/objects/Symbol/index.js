import React from "react";

import "./styles.css";
import O from "../../assets/Circle.png";
import X from "../../assets/X.png";

const Symbol = ({ symbol }) => {
  let values = [];
  values["X"] = X;
  values["O"] = O;

  return (
    <button className="symbol">
      {values[symbol] ? <img src={values[symbol]} alt="Símbolo" /> : ""}
    </button>
  );
};

export default Symbol;
