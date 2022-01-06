import React from 'react';
import Footer from '../components/Footer';
import styled from 'styled-components';
import CourseSidebar from '../components/CourseSidebar';
import CourseBody from '../components/CourseBody';
import CardCarousel from '../components/CardCarousel';

export const Body = styled.div`
    display: grid;
    margin-top: 3em;
    grid-template-columns: 50em 30em;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: -5em;
`;

const Course = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <Body>
        <CourseBody/>
        <CourseSidebar/>  
      </Body>
      <CardCarousel/>
      <Footer/>
    </>
  );
};
  
export default Course;