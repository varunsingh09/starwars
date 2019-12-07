import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PlanetList from "./PlanetList";
import { HomeSearch } from "../actions/HomeAction";

class Planet extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }


  componentDidUpdate = () => {

    const { searchTerm } = this.props;
    if (searchTerm.length > 4) {
      this.props.HomeSearch(searchTerm);
    }

  }


  render() {
    const { searchTerm } = this.props;
    return (
      <div>
        <div>
          <div>
            <label htmlFor="psw"><b>{this.props.pending === true ? "Searching..." : "" ? this.props.error : this.props.error}</b></label>
            <h2>Search Star War</h2>
          </div>
        </div>
        <div>
          {this.props.data !== undefined && this.props.data.results
            .filter(planet => `${planet.name} ${planet.population} ${planet.climate}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0)
            .map(planet => <PlanetList key={planet.name} {...planet} />)}
        </div>
      </div>
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
  HomeSearch: (params) => dispatch(HomeSearch(params))
});

Planet.propTypes = {
  searchTerm: PropTypes.string,
  population: PropTypes.number,
  HomeSearch: PropTypes.func,
  data: PropTypes.object,
  history: PropTypes.object,
  pending: PropTypes.bool,
  error: PropTypes.string
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Planet);

