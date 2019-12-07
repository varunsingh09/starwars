import React, { Fragment, Component } from "react";
import "./form.css";
import { connect } from "react-redux";
import { UserLogin } from "../actions/HomeAction";
import PropTypes from "prop-types";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { user: { birth_year: "", name: "" }, errors: [""], submit: false };
  }

  onChange = (e) => {
    const { name, value } = e.target;
    const { user } = this.state;
    this.setState({ user: { ...user, [name]: value } });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { user } = this.state;
    this.setState({ submit: true });
    this.props.UserLogin(user);

  }


  render() {
    const { user } = this.state;
    const { name, birth_year } = user;

    if (this.props.data !== undefined) {

      const logininfo = this.props.data.results.filter(value => ((value.name === name && value.birth_year === birth_year) ? value : ""));
      if (logininfo.length > 0) {
        localStorage.setItem("star_wars", JSON.stringify(logininfo));
        this.props.history.push("/");
      }
    }


    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>

          <div className="container">
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" onChange={this.onChange} placeholder="Enter Username" name="name" required />

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" onChange={this.onChange} placeholder="Enter Password" name="birth_year" required />
            <label htmlFor="psw">
              <b>{this.props.pending === true ? "Logging..." : "" ? this.props.error : this.props.error}</b>
            </label>
            <button type="submit">Login</button>

          </div>

        </form>
      </Fragment>
    );
  }
}



const mapStateToProps = (state) => {
  let { HomeReducer: { pending, error, results } } = state;
  return {
    pending: pending,
    error: error,
    data: results.data
  };

};

const mapDispatchToProps = dispatch => ({
  UserLogin: (params) => dispatch(UserLogin(params))
});

Login.propTypes = {
  UserLogin: PropTypes.func,
  data: PropTypes.object,
  history: PropTypes.object,
  pending: PropTypes.bool,
  error: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
