import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import SearchInput from './SearchInput';

const NavContainer= styled.div`
  background-color: white;
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
const NavWrapper= styled.div`
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
const SvgWrapper= styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > span {
    > svg {
      max-height: 30px;
      max-width: 200px;
    }
  }
`;

function Navbar(props) {
  const { handleInputChange } = props;

  return (
    <NavContainer>
      <NavWrapper>
        <SvgWrapper>
          <SVG src="/images/silvercar.svg" />
        </SvgWrapper>
        <SearchInput
          handleInputChange={handleInputChange}
        />
      </NavWrapper>
    </NavContainer>
  );
}

export default Navbar;
