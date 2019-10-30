import React from "react";

const List = ({ array }) => (
  <div className="c-list">
    <ul>
      {array &&
        array.map(item => {
          return <li>{item}</li>;
        })}
    </ul>
  </div>
);

export default List;
