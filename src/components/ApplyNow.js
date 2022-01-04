import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5em 5em;
    background-image: url(/image/apply-bg.svg);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
`;

const Title = styled.h1`
    font-size: 2.5em;
    font-weight: 700;
    color: #1C1D20;  
    text-align: center;
`;

const Description = styled.p`
    font-size: 1em;
    font-weight: 600;
    color: #1C1D20;
    text-align: center;
    margin-bottom: 5em;
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

const ApplyNow = () => {
    
  return (
    <Wrapper>
      <img src='/image/satisfaction.svg' alt='icon'/>
      <Title>Jarak dan Waktu Bukan Masalah Lagi</Title>
      <Description>
            Arkademi menyediakan layanan kursus bersertifikat dengan cara belajar full online dari mobile app atau web. Tersedia puluhan <br/>
            kelas kursus berkualitas tinggi dalam berbagai kategori yang disediakan lembaga kursus resmi atau institusi. Sertifikat hard copy <br/>
            akan dikirim langsung ke alamat anda. Kini anda bisa mengikuti kursus yang anda butuhkan tanpa terikat tempat dan waktu <br/>
            dengan harga yang sangat terjangkau.
      </Description>
      <Button>DAFTAR SEKARANG</Button>
    </Wrapper>
  );
};
  
export default ApplyNow;