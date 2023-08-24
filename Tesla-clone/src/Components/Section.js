import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const Section = ({ title, leftBtn, btnRight, description, BackgroundImage }) => {
    return (
        <Wrap bgImage={BackgroundImage}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>

            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>{leftBtn}</LeftButton>
                        {btnRight && <RightButton>{btnRight}</RightButton>}
                    </ButtonGroup>
                </Fade>
                
                <DownArrow src={`/images/down-arrow.svg`} />
            </Buttons>
        </Wrap>
    )
}

export default Section
const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("/images/model-s.jpg");
    background-image: ${props => `url("/images/${props.bgImage}")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between ;
    align-items: center;

`
const ItemText = styled.div`
    padding-top: 9vh;
    z-index: -1;
    text-align: center;
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 8px;
    @media (max-width:768px){
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23, 26,32 ,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    border-radius: 100px;
    cursor: pointer;
    align-items: center;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    margin: 8px;


`
const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`
const Buttons = styled.div``

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    overflow-x :hidden;
    animation: animateDown infinite 1.5s;
`
