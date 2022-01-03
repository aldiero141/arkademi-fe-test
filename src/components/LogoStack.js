import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo-stack.svg';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    margin: 2em 0em;
    padding: 0 4em;
    padding-top: 1em;
    z-index: -1;
`;


const LogoStack = () => {
    
  return (
    <Container>
        <img alt="logo" src={logo} height="100%"/>
    </Container>
  );
};
  
export default LogoStack;