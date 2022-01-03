import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    gap: 1em;
    padding: 1.5em;
    border-radius: 20px;
    border: 1px solid #f2f2f2;
    background-color: #fff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
    box-sizing: border-box;
    height: 100%;
`;

function ShadowedCard() {
    return (
        <Wrapper className="Card">
            <slot/>
        </Wrapper>
    );
}

export default ShadowedCard;