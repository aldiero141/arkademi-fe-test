import React from 'react';
import styled from 'styled-components';
import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Review from './Review';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Overall = styled.div`
    display: grid;
    grid-template-columns: auto 25em;
    gap: 1em;
    margin-bottom: 3em;
`;

const OverallScore = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Score = styled.div`
    font-size: 5em;
    font-weight: 600;
`;

const DetailedScore = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
`;


const Reviews = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

export const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#F7D400',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
    '& .MuiRating-sizeLarge	': {
        width: '5em',
    },
});


function LinearProgressWithLabel(props, ratingValue) {
    return (
        <Box sx={{ display: "flex", alignItems: "center", width: "100%", }}>
            <Box sx={{ width: "100%", mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap:"1em", minWidth: 35 }}>
            <StyledRating name="read-only" value={props.rating} size="medium" readOnly />
            <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value
            )}%`}</Typography>
        </Box>
        </Box>
    );
}
  
LinearProgressWithLabel.propTypes = {
/**
 * The value of the progress indicator for the determinate and buffer variants.
 * Value between 0 and 100.
 */
    value: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
};

const CourseRatings = () => {
    
    const ReviewComments = [
        {
            "comment": "Sangat membantu bagaimana cara menguasai bahasa inggris dengan mudah, saya setuju bahwa bahasa inggris bukanlah bahasa yang sulit untuk dipahami, asalkan kita paham bagaimana caranya, berkat pembelajaran ini sedikit banyak sudah membantu saya.", 
            "name": "Amanada",
            "time": "2 hari",
        },
        {
            "comment": "The course is very good for beginners. I learnt a lot during the course but still there is a lot more to learn.", 
            "name": "John",
            "time": "3 hari",
        },
        {
            "comment": "Manfaat kelas online sangat terasa sekali, terutama untuk mempermudah bagi pemula seperti saya. Terutama bagi yang ingin mencoba dalam dunia kerja", 
            "name": "Dimas",
            "time": "4 hari",
        },
        {
            "comment": "The course is very good for beginners. I learnt a lot during the course but still there is a lot more to learn.", 
            "name": "Setyawan",
            "time": "5 hari",
        },
        {
            "comment": "Manfaat kelas online sangat terasa sekali, terutama untuk mempermudah bagi pemula seperti saya. Terutama bagi yang ingin mencoba dalam dunia kerja", 
            "name": "Niki",
            "time": "6 hari",
        },
    ];
    
    const ReviewsItem = ReviewComments.map((content,i) => (
        <Review key={i} content={content}/>
    ))

  return (
    <Wrapper>
        <Overall>
            <OverallScore>
                <Score>4.5</Score>
                <StyledRating name="read-only" value={4.5} size="large" readOnly />
            </OverallScore>
            <DetailedScore>
                <LinearProgressWithLabel value={80} rating={5} />
                <LinearProgressWithLabel value={30} rating={4}/>
                <LinearProgressWithLabel value={0} rating={3}/>
                <LinearProgressWithLabel value={1} rating={2}/>
                <LinearProgressWithLabel value={0} rating={1}/>
            </DetailedScore>
        </Overall>
        <Reviews>
            {ReviewsItem}
        </Reviews>
    </Wrapper>
  );
};
  
export default CourseRatings;