import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import Annoncement from "../compenents/annoncement";
import Footer from "../compenents/Footer";
import Navbar from "../compenents/Navbar";

const Container = styled.div``;
const Wrapper = styled.div`
padding: 20px;
`;
const Title = styled.h1`
text-align: center;
`;
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;
const TopButton = styled.button`
padding: 10px;
cursor: pointer;
border:${props=>props.type ==="filled" && "none"}

`;
const TopTexts = styled.div``;
const TopText = styled.span`
text-decoration: underline;
cursor:pointer;
margin:0px 10px;
`;
const Bottom = styled.div`
display: flex;
justify-content:space-between;
`;
const Info = styled.div`
flex:3;
`;
const Product = styled.div`
display:flex;
justify-content: space-between;
`;
const ProductDetail = styled.div`
flex: 2;
display: flex;
`;
const Image = styled.img`
200px;
`;
const Details = styled.div`
padding:20px;
display:flex;
flex-direction: column;
justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color}
`;
const PriseDetail = styled.div`
flex:1;
display: flex;
align-items:center;
justify-content: center;
flex-direction: column;
`;
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
`;
const ProductAmount = styled.div`
font-size: 35px;
margin: 5px;
`;
const ProductPrise = styled.div`
font-size: 30px;
font-weight: 200;
`;
const Hr = styled.hr`
background-color: blue;
border: none;
height: 1px;
`;

const Summary = styled.div`;
flex:1;
border: 0.5px solid blue;
border-radius: 10px;
padding: 20px;
height: 50vh;


`;
const SummartItemTilte = styled.h1`
font-weight: 200;
`;
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24px"};
`;
const SummartItemText = styled.span``;
const SummartItemPrise = styled.span``;
const Button = styled.button`
width: 100%;
padding: 10px;
background-color: blue;
color: white;
border: none;
font-size: 20px;
`;

const Cart = () => {
  return (
      <Container>
          <Annoncement />
          <Navbar />
          <Wrapper>
              <Title>NoS SUJETS</Title>
              <Top>
                  <TopButton>CONTINUER VOS ACHETER</TopButton>
                 
                  <TopTexts>
                        <TopText>PIGEONS COMMERCIAL(3)</TopText>
                      <TopText>VOTRE LISTE DE SOUHAITS(0)</TopText>
                  </TopTexts>
                   <TopButton type="filled">PASSER A LA CAISSE</TopButton>
              </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="mouton01-removebg-preview.png" />
                <Details>
                  <ProductName><b>Sujet:</b> Mouton ladoum</ProductName> <br></br>
                  <ProductId><b>ID:</b> 0001133</ProductId> <br></br>
                  <ProductColor color="black"/>
                  
                </Details>
              </ProductDetail>
              <PriseDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                  
                </ProductAmountContainer> 
                 <ProductPrise> 35.000 FCFA</ProductPrise>
              </PriseDetail>
            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
                <Image src="boulan-removebg-preview (1).png" />
                <Details>
                  <ProductName><b>Sujet:</b> Boulan Pamaranie</ProductName> <br></br>
                  <ProductId><b>ID:</b> 0001133</ProductId> <br></br>
                  <ProductColor color="red"/>
                  
                </Details>
              </ProductDetail>
              <PriseDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                  
                </ProductAmountContainer> 
                 <ProductPrise>35.000 FCFA</ProductPrise>
              </PriseDetail>
            </Product>
          </Info>
          <Summary>
            <SummartItemTilte>Commande en cours</SummartItemTilte>
            <SummaryItem>
              <SummartItemText>Total Commander</SummartItemText>
              <SummartItemPrise>230.0000 FCFA</SummartItemPrise>
            </SummaryItem>

           
            <SummaryItem>
              <SummartItemText>Frais de livraisons estimes</SummartItemText>
              <SummartItemPrise> 2.000 FCFA</SummartItemPrise>
            </SummaryItem> 

            
            <SummaryItem type="total">
              <SummartItemText > Total</SummartItemText>
              <SummartItemPrise> .000 FCFA</SummartItemPrise>
            </SummaryItem> 
            <Button>Passer a la panier</Button>
          </Summary>
          
          
            
        
              </Bottom>
          </Wrapper>
          <Footer/>
    </Container>
  )
}

export default Cart