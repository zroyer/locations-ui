import React from 'react';
import LocationCard from './LocationCard';
import styled from 'styled-components';

const LocationsDiv = styled.div`
  background-color: #FDEDE4;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  height: calc(100vh - 94px);

  @media (max-width: 768px) {
    height: calc(100vh - 156px);
  }
`;

const LocationsWrapper = styled.div`
  margin: 40px 0;
  overflow-y: auto;
  background-color: #FDEDE4;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 1101px;

  @media (max-width: 1150px) {
    width: 739px;
  }

  @media (max-width: 768px) {
    width: 344px;
  }
`;

function LocationsSection(props) {
  const {
    visibleLocations,
  } = props;

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

export default LocationsSection;
