import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5em;
    padding-top: 6em;
    border-radius: 20px;
    border: 1px solid #f2f2f2;
    background-color: #fff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
    box-sizing: border-box;
    height: 100%;
    width: 18em;
`;

const Card = styled.div`
    display: flex;
    position: relative;
    width: 13em;
    height: 17vh;
    margin-bottom: -6em;
    align-content: center;
    z-index: 3;
    background-image: url(/image/prakerja-card.svg);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: bottom;
    align-items: flex-end;
    padding: 1em;
`;

const Title = styled.h1`
    font-size: 0.8125em;
    font-weight: 600;
`;

const Stats = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5em;
    p{
        text-align: left;
        font-size: 0.75em;
        font-weight: 500;
    }
`;

const InitPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: -1.5em;
`;

const Author = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5em;
    p{
        font-size: 0.7625em;
        font-weight: 600;
    }
`;

const From = styled.p`
    font-size: 0.7625em;
    font-weight: 600;
    color: #BABABB;
    text-decoration: line-through;
`;

const Saves = styled.p`
    font-size: 0.75em;
    font-weight: 500;
    color: #FE5C63;
`;

const Price = styled.p`
    font-size: 1.1875em;
    font-weight: 700;
    color: #1C1D20;
    text-align: center;
    margin-bottom: 0.5em;
`;

export const Button = styled(Link)`
    display: flex;
    align-items: center;
    border-radius: 0.5em;
    background: #FF5718;
    padding: 0.75em 1.75em;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    font-weight: 600;
    color: #FFFFFF;
    outline: none;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #FFFFFF;
        color: #FF5718;
        border: 1px solid #FF5718;
    }
`;

export const Info = styled.button`
    display: flex;
    align-items: center;
    border-radius: 1em;
    background: #FFF;
    padding: 0.75em 1.75em;
    align-items: center;
    justify-content: center;
    font-size: 0.6250em;
    font-weight: 500;
    color: #0264EC;
    outline: none;
    border: none;
    text-decoration: none;
`;

const CourseCard = (course) => {
    
  return (
    <Wrapper>
        <Card>
            <Info>Prakerja</Info>
        </Card>
        <Container>
            <Title>{course.course.title}</Title>
            <Stats>
                <img alt="logo" src="/image/Star.png" height="12em"/> 
                <p>{course.course.score}</p>
                <img alt="logo" src="/image/User.png" height="12em"/> 
                <p>{course.course.capacity}</p>
            </Stats>
            <Author>
                <img alt="logo" src="/image/Arkademi.png" height="15em"/> 
                <p>{course.course.author}</p>
            </Author>
            <InitPrice>
                <From>{course.course.initial}</From>
                <Saves>Hemat {course.course.save}</Saves>
            </InitPrice>
            <Price>{course.course.price}</Price>
            <Button to='/course'>Ambil Kelas</Button>
        </Container>
    </Wrapper>
    
  );
};
  
export default CourseCard;