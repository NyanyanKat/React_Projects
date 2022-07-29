// import { getFilledInputUtilityClass } from "@mui/material";
import React, { useState } from "react";
import "./FormValidation.css";

export default function FormValidation() {
  const [input, setInput] = useState({});

  function checkForm(e) {
    e.preventDefault();
    if (input.password && input.checkpassword) {
      if (input.password !== input.checkpassword) {
        setInput({ ...input, confirm: "false" });
      } else {
        setInput({ ...input, confirm: "true" });
      }
    }

    console.log(input);
  }

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;

    setInput({ ...input, [name]: value });
  }

  return (
    <div>
      <form onSubmit={checkForm}>
        <h3>Submit this form</h3>
        <br />
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Put name here"
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="Put email here"
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="text"
          name="password"
          onChange={handleChange}
          placeholder="Put password here"
        />
        <br />
        <label htmlFor="checkpassword">Confirm Password: </label>
        <input
          type="text"
          name="checkpassword"
          onChange={handleChange}
          placeholder="Confirm password"
        />
        <br />
        <button>Submit Form</button>
      </form>
      <br />
      {input.confirm !== undefined && (
        <>
          {input.confirm === "true" ? (
            <>
              <h3>You Submitted</h3>
              <h3>Name: {input.name} </h3>
              <h3>Email: {input.email} </h3>
            </>
          ) : (
            <>
              <p className="error">Passwords do not match!!!</p>
            </>
          )}
        </>
      )}
    </div>
  );
}
