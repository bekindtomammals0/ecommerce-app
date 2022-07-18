import React, { Component } from "react";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }

  render() {
    return (
      <div className="col-lg-9">
        <h4 className="m-1 p-2 border-bottom">Log in</h4>
        <div className="form-group form-row">
          <label htmlFor="" className="col-lg-4">
            Email:
          </label>
          <input
            type="text"
            className="text form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
          <label htmlFor="" className="col-lg-4">
            Password:
          </label>
          <input
            type="password"
            className="text form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />

          <div className="text-right">
            <button className="btn btn-primary m-1" onClick={this.onLoginClick}>
              Log in
            </button>
            {this.state.message}
          </div>
        </div>
      </div>
    );
  }

  onLoginClick = async () => {
    //fetch users from react-db.json @localhost:5000/users
    var response = await fetch(
      `http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`,
      {
        method: "GET",
      }
    );

    var users = await response.json();
    console.log(users);
    console.log(this.state);

    if (users.length > 0) {
      //sucess login
      this.setState({
        message: <span className="text-success"> Admin Logged-in </span>,
      });
      console.log("Admin logged in");
    } else {
      //error login
      this.setState({
        message: (
          <span className="text-danger">
            Incorrect email or password, please try again
          </span>
        ),
      });
    }
  };

  componentDidMount = async () => {};
  // setEmail= () => {(){

  // };
}
