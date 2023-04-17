import React, { useContext } from 'react'
import styled from "@emotion/styled";
import { deleteProduct } from '../services/product-service';
import { DishesContext } from '../context/DishesContext';

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '#333333',
  opacity: 0.9,
  zIndex: 1000
};
const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 18.8em;
  height: 13.6em;
  background-color: #F6F6F9;
  opacity: 1;
  border-radius: 1.3em;
  padding: 1.5em;
  z-index: 1000;
`;
const StyledQuestion = styled.p`
  font-weight: 600;
  font-size: 1.4em;
  line-height: 1.8em;
  text-align: center;
  color: #333333;
`;
const StyledButtonOk = styled.button`
  width: 16.4em;
  height: 2.9em;
  border: none;
  background: #FA4A0C;;
  border-radius: 1.9em;
  font-weight: 600;
  font-size: 1.1em;
  line-height: 1.4em;
  color: #FFFFFF;
  margin: 1em auto 1em auto;
`;
const StyledButtonQuit = styled.button`
  width: 16.4em;
  height: 2.9em;
  border: none;
  background: #EFB60E;
  border-radius: 1.9em;
  font-weight: 600;
  font-size: 1.1em;
  line-height: 1.4em;
  color: #FFFFFF;
`;

export default function ModalContent({ onClose }) {
  const { dish } = useContext(DishesContext);

  function handleDelete() {
    deleteProduct(dish.id);
    onClose();
  }

  return (
    <>
      <div style={OVERLAY_STYLES} />
      <ModalContainer>
        <div className="modal">
          <StyledQuestion>Are you sure?</StyledQuestion>
          <StyledButtonOk onClick={handleDelete}>Yes, delete it!</StyledButtonOk>
          <StyledButtonQuit onClick={onClose}>No, cancel!</StyledButtonQuit>
        </div>
      </ModalContainer>
    </>
  );
}