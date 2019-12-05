/* eslint-disable no-constant-condition */
import React, { Fragment, Component } from "react";
import "./form.css";
import { withRouter } from "react-router-dom";
import store  from "../store";
import { UserLogin } from "../actions/HomeAction";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { user: { birth_year: "", name: "" }, errors: [], submit: false };
    this.onUpdate = this.onUpdate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onUpdate(e) {
    const { name, value } = e.target;
    const { user } = this.state;
    this.setState({ user: { ...user, [name]: value } });
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.state;
    const { name, birth_year } = user;
    store.dispatch(UserLogin(user));
    const { HomeReducer } = store.getState();
    const data = HomeReducer;
    this.setState({ submit: true });
    data.dataList.then((response) => {
      if (response.data.hasOwnProperty("results")) {
        const { results } = response.data;

        const logininfo = results.filter(value => ((value.name === name && value.birth_year === birth_year) ? value : ""));
        // console.log(logininfo.length)
        if (logininfo.length > 0) {
          this.setState({ user_details: logininfo });
          localStorage.setItem("star_wars", JSON.stringify(logininfo));
          this.setState({ errors: "Successfully login.." });
          this.setState({ submit: false });
          // eslint-disable-next-line react/prop-types
          this.props.history.push("/");
        } else {
          this.setState({ errors: "Please check username and password" });
        }
      }
    });
  }


  render() {
    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>

          <div className="container">
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" onChange={this.onUpdate} placeholder="Enter Username" name="name" required />

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" onChange={this.onUpdate} placeholder="Enter Password" name="birth_year" required />
            <label htmlFor="psw"><b>{this.state.submit ===true ? "Logging..." : "" ? this.state.errors : this.state.errors}</b></label>
            <button type="submit">Login</button>

          </div>

        </form>
      </Fragment>
    );
  }
}

export default withRouter(Login);
