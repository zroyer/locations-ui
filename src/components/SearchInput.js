import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const StyledInput = styled.input`
  padding: 0px 5px;
  position: relative;
  width: 220px;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  color: rgba(0, 0, 0, 0.87);
  cursor: inherit;
  font: inherit;
  opacity: 1;
`;

function SearchInput(props) {
  const { handleInputChange } = props;

  return (
    <InputWrapper>
      <span
        role='img'
        aria-label='search'
      >
        🔎
      </span>
      <StyledInput
        onChange={handleInputChange}
        placeholder='Search by city or airport code'
      />
    </InputWrapper>
  );
}

export default SearchInput;
