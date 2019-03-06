import React, { Component } from 'react';
import styled from 'styled-components'

const Card = styled.div`
  color: #5c2b11;
  padding: 8px 12px;
  margin: 8px;
  font-size: 14px;
  width: 320px;
  height: 44px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-left: 2px solid #FF5800;

  :hover {
    background-color: #FF5800;
    color: #FFF;
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
`;


class LocationCard extends Component {
  render() {
    const {
      multi_car_display_name,
      airport_code,
      description,
    } = this.props;

    const displayName = `${multi_car_display_name}` +
      (airport_code ? ` (${airport_code})` : '');

    return (
      <Card>
        <Title>
          {displayName}
        </Title>
        <div>
          <span>
          {airport_code ? (
            <span
            role='img'
            aria-label='airport'
            >
            ✈️
            </span>
          ) : (
            <span
            role='img'
            aria-label='office'
            >
            🏢
            </span>
          )}
          </span>
          <span>
            : {description}
          </span>
        </div>
      </Card>
    );
  }
}

export default LocationCard;
