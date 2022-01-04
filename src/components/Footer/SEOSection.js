import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto;   
    justify-content: center;
    gap: 5em;
    padding: 5em;
    background-color: #CCC;
    width: 100%;
`;

const Title = styled.h1`
    font-size: 1em;
    font-weight: 700;
    color: #1C1D20;
    margin-bottom: 0.5em;
`;

const Row = styled.div`
    display: flex;
    flex-direction: column;
    
    p{
        font-size: 0.875em;
        font-weight: 500;
        margin: 0.5em 0;
        color: #333;
        line-height: 1.5em;
        
    }
`;

const Image = styled.img`
    width: 8em;
    margin-bottom: 0.5em;

`;

const SEOSection = () => {
    return (
        <Wrapper>
            <Row>
                <Image src='/image/arkademi-icon.svg' alt='icon' />
                <p>
                    Arkademi adalah massive open online course (MOOC) platform karya <br/>
                    anak bangsa Indonesia. Pembelajaran di Arkademi dikhususkan untuk <br/>
                    pembelajaran berbasis keahlian yang diantarkan melalui kelas belajar <br/> 
                    dan kursus online melalui aplikasi Arkademi berbasis mobile app dan <br/>
                    web. Di Arkademi setiap individu dan lembaga kursus dapat membuka <br/> 
                    dan mengkomersialkan kelas onlinenya dan menjangkau siswa dari <br/>
                    seluruh Indonesia.
                </p>
            </Row>
            <Row>
                <Title>Akselerator</Title>
                <p>
                    Arkademi adalah bagian program inkubasi dan akselerator dari perusahaan top-level <br/>
                    dunia: SOSV MOX (Mobile Only Accelerator), Amazon Web Service (Edstart Program) <br/>
                    dan Y Combinator (Startup School) yang dipilih dari tech startup edukasi terbaik <br/>
                    dunia
                </p>
                <img src='/image/startup-logo.svg' alt='startup-logo' width='240px'/>
            </Row>
        </Wrapper>
    );
};
  
export default SEOSection;