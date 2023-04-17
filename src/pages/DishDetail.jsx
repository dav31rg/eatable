import styled from '@emotion/styled';
import React, { useContext } from 'react'
import Footer from '../components/Footer';
import { DishesContext } from '../context/DishesContext';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImageContainer = styled.div`
    margin-top: 5.9em;
    width: 15.1em;
    height: 15.1em;
    margin-bottom: 5.7em;
`;
const StyledImage = styled.img`
  width: 15.1em;
  height: 15.1em;
  border-radius: 50%;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
`;
const StyledTitle = styled.p`
  font-size: 1.8em;
  font-weight: 600;
  line-height: 2.2em;
  text-align: center;
  color: #333333;
`;
const StyledPrice = styled.p`
  font-size: 1.8em;
  font-weight: 600;
  line-height: 2.2em;
  text-align: center;
  color: #FA4A0C;
`;
const TextContainer = styled.div`
  margin: 0.3em 3.3em 16em 3.3em;
`;
const StyledDescTitle = styled.p`
  font-size: 1.1em;
  font-weight: 600;
  line-height: 1.4em;
`;
const StyledDescContent = styled.p`
  font-size: 1em;
  font-weight: 400;
  line-height: 1.3em;
`;

const DishDetail = () => {
  const { dish } = useContext(DishesContext);
  const title = dish
    .name
    .split(" ")
    .map((word) => word.substring(0,1).toUpperCase() + word.substring(1))
    .join(" ");
  
  return (
    <StyledWrapper>
      <ImageContainer>
        <StyledImage src={dish.picture_url} alt="" />
      </ImageContainer>
      <div>
        <StyledTitle>{title}</StyledTitle>
        <StyledPrice>${dish.price}</StyledPrice>
      </div>
      <TextContainer>
        <StyledDescTitle>Description</StyledDescTitle>
        <StyledDescContent>{dish.description}</StyledDescContent>
      </TextContainer>
      <Footer title="Go Back" to="/"/>
    </StyledWrapper>
  )
}

export default DishDetail