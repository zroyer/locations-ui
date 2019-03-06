import React, { Component } from 'react';
import styled from 'styled-components';
import { pruneLocations } from '../helpers/pruneLocations';
import { getFilteredLocations } from '../helpers/getFilteredLocations';
import LocationsSection from '../components/LocationsSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AppContainer = styled.div`
  background-color: #FDEDE4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  overflow: hidden;
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
        <Navbar
          handleInputChange={this._handleInputChange}
        />
        <LocationsSection
          visibleLocations={visibleLocations}
        />
        <Footer />
      </AppContainer>
    );
  }
}

export default App;
