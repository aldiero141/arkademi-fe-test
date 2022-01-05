import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2em;
    border-radius: 20px;
    border: 1px solid #f2f2f2;
    background-color: #fff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
    box-sizing: border-box;
`;

const Stats = styled.div`
    display: grid;
    grid-template-columns: 1em auto ;
    align-items: center;
    margin-top: 1em;
    p{
        text-align: left;
        font-size: 0.875em;
        font-weight: 500;
        line-height: 0.5em;
        margin-left: 1em;
    }
`;

const InitPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: -1em;
    line-height: 0;
`;

const Author = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5em;
    p{
        font-size: 0.875em;
        font-weight: 500;
        line-height: 0;
    }
`;

const From = styled.p`
    font-size: 0.7625em;
    font-weight: 600;
    color: #BABABB;
    text-decoration: line-through;
`;

const Saves = styled.p`
    font-size: 1.250em;
    font-weight: 500;
    color: #FE5C63;
`;

const Price = styled.p`
    font-size: 1.6875em;
    font-weight: 900;
    color: #1C1D20;
    justify-content: flex-start;
    margin-bottom: 1em;
    line-height: 0;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    border-radius: 0.5em;
    background: #FF5718;
    padding: 0.75em 1.75em;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    font-weight: 600;
    color: #FFFFFF;
    outline: none;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #FFFFFF;
        color: #FF5718;
        border: 1px solid #FF5718;
    }
`;

const Icon = styled.button`
    display: flex;
    align-items: center;
    border-radius: 0.25em;
    background: #FFFFFF;
    padding: 0.25em 0.25em;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    font-weight: 600;
    color: #FFFFFF;
    outline: none;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #FFFFFF;
        color: #FF5718;
        border: 1px solid #0D78BF;
    }
`;

const IconDisabled = styled.button`
    display: flex;
    align-items: center;
    border-radius: 0.25em;
    background: #FFFFFF;
    padding: 0.25em 0.25em;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    font-weight: 600;
    color: #FFFFFF;
    outline: none;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    filter: grayscale(100%);

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #FFFFFF;
        color: #FF5718;
        border: 1px solid #ccc;
    }
`;

const Marketplace = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2em 0;
    gap: 1em;
`;
const Description = styled.div`
    font-size: 0.8125em;
    font=weight: 600;
    color: #ccc;
    
`;
const IconContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 1em;
`;
const SocialMedia = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1em;
    justify-content: center;
    align-items: center;
`;

const Line = styled.hr`
    display: flex;
    height: 1px;
    width: 100%;
    border: 0;
    border-top: 1px solid #ccc;
    padding: 0;
`;

const CourseSidebar = () => {
  return (
    <Wrapper>
        <Container>
            <InitPrice>
                <From>Rp 250.000</From>
                <Saves>Hemat Rp 99.000</Saves>
            </InitPrice>
            <Price>Rp 149.000</Price>
            <Button>Gabung Ke Kelas</Button>
            <Stats>
                <img alt="logo" src="/image/bars.svg" height="16px"/> 
                <p>Level pemula</p>
                <img alt="logo" src="/image/clock.svg" height="16px"/> 
                <p>Durasai belajar 30 hari</p>
                <img alt="logo" src="/image/vid.svg" height="16px"/> 
                <p>Jumlah 15 seri</p>
                <img alt="logo" src="/image/question.svg" height="16px"/> 
                <p>1 kuis</p>
                <img alt="logo" src="/image/certificate.svg" height="16px"/> 
                <p>Sertifikat kelas</p>
            </Stats>
            <Line/>
            <Author>
                <img alt="logo" src="/image/Arkademi.png" height="16px"/> 
                <p>ARKADEMI</p>
            </Author>
            <Line/>
            <Marketplace>
                <Description>Kursus prakerja ini tersedia di</Description>
                <IconContainer>
                    <Icon><img alt="logo" src="/image/tokopedia-logo.svg" height="12px"/></Icon>
                    <Icon><img alt="logo" src="/image/bukalapak-logo.svg" height="12px"/></Icon>
                    <Icon><img alt="logo" src="/image/cakap-logo.svg" height="12px"/></Icon>
                    <Icon><img alt="logo" src="/image/sekolahmu-logo.svg" height="12px"/></Icon>
                    <IconDisabled><img alt="logo" src="/image/pintaria-logo.svg" height="12px"/></IconDisabled>
                    <Icon><img alt="logo" src="/image/mba-logo.svg" height="12px"/></Icon>
                </IconContainer>
            </Marketplace>
            <SocialMedia>
                <img alt="icon" src="/image/facebook-icon.svg" height="32px"/> 
                <img alt="icon" src="/image/linkdin-icon.svg" height="32px"/> 
                <img alt="icon" src="/image/twitter-icon.svg" height="32px"/> 
            </SocialMedia>
        </Container>
    </Wrapper>
  );
};
  
export default CourseSidebar;