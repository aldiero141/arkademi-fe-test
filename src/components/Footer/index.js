import React from 'react';
import styled from 'styled-components';
import CopyrightSection from './CopyrightSection';
import Menu from './Menu';
import Payments from './Payments';
import SEOSection from './SEOSection';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin: 1em 5em;
    align-items: center;
    justify-content: center;
`;


const Footer = () => {
    return (
        <Wrapper>
            <Menu/>
            <Payments/>
            <SEOSection/>
            <CopyrightSection/>
        </Wrapper>
    );
};
export default Footer;