// eslint-disable-next-line no-unused-vars
import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import Routes from "./routes";

// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let loginInfo = JSON.parse(localStorage.getItem("star_wars"));
  let name = "";
  if (loginInfo !== null) {
    name = loginInfo[0].name;
  }




  return (
    <Fragment>

      <div id="header"> {name ? `Welcome ${name}` : "Header"}</div>
      <div id="sidebar-left">
        <ul className="list-group">
          <li className="list-group-item">
            {name ?
              <Link to="/Logout">Logout</Link>
              : <Link to="/Login">Login</Link>
            }

          </li>
          <li className="list-group-item"><Link to="/Search">Search</Link></li>
        </ul>
      </div>
      <div id="main"><Routes /></div>
      <div id="footer">Footer</div>
    </Fragment>
  );
}

export default App;
