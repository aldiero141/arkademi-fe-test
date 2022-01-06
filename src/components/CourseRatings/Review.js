import React from 'react';
import styled from 'styled-components';
import { StyledRating } from './index'

const Wrapper = styled.div`
    display: grid;
    p{
        font-size: 0.875em;
        font-weight: 500;
    }
`;
const Reviewer = styled.div`
    display: flex;
    margin-top: -1em;
    align-items: flex-start;
    p{
        font-size: 1.25em;
        font-weight: 700;
    }
    span{
        margin-left: 1em;
        font-size: 0.875em;
        font-weight: 500;
    }
`;


const Review = (content) => {
  
  return (
      <Wrapper>
        <StyledRating name="read-only" value={4.5} size="small" readOnly />
        <p>
            {content.content.comment}
        </p>
        <Reviewer>
            <p> {content.content.name}<span>{content.content.time} yang Lalu</span></p>
        </Reviewer>
      </Wrapper>
    
  );
};
  
export default Review;