import React from "react";
import PropTypes from "prop-types";

const PlanetList = props => (
  <div>
    <hr />
    <p>
      <b>Planet Name:</b>

      {props.name}
    </p>
    <p>
      <b>Population:</b>

      {props.population}
    </p>
    <p>
      <b>Climate:</b>

      {props.climate}
    </p>
    <hr />
  </div>
);

PlanetList.propTypes = {
  name: PropTypes.string,
  population: PropTypes.string,
  climate: PropTypes.string,
};
export default PlanetList;
