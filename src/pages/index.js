import React from 'react';
import Cover from '../components/Cover';
import PrakerjaBanner from '../components/PrakerjaBanner';
import LogoStack from '../components/LogoStack';
import JPGBanners from '../components/JPGBanners';
import CardBanners from '../components/CardBanners';
import CourseCards from '../components/CourseCards';
import AllCourses from '../components/AllCourses';
import WhySection from '../components/WhySection';
import CategoryCards from '../components/CategoryCards';


const Home = () => {
  const Contents = [
    {
        "title": "Sedang Diskon", 
        "icon": "/image/hot-sale.svg",
    },
    {
        "title": "Kursus Terbaru", 
        "icon": "/image/new.svg",
    },
    {
        "title": "Best Seller", 
        "icon": "/image/award.svg",
    },
  ];

  const Types = [
    {
        "title": "Kursus Bersertifikat", 
    },
    {
        "title": "Kursus Bisnis", 
    },
    {
        "title": "Kursus Keuangan", 
    },
  ];

  const CoursesCardsList = Contents.map((content,i) => (
    <CourseCards key={i} content={content}/>
  ))

  const AllCoursesCardsList = Types.map((type,i) => (
    <AllCourses key={i} type={type}/>
  ))

  return (
      <>
        <Cover/>
        <PrakerjaBanner/>
        <JPGBanners/>
        <LogoStack/>
        <CardBanners/>
        {CoursesCardsList}
        <WhySection/>
        {AllCoursesCardsList}
        <CategoryCards/>
      </>
  );
};
  
export default Home;