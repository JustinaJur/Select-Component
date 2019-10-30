import React from "react";
import FontAwesome from "react-fontawesome";
import Select from "../Components.js/Select";

const menuData = [
  "Oslo",
  "Vilnius",
  "vilnonis",
  "Varėna",
  "Lentvaris",
  "Trakai",
  "Nemenčinė",
  "Marcinkonys",
  "Leningradas",
  "Kaunas",
  "Klaipėda",
  "Visaginas",
  "Zarasai",
  "Valkininkai",
  "Nida",
  "Amaliai"
];

class Example1 extends React.Component {
  render() {
    return (
      <div className="u-place-items-center container">
        <h2>Select a town</h2>
        <p>
          <span>Only</span> one option is possible
        </p>
        <Select
          menuData={menuData}
          placeholder="Search towns"
          isMultipleSelection={false}
        />
      </div>
    );
  }
}

export default Example1;
