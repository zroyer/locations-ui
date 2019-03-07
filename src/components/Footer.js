import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
  width: 100%;
  height: 34px;
  background-color: #F4F4F4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

const FooterLink= styled.a`
  color: #5c2b11;
  text-decoration: none;
`;

function Footer(props) {
  return (
    <FooterDiv>
      <FooterLink
        href='https://github.com/zroyer'
        target='_blank'
      >
        Made with
        <span
          role='img'
          aria-label='fiyah'
        >
          &nbsp;🔥&nbsp;
        </span>
        in Austin, TX
      </FooterLink>
    </FooterDiv>
  );
}

export default Footer;
