import React, { Component } from 'react';
import LocationCard from '../components/LocationCard';
import styled from 'styled-components';

const NavWrapper= styled.div`
  background-color: #FDEDE4;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width: 1150px;

  @media (max-width: 1145px) {
    max-width: 768px;
  }

  /* @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  } */
`;

class LocationsSection extends Component {
  render() {
    const {
      visibleLocations,
    } = this.props;

    return (
      <NavWrapper>
      {visibleLocations.map((location) => (
        <LocationCard
          key={location.multi_car_display_name}
          multi_car_display_name={location.multi_car_display_name}
          airport_code={location.airport_code}
          description={location.description}
        />
      ))}
      </NavWrapper>
    );
  }
}

export default LocationsSection;
