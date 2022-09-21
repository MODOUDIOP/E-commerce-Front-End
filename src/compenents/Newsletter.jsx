import {Send} from "@material-ui/icons"
import styled from "styled-components"
const Container = styled.div`
height: 60vh;
background-color: black;
display:flex;
align-items:center;
justify-content:center;
flex-direction: column;
`;
const Title = styled.h1`
font-size: 30px;
margin-bottom: 20px;
color:white;
`;
const Desc = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
color:white;
`;
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display:flex;
justify-content: space-between;
border: 1px solid white;


`;
const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
`;
const Button = styled.button`
flex: 1;
border:none;
background-color:black;
color: white;
`;
const Newsletter = () => {
  return (
      <Container>
          <Title>NOUVEAU SUR GETT-GUI?</Title>  
          <Desc>Inscrivez-vous à nos communications pour recevoir nos meilleures offres</Desc>
          <InputContainer>
              <Input  placeholder="Entrer votre email svp"/>
              <Button>
                  <Send/>
              </Button>
          </InputContainer>
    </Container>
  )
}

export default Newsletter