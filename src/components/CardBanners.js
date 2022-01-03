import React from 'react';
import CardBanner from './CardBanner';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1em;
    padding: 0 4em;
`;

const CardBanners = () => {
  
  const Contents = [
    {"title": "Keuangan", "background": "/image/card-banner-1.png"},
    {"title": "K3 (Keselamatan dan Kesehatan Kerja)", "background": "/image/card-banner-2.png"},
    {"title": "Standar ISO", "background": "/image/card-banner-3.png"}
  ];

  const contentItems = Contents.map((content,i) => (
    <CardBanner key={i} content={content}/>
  ))
  
  return (
    <Wrapper>
      {contentItems}
    </Wrapper>
  );
};
  
export default CardBanners;