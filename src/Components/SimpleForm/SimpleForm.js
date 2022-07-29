import React, { Component } from "react";

export default class SimpleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: "",
      password: "",
      submitted: false
    };
  }

  render() {
    return (
      <div>
        <h2>Submit this form</h2>
        <form onSubmit={this.handleSubmit}>
          Email:
          <input onChange={this.handleChangeEmail} type="text" name="email" />
          <br />
          <br />
          Name:
          <input onChange={this.handleChangeName} type="text" name="name" />
          <br />
          <br />
          Password:
          <input
            onChange={this.handleChangePassword}
            type="text"
            name="password"
          />
          <br />
          <br />
          <button>Submit</button>
        </form>
        {this.state.submitted ? (
          <>
            <p>You Submitted: </p>
            <h4>Name: {this.state.name}</h4>
            <h4>Email: {this.state.email}</h4>
            <h4>Password: {this.state.password}</h4>
          </>
        ) : (
          ""
        )}
      </div>
    );
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    await this.setState({ submitted: true });
    console.log(this.state);
  };

  handleChangeEmail = async (event) => {
    await this.setState({ email: event.target.value });
  };

  handleChangeName = async (event) => {
    await this.setState({ name: event.target.value });
  };

  handleChangePassword = async (event) => {
    await this.setState({ password: event.target.value });
  };
}
