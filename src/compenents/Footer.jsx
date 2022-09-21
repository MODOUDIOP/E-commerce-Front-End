import styled from "styled-components"
import { Facebook, Instagram, Twitter, LinkedIn } from "@material-ui/icons"
import {Room, Phone, MailOutline} from "@material-ui/icons"
import ScrollButton from "./ScrollButton";

const Container = styled.div`
display: flex;
background-color: #74BBE4;
`;
const Logo = styled.h1`
color: black;
font-size:30px;
`;

const Desc = styled.p`
margin: 20px 0px;
color: black;

`;

const SocialContainer = styled.div`
display: flex;

`;

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius:50%;
color: black;
background-color: #${props=>props.color}
display-flex;
align-items: center;
justify-content: center;


`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
font-size: 20px;

`;
const Center = styled.div`
padding: 20px;
flex: 1;
`;
const Title = styled.h3`
color: black;
margin-bottom:30px;
font-size: 20px;
`;
const List = styled.ul`
color: black;
font-size: 20px;
margin: 0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`;
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;

const Right = styled.div`
flex: 1;
padding: 20px;
font-size: 20px;
`;
const ContanctItem = styled.div`
color: black;
display: flex;
align-items: center;
margin-bottom: 13px;
`;
const Tilte = styled.h1`
color: black;
font-size: 25px;
`;


const Footer = () => {
  return (
      <Container>
          <Left>
              <Logo>GUETT-GUI.</Logo>
              <Desc>
                  Site E-commerce pour la vente en ligne des<br></br> animeaux domestique.<br></br> Disponible 24h/24h

              </Desc>
              <SocialContainer>
                  <SocialIcon color="3b5998">
                    <Facebook/>  
                  </SocialIcon>
                  <SocialIcon color="405DE6">
                    <Instagram/>  
                  </SocialIcon>
                  <SocialIcon color="1DA1F2">
                    <Twitter/>  
                  </SocialIcon>
                  <SocialIcon color="0077b5">
                    <LinkedIn/>  
                  </SocialIcon>
              </SocialContainer>
          </Left>
          <Center>
              <Title>Fonctionnement des liens</Title> 
              <List>
                  <ListItem>Mouton</ListItem>
                  <ListItem>Dinde</ListItem>
                  <ListItem>Canard</ListItem>
                  <ListItem>Lapin</ListItem>  
                  <ListItem>Vache</ListItem> 
                  <ListItem>Mouton</ListItem> 
                  <ListItem>Pigeon</ListItem> 
                  <ListItem>Suivi de Commande</ListItem> 
                  <ListItem>Mon Compte</ListItem> 
                   <ListItem>Liste de souhaits</ListItem> 
              </List>
          </Center>
           <Right>
              <Tilte>Contact</Tilte>
              <ContanctItem>
             <Room style={{marginRight:"10px"}}/>   Senegal/dakar/yeumbeul  
              </ContanctItem>
              <ContanctItem>
              <Phone style={{marginRight:"10px"}}/>  +221 77 506 81 00  
              </ContanctItem>
              <ContanctItem>
              <MailOutline style={{marginRight:"10px"}}/> diopdev1133@gmail.com   
              </ContanctItem>
             
      </Right>
       <ScrollButton/>
    </Container>
  )
}

export default Footer