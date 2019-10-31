import React from "react";

import Select from "../../Components.js/Select/Select";

const colors = [
  "Yellow",
  "Green",
  "Blue",
  "Grey",
  "Pink",
  "Transparent",
  "Violet",
  "Red",
  "Black",
  "White",
  "Purple",
  "Brown",
  "Olive",
  "Navy",
  "Silver",
  "Orange"
];

const Example2 = () => {
  return (
    <div className="u-place-items-center container">
      <h2>Select a color</h2>
      <p>
        <span>Multiple</span> selection is possible
      </p>
      <Select menuData={colors} isMultipleSelection={true} />
    </div>
  );
};

export default Example2;
