import styled from '@emotion/styled';
import React, { useContext } from 'react'
import { DishesContext } from '../context/DishesContext'
import DishCard from '../components/DishCard';
import Footer from '../components/Footer';

const FoodListWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  max-width: 20.7em;
`;
const StyledTitle = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 1.38em;
  line-height: 1.8em;
  text-align: center;
  margin-top: 3em;
`;

const DishesList = () => {
  const { dishesList } = useContext(DishesContext);
  
  return (
    <>
      <StyledTitle>Products Dashboard</StyledTitle>
      <FoodListWrapper>
        {dishesList.map((product) => (
          <DishCard key={product.id} product={product}/>
        ))}
      </FoodListWrapper>
      <Footer title="Create Product" to="/create" />   
    </>
  )
}

export default DishesList