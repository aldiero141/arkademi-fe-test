import React from 'react';
import styled from 'styled-components';
import CourseCard from './CourseCard';
import { NavLink as Link } from 'react-router-dom';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 4em;
    margin-top: 2em;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1em;
    padding: 0 5em;
`;

export const Title = styled.h1`
    font-size: 1.3750em;
    font-weight: 600;
    color: #1C1D20;
`;

export const ButtonLink = styled(Link)`
    font-size: 1em;
    font-weight: 600;
    color: #159EFA;
    text-decoration: none;
    cursor: pointer;  
`;

export const Body = styled.div`
    display: flex;
    flex-direction: rows;
    justify-content: center;
    align-items: center;
    gap: 2em;
`;

const AllCourses = (type) => {
    const Courses = [
        {
            "title": "Strategi Menjadi Entrepreneur Pemula yang Kreatif dan..", 
            "score": "4.5",
            "capacity": "2500",
            "author": "Arkademi",
            "price": "Rp. 149.000",
            "initial": "Rp. 149.000",
            "save": "Rp. 149.000",
        },
        {
            "title": "Strategi Menjadi Entrepreneur Pemula yang Kreatif dan..", 
            "score": "4.5",
            "capacity": "2500",
            "author": "Arkademi",
            "price": "Rp. 149.000",
            "initial": "Rp. 250.000",
            "save": "Rp. 99.000",
        },
        {
            "title": "Strategi Menjadi Entrepreneur Pemula yang Kreatif dan..", 
            "score": "4.5",
            "capacity": "2500",
            "author": "Arkademi",
            "price": "Rp. 149.000",
            "initial": "Rp. 149.000",
            "save": "Rp. 149.000",
        },
        {
            "title": "Strategi Menjadi Entrepreneur Pemula yang Kreatif dan..", 
            "score": "4.5",
            "capacity": "2500",
            "author": "Arkademi",
            "price": "Rp. 149.000",
            "initial": "Rp. 149.000",
            "save": "Rp. 149.000",
        },
    ];
    
    const CardItems = Courses.map((course,i) => (
        <CourseCard key={i} course={course}/>
    ))
    
    return (
        <Wrapper>
            <Header>
                <Title>{type.type.title}</Title>
                <ButtonLink to='/allCourse'>Lihat Semua</ButtonLink>
            </Header>
            <Body>
                {CardItems}
            </Body>
        </Wrapper>
    );
};
  
export default AllCourses;