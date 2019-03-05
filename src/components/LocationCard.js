import React, { Component } from 'react';

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
      <div>
        <h1>
          {displayName}
        </h1>
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
      </div>
    );
  }
}

export default LocationCard;
