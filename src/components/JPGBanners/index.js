import React from 'react';
import JPGBanner from './JPGBanner';



const PrakerjaBanner = () => {
    const BannerURL = ["/image/banner-1.svg","/image/banner-2.svg"]
    const BannerItems = BannerURL.map((banner,i) => (
        <JPGBanner key={i} banner={banner}/>
    ))
    
    return (
        <>
            {BannerItems}
        </>
    );
  };
    
export default PrakerjaBanner;