

import { Badge } from '@material-ui/core';
import {ShoppingCartOutlined} from '@material-ui/icons'
import { Search } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const Container = styled.div`
height:100px;
width:100%;
background-color:black;

`;
const Wrapper = styled.div`
padding: 10px 20px;
color: white;
display: flex;
align-items: Center;
justify-content: space-between;

`;



const Left = styled.div`
flex: 1;
font-size:30px;

`;
const Center = styled.div`
flex: 1;
display:flex;
align-items:Center;


`;
const Rigth = styled.div`
flex: 1;
display:flex;
align-items:Center;
justify-content: flex-end;

`;
const MenuItem = styled.div`
font-size: 12px;
cursor: pointer;
margin-left: 25px;


`;
const Categorie = styled.span`
font-size:25px;
cursor: pointer;

`;
const SeachConaiter = styled.div`
border: 1px solid #74BBE4;
display:flex;
align-items: Center;
margin-left: 25px;
padding: 5px;
width: 50%;

`;
const Input = styled.input`
border: none;
padding: 5px;
flex: 8;
border-radius: 15px;
height: 30px;




`;
const Logo = styled.h1`
font-weigth: bold;


`


const Navbar = () => {
  return (
   <Container>
   <Wrapper>
        <Left><Logo/><Link  to="/"> GUETT-GUI</Link></Left>
        <Center>
            <Categorie><Link to="CategoryItem">Catégorie</Link></Categorie>
            <SeachConaiter>
                <Input/>
                <Search />
            </SeachConaiter>
        </Center>
        <Rigth>
          <MenuItem>VENDEUR</MenuItem>
          <MenuItem><Link to="Register">Creer Compte</Link></MenuItem>
          <MenuItem><Link to="Login">S'IDENTIFIER</Link></MenuItem>
          <MenuItem >
            <Badge badgeContent={2} color="primary">
                < ShoppingCartOutlined/>
            </Badge>
          </MenuItem>  
        </Rigth>
    </Wrapper>
   </Container>
  )
}

export default Navbar;