import React, { Component } from "react";
import PropTypes from "prop-types";
import PlanetList from "./PlanetList";
import store  from "../store";
import { HomeSearch } from "../actions/HomeAction";

class Planet extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }

  componentWillReceiveProps = () => {
    const { searchTerm } = this.props;

    // if(searchTerm.length > 4){

    store.dispatch(HomeSearch(searchTerm));
    const { HomeReducer } = store.getState();
    const data = HomeReducer;
    data.searchList.then((response) => {
      if (response.data.hasOwnProperty("results")) {
        const { results } = response.data;
        this.setState({ results });
      }
    });
    // }
  }


  render() {
    const { searchTerm } = this.props;
    return (
      <div>
        <div>
          <div>
            <h2>Search Star War</h2>
          </div>
        </div>
        <div>
          {this.state.results
            .filter(planet => `${planet.name} ${planet.population} ${planet.climate}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0)
            .map(planet => <PlanetList key={planet.name} {...planet} />)}
        </div>
      </div>
    );
  }
}
Planet.propTypes = {
  searchTerm: PropTypes.string,
  population:PropTypes.number
};
export default Planet;
