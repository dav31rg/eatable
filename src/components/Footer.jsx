import styled from '@emotion/styled';
import React from 'react'
import { Link } from 'react-router-dom';

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: 24.3em;
  display: flex;
  justify-content: center;
  padding: 0.8em 0;
  background-color: #F6F6F9;
`;
const StyledButton = styled.button`
  width: 19.4em;
  height: 4.4em;
  border-radius: 1.9em;
  border: none;
  font-size: 1.1em;
  font-weight: 600;
  line-height: 1.4em;
  color: #FFFFFF;
  background-color: #FA4A0C;
  cursor: pointer;
`;

const Footer = ({title, to}) => {
  return (
    <StyledFooter>
      <Link to={to}>
        <StyledButton>{title}</StyledButton>
      </Link>
    </StyledFooter>
  );
}

export default Footer