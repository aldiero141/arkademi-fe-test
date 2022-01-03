import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1.5em;
    border-radius: 0.5em;
    border: 1px solid #ccc;
    background-color: #fff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
    box-sizing: border-box;
    height: 10em;
    width: 10em;
`;

export const Icon = styled.img`
    width: 2.5em;
`;

export const Title = styled.h1`
    font-size: 1.1875em;
    font-weight: 600;
    color: #1C1D20;  
    text-align: center;
`;

const CategoryCard = (content) => {
    
  return (
    <Wrapper>
        <Icon src={content.content.icon} alt="icon"/>
        <Title>{content.content.title}</Title>
    </Wrapper>
  );
};
  
export default CategoryCard;