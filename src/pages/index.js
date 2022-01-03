import React from 'react';
import Cover from '../components/Cover';
import PrakerjaBanner from '../components/PrakerjaBanner';
import LogoStack from '../components/LogoStack';
import JPGBanners from '../components/JPGBanners';
import CardBanners from '../components/CardBanners';


const Home = () => {
    
  return (
      <>
        <Cover/>
        <PrakerjaBanner/>
        <JPGBanners/>
        <LogoStack/>
        <CardBanners/>
      </>
  );
};
  
export default Home;