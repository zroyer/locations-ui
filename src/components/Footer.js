import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
  width: 100%;
  height: 34px;
  background-color: #FCFBF0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

const FooterLink= styled.a`
  color: rgba(0, 0, 0, 0.87);
  text-decoration: none;
  :hover {
    text-decoration: underline;
    text-decoration-color: rgba(0, 0, 0, 0.87);
  }
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
          &nbsp;🌮
        </span>
        in Austin, TX
      </FooterLink>
    </FooterDiv>
  );
}

export default Footer;
