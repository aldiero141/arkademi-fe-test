import React from 'react';
import styled from 'styled-components';
import CourseCard from './CourseCards/CourseCard'
import Carousel from 'react-elastic-carousel';

const Wrapper = styled.div`
    margin-top: 10em;
    display: flex;
    flex-directon: row;
    height: 70vh;
    padding: 0 5em;
`;

const CardCarousel = () => {
    
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
             <Carousel itemsToShow={4} pagination={false}>
                {CardItems}
            </Carousel>
        </Wrapper>
    );
};
  
export default CardCarousel;