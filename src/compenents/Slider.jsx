
import React from 'react'
import styled from 'styled-components'
import {ArrowLeftOutlined } from "@material-ui/icons"
import {ArrowRightOutlined} from "@material-ui/icons"
import {sliderItems} from "../data"
import { useState } from 'react'
const Container = styled.div`
width: 100%;
height: 100vh;
display:flex;
background-color: white;
position: relative;
overflow: hidden;


`;
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: white;
border-radius: 50%;
display:flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0px;

bottom: 0;
margin: auto;
left: ${props=>props.direction === "left" && "10px"};
right: ${props=>props.direction === "right" && "10px"};
cursor: pointer;
opacity: 0.5;
z-index: 2;
`;
const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform:translateX(${props=>props.slideIndex * -100}vw);


`;
const  Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items:center;
background-color:#${props=>props.bg};


`;
const  ImgContainer = styled.div`
height: 100vh;

flex:1;

`;
const Title = styled.h1`
font-size: 70px;
`;
const Desc = styled.p`margin: 50px 0px;
font-size: 25px;
font-weight: 500;
left-spacing: 3px;
`;
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color:transparent;
cursor: pointer;
`;

const  InfoContainer = styled.div`
flex:1;
padding: 50px;
`;
const Image = styled.img`
height: 80%;
`;
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState (0);
    const handleClick = (direction) =>{
       if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2 )
       }else{
        setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0 )
       }
    };
  return (
    <Container>
    <Arrow direction ="left" onClick={()=>handleClick("left")}>
      <ArrowLeftOutlined/>  
     
    </Arrow>
    <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item=>(
            <Slide bg={item.bg}>
    <ImgContainer>
              <Image src={item.img} key={ item.id} />
    </ImgContainer>
    <InfoContainer>
        <Title>{item.title}</Title>
        <Desc>{item.desc}</Desc>
        <Button>SHOW NOW</Button>
    </InfoContainer>
    </Slide>
        ))} 
    
    </Wrapper>

    <Arrow direction ="right" onClick={()=>handleClick("right")}>
      <ArrowRightOutlined/>  
      
    </Arrow>
    
   
    </Container>
  )
}

export default Slider;
