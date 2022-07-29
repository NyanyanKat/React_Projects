import React, { useState } from "react";
import data from "./List.json";

export default function List(props) {
  const filteredData = data.filter((el) => {
    if (props.input === "") {
      return el;
    } else {
      return el.text.toLowerCase().includes(props.input);
    }
  });
  return (
    <ul>
      {filteredData.map((item) => (
        <p key={item.id}>{item.text}</p>
      ))}
    </ul>
  );
}
