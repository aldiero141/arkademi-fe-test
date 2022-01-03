import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2em;
    padding: 0 4em;
    z-index: -1;
`;
export const Banner = styled.img`
    position: relative;
    width: 100%;
    height: 30vh;
    align-content: center;
    display: flex;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: bottom;
    cursor: pointer;
`;

const PrakerjaBanner = ( banner ) => {
   
    return (
        <Container>
            <Banner src={banner.banner} alt={"test"}/>
        </Container>
    );
  };
    
export default PrakerjaBanner;