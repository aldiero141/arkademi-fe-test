import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:#efefef;
    padding: 5em;
    width: 100%;
    margin-top: -5em;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 20em 10em 20em 11em;
    gap: 0.5em;
    margin-bottom: 1em;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5em;
    h2{
        font-size: 0.875em;
        font-weight: 600;
        cursor: pointer;
    }
    p{
        font-size: 0.875em;
        font-weight: 500;
        margin: 0.5em 0;
        cursor: pointer;
    }
    h3{
        font-size: 0.875em;
        font-weight: 500;
        margin: 0.5em 0;
    }

`;
const Title = styled.h1`
    font-size: 1em;
    font-weight: 600;
`;


const Row = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0;
`;

const MobileApp = styled.img`
    cursor: pointer;
    width: 8em;
    margin-bottom: 1em;
`;

const Menu = () => {
    return (
        <Wrapper>
            <Grid>
                <Row>
                    <Title>Kelas Populer</Title>
                    <Content>
                        <img src='/image/footer-icon.svg' alt='icon'/>
                        <h2>Strategi Menjadi Entrepreneur Pemula yang Kreatif dan Produktif</h2>
                    </Content>
                    <Content>
                        <img src='/image/footer-icon.svg' alt='icon'/>
                        <h2>Membuat Website Profesional Untuk Perusahaan</h2>
                    </Content>
                    <Content>
                        <img src='/image/footer-icon.svg' alt='icon'/>
                        <h2>Personal Branding untuk Melesatkan Karir dan Bisnis</h2>
                    </Content>
                </Row>
                <Row>
                    <Title>Kelas Populer</Title>
                    <Content>
                        <p>Digital Marketing</p>
                    </Content>
                    <Content>
                        <p>Health & Safety</p>
                    </Content>
                    <Content>
                        <p>Karier</p>
                    </Content>
                    <Content>
                        <p>Kewirausahaan</p>
                    </Content>
                    <Content>
                        <p>Microsoft Excel</p>
                    </Content>
                    <Content>
                        <p>Prakerja</p>
                    </Content>
                    <Content>
                        <p>Psikotes</p>
                    </Content>
                    
                </Row>
                <Row>
                    <Title>Alat</Title>
                    <Content>
                        <p>Kalkulator Pajak Karyawan</p>
                    </Content>
                    <Content>
                        <p>Kalkulator Nilai Usaha</p>
                    </Content>
                    <Content>
                        <p>Tes Teknik Kewirausahaan</p>
                    </Content>
                    <Content>
                        <p>Diagnosa Usaha</p>
                    </Content>
                    <Content>
                        <p>FAQ</p>
                    </Content>
                    <Content>
                        <p>Karier</p>
                    </Content>
                    <Content>
                        <p>Privacy Policy</p>
                    </Content>
                </Row>
                <Row>
                    <Title>Arkademi Mobile App</Title>
                    <Content>
                        <h3>Belajar lebih nyaman lewat aplikasi Android dan iOS Arkademi</h3>
                    </Content>
                    <MobileApp src='/image/google-play.svg' alt='google-play'/>
                    <MobileApp src='/image/apple-store.svg' alt='apple-store'/>
                    <Content>
                        <h3>Terdaftar resmi di</h3>
                        <img src='/image/kominfo-logo.svg' alt='kominfo' width='30em'/>
                    </Content>
                </Row>
            </Grid>
        </Wrapper>
    );
};
  
export default Menu;