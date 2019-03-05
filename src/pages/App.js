import React, { Component } from 'react';
import { pruneLocations } from '../helpers/pruneLocations';
import LocationCard from '../components/LocationCard'
import './App.css';


class App extends Component {
  state = {
    locations: [],
  }

  componentDidMount() {
    fetch('locations.json')
      .then(res => res.json())
      .then(data => {
        const locations = pruneLocations(data);
        this.setState({
          locations,
        });
      });
  }

  render() {
    const { locations } = this.state;

    return (
      <div className="App">
        <div>
          {locations.map((location) => (
            <LocationCard
              key={location.airport_code}
              multi_car_display_name={location.multi_car_display_name}
              airport_code={location.airport_code}
              description={location.description}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
