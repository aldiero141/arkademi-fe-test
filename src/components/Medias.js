import React from 'react';
import styled from 'styled-components';
import { Line } from './CategoryCards';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2em 0em;
  padding: 0 4em;
  padding-top: 1em;
  z-index: -1;
`;

const Text = styled.p`
  font-size: 1.375em;
  font-weight: 500;
  color: #CCC;
  text-align: center;
  margin-bottom: 2em;
`;

const Image = styled.img`
  margin-bottom: 2em;
`;


const Medias = () => {
    
  return (
    <>
      <Container>
          <Text>Media yang meliput kami</Text>
          <Image alt="logo" src='/image/media.svg' />
      </Container>
      <Line/>
    </>
  );
};
  
export default Medias;