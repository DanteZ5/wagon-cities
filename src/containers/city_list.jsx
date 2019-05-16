import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import City from './city.jsx';
import { setCities } from "../actions";

class CityList extends Component {

  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <ul className="cities">
        {this.props.cities.map((city, index) => {
          return <City key={city.name} city={city} />;
        })}
      </ul>
    );
  }
}


function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCities }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
