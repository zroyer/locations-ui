import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Image = styled.div`
  height: 25px;
  width: 150px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(https://s3.amazonaws.com/development-silvercar-static-assets/assets/web-assets/silvercar-by-audi.svg);
`;

function NavLogo() {
  return (
    <ImageWrapper>
      <Image />
    </ImageWrapper>
  );
}

export default NavLogo;
