import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1.5em;
    background-color: #fff;
    width: 24em;
    text-align: center;
    gap: 1em;
`;

export const Picture = styled.img`
    width: 2.5em;
`;

export const Name = styled.h1`
    font-size: 1em;
    font-weight: 600;
    color: #1C1D20;
    margin: 0;
`;

export const Title = styled.h1`
    font-size: 0.875em;
    font-weight: 500;
    color: #CCC;
    margin: -1em 0;
`;

export const Comment = styled.h1`
    font-size: 1em;
    font-weight: 500;
    color: #1C1D20;
    text-align: justify;
    margin: 1em 0;
`;

const CategoryCard = (content) => {
    
  return (
    <Wrapper>
        <img src='/image/quotation.svg' alt="icon"/>
        <Comment>{content.content.comment}</Comment>
        <Picture src={content.content.picture} alt="picture"/>
        <Name>{content.content.name}</Name>
        <Title>{content.content.title}</Title>
    </Wrapper>
  );
};
  
export default CategoryCard;