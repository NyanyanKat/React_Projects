import "./Anagram.css";
import React from "react";

export default function Anagram() {
  return (
    <div>
      <Child props={{ stringa: "eat", stringb: "ate" }}></Child>
    </div>
  );
}

function Child(props) {
  console.log(props);
  const { stringa, stringb } = props.props;
  console.log(stringa, stringb);
  function anagram(a, b) {
    let map = new Map();
    let isAnagram = false;

    if (a.length !== b.length) {
      return isAnagram;
    }

    if (a.length === 1 && b.length === 1) {
      return a === b ? true : false;
    }

    for (let i = 0; i < a.length; i++) {
      map.set(a.charAt(i), i);
    }

    for (let i = 0; i < b.length; i++) {
      if (map.has(b.charAt(i))) {
        isAnagram = true;
      } else {
        isAnagram = false;
      }
    }
    return isAnagram;
  }

  let checkana = anagram(stringa, stringb);
  // anagram()
  return (
    <div>
      <p className={checkana ? "Green" : "Red"}>
        {stringa} {stringb} is anagram? {checkana.toString()}
      </p>
    </div>
  );
}
