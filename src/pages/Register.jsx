import styled from "styled-components"
import Annoncement from "../compenents/annoncement";
import Navbar from "../compenents/Navbar";
import Footer from "../compenents/Footer";



const Container = styled.div`
width: 99vw;
height: 100vh;


`;
const Wrapper = styled.div`
width: 40%;
padding: 20px;
margin-left:28%;
margin-top:25px;
margin-Bottom:25px;
background-color: #74BBE4;
`;
const From = styled.form`
display: flex;
flex-wrap: wrap;
`;
const Title = styled.h1`
font-size: 24px;

`;
const Input = styled.input`
flex: 1;
min-width:40%;
margin: 20px 10px 0px 0px;
padding: 10px;
top:20px;
`;

const Button = styled.button`
width: 40%;
border:none;
padding: 15px 20px;
background-color: black;
color: white;
cursor:pointer; 
margin-top:15px;
margin-left: 30%;
&:hover{
    background-color:teal;
}

`;


const Register = () => {
  return (
    <Container>
      <Annoncement />
      <Navbar/>
     
      <Wrapper>
     
              <Title>CREER UN COMPTE</Title>
              <From>
                  <Input placeholder="Nom:" />
                  <Input  placeholder="Prenom:" />
                    <Input  placeholder="Nom Utilisateur:"/>
                  <Input  placeholder="Email:" />
                  <Input  placeholder="Mot de passe:" />
                  <Input  placeholder="Confirmer mot de passe:" />
                
                  <Button>Creer</Button>
              </From>
      </Wrapper>    
       <Footer/>
    </Container>
  )
}

export default Register