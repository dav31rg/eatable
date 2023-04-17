import styled from '@emotion/styled';
import React from 'react'
import DishForm from '../components/Form'

const StyledTitle = styled.p`
  font-weight: 600;
  font-size: 1.4em;
  line-height: 1.8em;
  text-align: center; 
  margin-top: 3em;
  margin-bottom: 3em;
`;

const CreateDish = () => {
  return (
    <>
      <StyledTitle>Create Product</StyledTitle>
      <DishForm buttonName="Create" />
    </>
  )
}

export default CreateDish