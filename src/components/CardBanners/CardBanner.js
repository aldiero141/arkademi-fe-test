import React from 'react';
import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20vh;
  align-content: center;
  justify-content: center;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2em; 
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  padding:0 2em;
`;

export const Text = styled.p`
  font-size: 1.25em;
  font-weight: 600;
  color: #fff;    
`;

export const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 600;
  color: #fff;
`;

export const Arrow = styled.img`
  width: 4em;
  right: 0;
`;

const CardBanner = (content) => {
 
  return (
    <Background style={{ backgroundImage: `url(${content.content.background})` }}>
        <Container>
          <TextContainer>
            <Text>Menjadi Ahli</Text>
            <Title>{content.content.title}</Title>
          </TextContainer>
          <Arrow src='/image/Path.svg' />
        </Container>
        
    </Background>
  );
};
  
export default CardBanner;