import React from 'react';
import styled from '@emotion/styled';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { createProduct, editProduct } from '../services/product-service';

const StyledLable = styled.label`
  display: block;
  font-weight: 600;
  font-size: 0.9em;
  line-height: 1.1em;
  color: #B8B8BB;
  margin-top: 1em;
  margin-bottom: 2.1em;
`;
const StyledButton = styled.button`
  margin-top: 20em;
  margin-bottom: 0.8em;
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
const fieldStyle = {
  width: "21.9em",
  borderTop: "none",
  borderLeft: "none",
  borderRight: "none",
  borderBottom: "1px solid #333333",
  background: "#F6F6F9",
};
const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const DishForm = ({ buttonName, props = {} }) => {
  const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{
          id: props.id ? props.id : "",
          name: props.name ? props.name : "",
          price: props.price ? props.price : "",
          description: props.description ? props.description : "",
          category: props.category ? props.category : "",
          picture_url: props.picture_url ? props.picture_url : "",
        }}
        validate={(value) => {
          let faults = {};
          
          if (!value.name) {
            faults.name = "Title is mandatory";
          }
          if (!value.price) {
            faults.price = "Price is mandatory";
          }
          if (!value.description) {
            faults.description = "Description is mandatory";
          }
          if (!value.category) {
            faults.category = "Category is mandatory";
          }
          if (!value.picture_url) {
            faults.picture_url = "Picture is mandatory";
          }
          
          return faults;
        }}
         onSubmit={(values, {resetForm}) => {
          if (buttonName === "Create") {
            createProduct(values);
            resetForm();
            navigate('/');
          }
          if (buttonName === "Save") {
            editProduct(props.id, values);
            resetForm();
            navigate('/');
          }
          
        }}
      >
        {({ errors, isValid }) => (
          <Form style={formStyle}>
            <div>
              <StyledLable htmlFor="dishName">Name</StyledLable>
              <Field 
                type="text"
                id="dishName"
                name="name"
                style={fieldStyle}
              />
              <ErrorMessage name='name' component={() => (
                  <p>{errors.name}</p>
                )}/>
            </div>
            <div>
              <StyledLable htmlFor="dishPrice">Price</StyledLable>
              <Field 
                type="text"
                id="dishPrice"
                name="price"
                style={fieldStyle}
              />
              <ErrorMessage name='price' component={() => (
                  <p>{errors.price}</p>
                )}/>
            </div>
            <div>
              <StyledLable htmlFor="dishDescription">Description</StyledLable>
              <Field 
                id="dishDescription"
                name="description"
                as="textarea"
                style={fieldStyle}
              />
              <ErrorMessage name='description' component={() => (
                  <p>{errors.description}</p>
                )}/>
            </div>
            <div>
              <StyledLable htmlFor="dishCategory">Category</StyledLable>
              <Field 
                type="text"
                id="dishCategory"
                name="category"
                style={fieldStyle}
              />
              <ErrorMessage name='category' component={() => (
                  <p>{errors.category}</p>
                )}/>
            </div>
            <div>
              <StyledLable htmlFor="dishUrl">Picture URL</StyledLable>
              <Field 
                type="text"
                id="dishUrl"
                name="picture_url"
                style={fieldStyle}
              />
              <ErrorMessage name='picture_url' component={() => (
                  <p>{errors.picture_url}</p>
                )}/>
            </div>
            <StyledButton disabled={!isValid} type="submit">{buttonName}</StyledButton>
          </Form>
        )}  
      </Formik>
    </>
  );
}

export default DishForm