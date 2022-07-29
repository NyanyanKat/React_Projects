import React, { useState } from "react";

export default function ReusableForm() {
  const [field, setField] = useState([]);

  function getData(value) {
    setField([...field, value]);
    //console.log("field", field);
  }

  return (
    <div>
      <Child1 getData={getData}></Child1>
      {/* <p>First Name in Parent {field.firstname}</p> */}
      <br />
      <Child2 field={field} setField={setField}></Child2>
    </div>
  );
}

function Child1(props) {
  const [data, setData] = useState("");
  function onSubmit(e) {
    e.preventDefault();
    // setData({ ...data, submitted: true });
    props.getData(data);
    //console.log(data);
    //setData("");
  }

  function changeFirstName(e) {
    setData({ ...data, firstname: e.target.value });
  }

  function changeLastName(e) {
    setData({ ...data, lastname: e.target.value });
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h3>Submit this form</h3>
        <p>First Name </p>
        <input type="text" onChange={changeFirstName} />
        <p>Last Name</p>
        <input type="text" onChange={changeLastName} />
        <br /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

function Child2({ field, setField }) {
  function deleteForm(e) {
    setField(field.filter((item, i) => i !== parseInt(e.target.value, 10)));
    //return filter;
  }

  return (
    <div>
      <h3>You Submitted:</h3>
      <>
        {field.map((val, index) => (
          <div key={index}>
            <p>First Name: {val.firstname}</p>
            <p>Last Name: {val.lastname}</p>
            <button value={index} onClick={deleteForm}>
              Delete
            </button>
          </div>
        ))}
      </>
    </div>
  );
}
