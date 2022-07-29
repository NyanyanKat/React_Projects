import "./Palindrome.css";
import React, { useState } from "react";

export default function Palindrome() {
  const [word, setWord] = useState("");
  const [isPalindrome, setIsPalindrome] = useState(false);

  function changeWord(e) {
    setWord(e.target.value);

    let t = e.target.value.toString().split("").reverse().join("");

    if (t === e.target.value.toString()) {
      return setIsPalindrome(true);
    }

    return setIsPalindrome(false);
  }

  return (
    <div>
      <label>Input Word </label>
      <input type="text" onChange={changeWord}></input>
      <p>{word}</p>
      <p className={isPalindrome ? "green" : "red"}>{word}</p>
    </div>
  );
}
