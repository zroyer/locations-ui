import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

const Card = styled.div`
  border-left: 2px solid #f8cb53;
  color: #5c2b11;
  fill: #5c2b11;
  font-size: 14px;
  width: 320px;
  height: 50px;
  padding: 8px 12px;
  margin: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  :hover {
    background-color: #f8cb53;
    color: #FCFBF0;
    fill: #FCFBF0;
  }
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
`;
const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const DescriptionSpan = styled.div`
  margin: 0 0 0 4px;
`;

function LocationCard(props) {
  const {
    multi_car_display_name,
    airport_code,
    description,
  } = props;

  const displayName = `${multi_car_display_name}` +
    (airport_code ? ` (${airport_code})` : '');

  return (
    <Card>
      <Title>
        {displayName}
        <SVG src="/images/github.svg" />
      </Title>
      <DescriptionWrapper>
        {airport_code ? (
          <SVG src="/images/airplanemode_active.svg" />
        ) : (
          <SVG src="/images/location_city.svg" />
        )}
        <DescriptionSpan>
          {description}
        </DescriptionSpan>
      </DescriptionWrapper>
    </Card>
  );
}

export default LocationCard;
