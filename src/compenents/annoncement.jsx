import styled from "styled-components"
const Container = styled.div`
height: 30px;
width: 100%;
background-color: #74BBE4;
color: black;
display: flex;
align-items:center;
justify-content: center;
font-size: 28px;


`
const Annoncement = () => {
  return (
    <Container>
       
    <marquee behavior="alternate" direction="up" width="80%">
	    <marquee direction="right" behavior="alternate"> BIENVENUE CHEZ GUETT-GUI  Site E-commerce disponible de 24h/24 APPELEZ AU 77 506 81 00</marquee>
    </marquee>
    </Container>
  ) 
}

export default Annoncement