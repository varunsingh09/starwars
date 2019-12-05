import React, { Component } from "react";

class Logout extends Component {
  constructor(props) {
    super(props);
    localStorage.removeItem("star_wars", "");
    // eslint-disable-next-line react/prop-types
    this.props.history.push("/login");
  }

  render() {
    return (<p>User Logout</p>);
  }
}

export default Logout;
