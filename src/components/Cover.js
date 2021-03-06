import React from 'react';
import styled from 'styled-components';
import background from '../assets/cover-bg.png';
import { FiArrowRight } from "react-icons/fi";


export const CoverBG = styled.div`
    position: relative;
    width: 100%;
    height: 52vh;
    align-content: center;
    z-index: 1;
    background-image: url(${background});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: bottom;
`;

export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    padding:0 8em;   
`;

export const Text = styled.p`
    font-size: 0.9375em;
    font-weight: 500;
    color: #FFF;    
    margin-bottom: 2em;
`;

export const Title = styled.h1`
    font-size: 2.375em;
    font-weight: 600;
    color: #FFF;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 0.5em;
    background: #fff;
    padding: 1em 0.5em;
    width: 15em;
    font-size: 1.25em;
    font-weight: 600;
    color: #0265B4;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #0872C7;
    }
`;

const Cover = () => {
    return (
      <CoverBG>
          <TextContainer>
            <Title>
                Kursus dari Genggaman
            </Title>
            <Text>
                Tingkatkan karier dan raih pekerjaan yang anda impikan dengan <br/>
                memiliki sertifikat hard copy dari lembaga kursus yang kredibel dan <br/>
                belajar secara online.
            </Text>
            <Button>
                Daftar Sekarang
                <FiArrowRight />
            </Button>
          </TextContainer>
      </CoverBG>
    );
  };
    
export default Cover;