import React from 'react';
import Whys from './Whys';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10em;
    margin: 5em 0em;
    padding: 0 4em;
`;
  
const WhySection = () => {
    const Contents = [
        {
            "title": "Belajar Full Online", 
            "description": "Semua kursus tersedia dan dibawakan secara online lewat recorded video. Anda",
            "icon": "/image/Radar.svg",
        },
        {
            "title": "Lembaga Kursus Resmi",
            "description": "Pilihan kursus yang luas beragam kategori yang diajarkan oleh berbagai lembaga kursus resmi untuk meningkatkan keahlian dan karier anda.", 
            "icon": "/image/Hat.svg",
        },
        {
            "title": "Sertifikat Cetak", 
            "description": "Berbagai kursus yang menawarkan sertifikat kelulusan atas nama anda yang dicetak (hard copy) dan dikirim langsung ke alamat anda.", 
            "icon": "/image/Paper.svg",
        },
    ];

    const WhysItems = Contents.map((content,i) => (
        <Whys key={i} content={content}/>
    ))

  return (
    <Wrapper>
      {WhysItems}
    </Wrapper>
  );
};
  
export default WhySection;