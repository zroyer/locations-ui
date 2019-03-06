import React, { Component } from 'react';
import LocationCard from '../components/LocationCard';
import styled from 'styled-components';

const LocationsDiv= styled.div`
  background-color: #FDEDE4;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px 10px;
`;

const LocationsWrapper= styled.div`
  background-color: #FDEDE4;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 1150px;

  @media (max-width: 1150px) {
    width: 724px;
  }

  @media (max-width: 768px) {
    width: 344px;
  }
`;

class LocationsSection extends Component {
  render() {
    const {
      visibleLocations,
    } = this.props;

    return (
      <LocationsDiv>
        <LocationsWrapper>
        {visibleLocations.map((location) => (
          <LocationCard
            key={location.multi_car_display_name}
            multi_car_display_name={location.multi_car_display_name}
            airport_code={location.airport_code}
            description={location.description}
          />
        ))}
        </LocationsWrapper>
      </LocationsDiv>
    );
  }
}

export default LocationsSection;
