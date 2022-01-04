import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5em 0;
    padding: 2em;
    gap: 0.5em;
    background-color: #0872C7;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 1.75em;
    font-weight: 700;
    color: #FFF;
    margin: 0;
`;

const Description = styled.p`
    font-size: 1.25em;
    font-weight: 500;
    color: #FFF;
    margin: 0;
    margin-bottom: 1em;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    border-radius: 0.5em;
    background: #FFF;
    padding: 0.75em 1.75em;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    font-weight: 600;
    color: #0872C7;
    outline: none;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #DDD;
        color: #0872C7;
        border: 1px solid transparent;
    }
`;

const ApplyNow = () => {
    
  return (
    <Wrapper>
      <img src='/image/blackboard.svg' alt='icon'/>
      <Title>Daftar Menjadi Pengajar</Title>
      <Description>
        Mengajar ke siswa dari seluruh Indonesia tanpa batas dengan mengajar secara online di Arkademi. Biaya Rp0.
      </Description>
      <Button>Mulai Mengajar</Button>
    </Wrapper>
  );
};
  
export default ApplyNow;