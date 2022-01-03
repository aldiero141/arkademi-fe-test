import React from 'react';
import styled from 'styled-components';
import backgorund from '../assets/prakerja-bg.svg';
import logo from '../assets/logo-prakerja.svg';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2em;
    padding: 0 4em;
    z-index: -1;
`;
export const Banner = styled.div`
    position: relative;
    width: 100%;
    height: 14vh;
    align-content: center;
    display: flex;
    background-image: url(${backgorund});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: bottom;
`;

export const TextContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 2em;
`;

export const Title = styled.h1`
    font-size: 1.3125em;
    font-weight: 600;
    color: #0872C7;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 0.5em;
    background: #FF7F26;
    padding: 1em 0.5em;
    width: 12em;
    font-weight: 600;
    color: #FFF;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #FFF;
        color: #FF7F26;
    }
`;

const PrakerjaBanner = () => {
    return (
        <Container>
            <Banner>
                <TextContainer>
                    <img alt="logo" src={logo} height="30em"/>
                    <Title>
                        Punya kupon Pelatihan Prakerja? Gunakan kuponnya di sini
                    </Title>
                    <Button>
                        Gunakan Kupon
                    </Button>
                </TextContainer>
            </Banner>
        </Container>
    );
  };
    
export default PrakerjaBanner;