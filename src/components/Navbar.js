import React from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';

const NavContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  @media (max-width: 768px) {
    height: 120px;
  }
`;
const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  width: 1046px;
  height: 60px;

  @media (max-width: 1150px) {
    padding: 0 20px;
    width: 699px;
  }
  @media (max-width: 768px) {
    height: 120px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;
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

function Navbar(props) {
  const { handleInputChange } = props;

  return (
    <NavContainer>
      <NavWrapper>
        <ImageWrapper>
          <Image />
        </ImageWrapper>
        <SearchInput
          handleInputChange={handleInputChange}
        />
      </NavWrapper>
    </NavContainer>
  );
}

export default Navbar;
