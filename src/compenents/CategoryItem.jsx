
import { Link } from "react-router-dom";
import styled from "styled-components"


const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position:relative;

`
;
const Image = styled.img`
width: 100%;
object-fit: cover;


`;
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items:center;
justify-content:center;
`;
const Title = styled.h1`
color: white;
margin-bottom: 20px;
`;
const Prix = styled.h1`
color:white;
`;
const Button = styled.button`
border: none;
padding: 10px;
background-color: #74BBE4;
color: black;
font-size: 20px;
cursor: pointer;
`;



const CategoryItem = (
    {item}) => {
    
  return (
    <Container>
   
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>  
          <Prix>{item.prix}</Prix>
          <Button><Link to="ProductList">SHOW NOW</Link></Button>
        </Info>
        
     
    
    </Container>
  )
}

export default CategoryItem