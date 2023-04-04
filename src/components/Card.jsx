import React from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: white;
    border-radius : 7px;
    width: 270px;
    height:450px;
    display: flex;
    flex-direction : column;
    overflow: hidden
`

const Title = styled.h1`
    font-size: 1.4rem;
    font-family: Helvetica, sans-serif;
    color: black;
    margin: 0.8rem auto;
`

const Description = styled.p`
    font-size: 0.8rem;
    font-family: roboto, sans-serif;
    color: #888888;
    text-align: left;
    margin: 0.5rem 1rem;
    margin-top: 0;
    line-height: 1.2rem
`

const SubTitle = styled.h2`
font-size: 0.9rem;
font-family: Helvetica, sans-serif;
color: #555555;
margin: 0.4rem 1rem;
text-align: ${props => props.left? "left" : "center"};
`

const BottomCard = styled(Container)`
background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.5)), url("src/assets/cherry-blossom-g7b40643fc_640.jpg");
background-size: cover;
margin: 0.5rem auto;
height: 50px;
width: 90%;
box-shadow:  1px 3px 5px 1px  rgba(0,0,0,0.5) ;
`

const KeyWordsDiv = styled.div`
display:flex;
gap:0.2rem;
margin:0.5rem 1rem;
`

const KeyWordButton = styled.button`
padding: 0.2rem 0.6rem;
font-size: 0.7rem;
color:black;
background-color: ${props => props.color};
`

const keyWords = [
    {word: "Flower",
    color: "#F1D37E"}, 
    {word: "Sakura",
    color: "#FCD3DE"}, 
    {word: "Japan",
    color: "#72A1E5"},
    {word: "tree",
    color: "#97DB95"}
]

const Card = () => {
return(
    <Container> 
        <img src="src\assets\cherry-blossom-g7b40643fc_640.jpg"  />
        <Title>Cherry Flower</Title>
        <Description>Les sakura, qui désignent les cerisiers à fleurs ainsi que leurs fleurs, sont fêtés lors du Hanami. Les japonais leur associent toute une symbolique !</Description>
        <SubTitle left>Key Words</SubTitle>
        <KeyWordsDiv>
            {keyWords.map((el) => {
            return(
                <KeyWordButton color = {el.color}>{el.word}</KeyWordButton>
            )
        })}
        </KeyWordsDiv>
        
        <BottomCard>
            <SubTitle>A découvrir aussi</SubTitle>
        </BottomCard>
        
    </Container>
)};

export default Card