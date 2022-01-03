import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    width: 20em;
`;

export const Icon = styled.img`
    width: 10em;
`;

export const Title = styled.h1`
    font-size: 1.625em;
    font-weight: 600;
    color: #1C1D20;  
    text-align; center;
`;

export const Description = styled.p`
    font-size: 1em;
    font-weight: 500;
    color: #1C1D20;
    text-align: center;
`;

const Whys = (content) => {
    
  return (
    <Wrapper>
        <Icon src={content.content.icon} alt="icon"/>
        <Title>{content.content.title}</Title>
        <Description>{content.content.description}</Description>
    </Wrapper>
  );
};
  
export default Whys;