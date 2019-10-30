import React from "react";

import Select from "../Components.js/Select";

const menuData = [
  "yellow",
  "green",
  "grey",
  "pink",
  "transparent",
  "violet",
  "red",
  "black",
  "white"
];

class Example2 extends React.Component {
  render() {
    return (
      <div className="u-place-items-center container">
        <h2>Select a color</h2>
        <p>
          <span>Multiple</span> selection is possible
        </p>
        <Select menuData={menuData} isMultipleSelection={true} />
      </div>
    );
  }
}

export default Example2;
