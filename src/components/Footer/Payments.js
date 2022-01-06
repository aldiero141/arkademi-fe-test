import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: -1em;
    margin-top: -5em;
    background-color:#efefef;
    padding: 5em;
    width: 100%;
`;

const Title = styled.p`
    font-size: 1em;
    font-weight: 500;
    color: #ccc;
`;

const Line = styled.hr`
    display: flex;
    margin-bottom: 1em;
    height: 1px;
    width: 100%;
    border: 0;
    border-top: 1px solid #ccc;
    padding: 0;
`;

const Payments = () => {
    return (
        <Wrapper>
            <Line/>
            <Title>Metode Pembayaran</Title>
            <img src='/image/payment-methods.svg' alt='payment-methods'/>
        </Wrapper>
    );
};
  
export default Payments;