//import "./styles.css";
import React, { useState } from "react";

export default function SimpleFormFunc() {
  const [field, setField] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await setField({ ...field, submitted: true });
    console.log(field);
  }

  async function changeEmail(e) {
    await setField({ ...field, email: e.target.value });
  }

  async function changeName(e) {
    await setField({ ...field, name: e.target.value });
  }

  async function changePassword(e) {
    await setField({ ...field, password: e.target.value });
  }

  return (
    <div>
      <h2>Submit this form??</h2>
      <form onSubmit={handleSubmit}>
        Email:
        <input onChange={changeEmail} type="text" name="email" />
        <br />
        <br />
        Name:
        <input onChange={changeName} type="text" name="name" />
        <br />
        <br />
        Password:
        <input onChange={changePassword} type="text" name="password" />
        <br />
        <br />
        <button>Submit</button>
      </form>
      {field.submitted ? (
        <>
          <p>You Submitted: </p>
          <h4>Name: {field.name}</h4>
          <h4>Email: {field.email}</h4>
          <h4>Password: {field.password}</h4>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
