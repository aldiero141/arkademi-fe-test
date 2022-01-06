import React from 'react';
import Footer from '../components/Footer';
import styled from 'styled-components';
import CourseSidebar from '../components/CourseSidebar';
import CourseBody from '../components/CourseBody';

export const Body = styled.div`
    display: grid;
    margin-top: 3em;
    grid-template-columns: 50em 30em;
    align-items: flex-start;
    justify-content: center;
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