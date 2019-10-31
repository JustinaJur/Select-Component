import React from "react";

import "./List.css";

const List = ({ array }) => (
  <div className="c-list">
    <ul>
      {array &&
        array.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
    </ul>
  </div>
);

export default List;
