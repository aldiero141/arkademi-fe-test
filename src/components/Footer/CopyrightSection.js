import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto;   
    justify-content: space-between;
    gap: 5em;
    margin: -1em 0;
    padding: 0 5em;
    background-color: #1C1D20;
    width: 100%;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    
    gap: 1em;
    p{
        font-size: 0.875em;
        font-weight: 400;
        color: #FFF;
        margin-top: 1em;
    }
    h1{
        font-size: 0.875em;
        font-weight: 600;
        color: #FFF;
        margin-top: 1em;
    }
`;


const CopyrightSection = () => {
    return (
        <Wrapper>
            <Row>
                <p>
                    © 2017-2020 PT Arkademi Daya Indonesia
                </p>
            </Row>
            <Row>
                <h1>
                    Ketentuan Layanan
                </h1>
                <h1>
                    Kontak
                </h1>
            </Row>
        </Wrapper>
    );
};
  
export default CopyrightSection;