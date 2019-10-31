import React from "react";
import Select from "../../Components.js/Select/Select";

const towns = [
  "Oslas",
  "Vilnius",
  "vilnonis",
  "wilnonis",
  "Varėna",
  "Lentvaris",
  "Trakai",
  "Nemenčinė",
  "Marcinkonys",
  "Kaunas",
  "Klaipėda",
  "Visaginas",
  "Zarasai",
  "Valkininkai",
  "Nida",
  "Amaliai"
];

const Example1 = () => {
  return (
    <div className="c-example1 u-place-items-center container">
      <h2>Select a town</h2>
      <p>
        <span>Only</span> one option is possible
      </p>
      <Select
        menuData={towns}
        placeholder="Search towns"
        isMultipleSelection={false}
      />
    </div>
  );
};

export default Example1;
