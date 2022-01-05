import React from 'react';
import Footer from '../components/Footer';
import styled from 'styled-components';
import CourseSidebar from '../components/CourseSidebar';
import CourseBody from '../components/CourseBody';

export const Body = styled.div`
    display: grid;
    grid-template-columns: auto 30em;
`;
const Course = () => {
  return (
    <>

      <Body>
        <CourseBody/>
        <CourseSidebar/>
      </Body>
      <Footer/>
    </>
  );
};
  
export default Course;