import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1em;
`;

const Title = styled.p`
    font-size: 1em;
    font-weight: 500;
    color: #ccc;
`;


const Payments = () => {
    return (
        <Wrapper>
            <Title>Metode Pembayaran</Title>
            <img src='/image/payment-methods.svg' alt='payment-methods'/>
        </Wrapper>
    );
};
  
export default Payments;