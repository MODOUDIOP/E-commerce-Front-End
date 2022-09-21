

import Annoncement from "../compenents/annoncement";
import Navbar from "../compenents/Navbar";
import Footer from "../compenents/Footer";
import styled from "styled-components"


const Container = styled.div`
width: 99vw;
height: 100vh;

`;
const Wrapper = styled.div`
width: 25%;
padding: 20px;
margin-left:35%;
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
margin:  12px 2px ;
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
const Link = styled.a`
font-size: 12px;
text-decoration: underline;
margin:0px 10px;
cursor: pointer;


`;

const Login = () => {
  return (
    <Container>
      <Annoncement />
      <Navbar/>
          <Wrapper>
              <Title>S'IDENTIFIER</Title>
              <From>
                  <Input placeholder="Nom Utilisateur:" />
                  <Input  placeholder="Mot de passe:" />
                  <Button>Se Connecter</Button>
                  <Link to="Register">Mot de passe oublier</Link>
                  <Link to="Login">CREER UN NOUVEAU COMPTE</Link>
              </From>
      </Wrapper>  
      <Footer/>
    </Container>
  )
}

export default Login