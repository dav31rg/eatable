import styled from '@emotion/styled';
import React, { useContext } from 'react'
import DishForm from '../components/Form';
import { DishesContext } from '../context/DishesContext';

const StyledTitle = styled.p`
  font-weight: 600;
  font-size: 1.4em;
  line-height: 1.8em;
  text-align: center; 
  margin-top: 3em;
  margin-bottom: 3em;
`;

const EditDish = () => {
  const { dish } = useContext(DishesContext);
  
  return (
    <>
      <StyledTitle>Edit Product</StyledTitle>
      <DishForm buttonName="Save" props={dish} />
    </>
  )
}

export default EditDish