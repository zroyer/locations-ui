import React, { Component } from 'react';
import styled from 'styled-components';
import { pruneLocations } from '../helpers/pruneLocations';
import { getFilteredLocations } from '../helpers/getFilteredLocations';
import LocationsSection from '../components/LocationsSection';

const AppContainer = styled.div`
  background-color: #FDEDE4;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

class App extends Component {
  state = {
    locations: [],
    visibleLocations: [],
  }

  componentDidMount() {
    fetch('locations.json')
      .then(res => res.json())
      .then(data => {
        const locations = pruneLocations(data);
        this.setState({
          locations,
          visibleLocations: locations,
        });
      });
  }

  _handleInputChange = (e) => {
    e.preventDefault();
    const query = e.target.value.toLowerCase();
    const allLocations = this.state.locations;
    if (query.length > 0) {
      const filteredLocations = getFilteredLocations(allLocations, query);
      this.setState({
        visibleLocations: filteredLocations,
      });
    } else {
      this.setState({
        visibleLocations: allLocations,
      });
    }
  }

  render() {
    const { visibleLocations } = this.state;

    return (
      <AppContainer>
        <div>
          <input
            onChange={this._handleInputChange}
          />
        </div>
        <LocationsSection
          visibleLocations={visibleLocations}
        />
      </AppContainer>
    );
  }
}

export default App;
