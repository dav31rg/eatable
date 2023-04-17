import styled from '@emotion/styled';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { DishesContext } from '../context/DishesContext';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';

const DishCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 9.8em;
  height: 13.3em;
  background-color: #FFFFFF;
  border-radius: 1.9em;
  margin: 3.6em 1.3em;
`;
const StyledImg = styled.img`
  position: relative;
  top: -2.4em;
  border-radius: 50%;
  width: 8.1em;
  height: 8.1em;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const StyledName = styled.p`
  position: relative;
  top: -0.8em;
  font-weight: 600;
  font-size: 1.30em;
  font-style: normal;
  line-height: 1.7em;
  text-align: center;
  margin-block-start: 0;
  margin-block-end: 0;
  width: 130px;
  height: 28px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const StyledPrice = styled.p`
  position: relative;
  color: #FA4A0C;
  top: -0.8em;
  font-weight: 600;
  font-size: 1.30em;
  font-style: normal;
  line-height: 1.7em;
  text-align: center;
  margin-block-start: 0;
  margin-block-end: 0;  
`;
const StyledLinkContainer = styled.div`
  position: relative;
  top: -0.8em;
`;
const StyledLink = styled.img`
  margin: 0 1.9em;
`;
const StyledButton = styled.button`
  border: none;
  background-color: white;
`;


const DishCard = ( {product} ) => {
  const { setDish } = useContext(DishesContext);
  const [showModal, setShowModal] = useState(false)

  const title = product
    .name
    .split(" ")
    .map((word) => word.substring(0,1).toUpperCase() + word.substring(1))
    .join(" ");

    function handleCLick() {
      setDish(product)
    }

  return (
    <DishCardContainer>
      <Link to="/dish" onClick={handleCLick}>
        <StyledImg src={product.picture_url} alt="Image of dish" />
      </Link>
      <InfoContainer>
        <StyledName>{title}</StyledName>
        <StyledPrice>${product.price / 100}</StyledPrice>
        <StyledLinkContainer>
          <Link to="/edit" onClick={handleCLick} > 
            <StyledLink src="src/assets/editIco.svg" alt="Link edit dish" />
          </Link>
          <StyledButton onClick={() => {
            setShowModal(true);
            handleCLick();
            }} 
          >
            <StyledLink src="src/assets/deleteIco.svg" alt="Link delete dish" />
          </StyledButton>
          {showModal && createPortal(
            <ModalContent onClose={() => setShowModal(false)}/>,
            document.body
          )}
        </StyledLinkContainer>
      </InfoContainer>
    </DishCardContainer>
  );
}

export default DishCard