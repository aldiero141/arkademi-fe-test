import React from 'react';
import CategoryCard from './CategoryCard';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.2em;
    margin: 5em 0em;
    padding: 0 4em;
`;
export const Line = styled.hr`
    display: flex;
    height: 1px;
    width: 80%;
    border: 0;
    border-top: 1px solid #ccc;
    padding: 0;
`;
const CategoryCards = () => {
    const Contents = [
        {
            "title": "Semua Kelas", 
            "icon": "/image/semuakelas.svg",
        },
        {
            "title": "Kewirausahaan",
            "icon": "/image/kewirausahaan.svg",
        },
        {
            "title": "Pemasaran", 
            "icon": "/image/pemasaran.svg",
        },
        {
            "title": "Digital Marketing", 
            "icon": "/image/digital.svg",
        },
        {
            "title": "Teknologi",
            "icon": "/image/artificial-intelligence.svg",
        },
        {
            "title": "Multimedia", 
            "icon": "/image/multimedia.svg",
        },
        {
            "title": "Kesehatan", 
            "icon": "/image/kesehatan.svg",
        },
    ];

    const CategoryItems = Contents.map((content,i) => (
        <CategoryCard key={i} content={content}/>
    ))

  return (
    <>
        <Wrapper>
            {CategoryItems}
        </Wrapper>
        <Line/>
    </>
  );
};
  
export default CategoryCards;