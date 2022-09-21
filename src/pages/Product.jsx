import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import Annoncement from "../compenents/annoncement";
import Footer from "../compenents/Footer";
import Navbar from "../compenents/Navbar";
import Newsletter from "../compenents/Newsletter";

const Container = styled.div``;
const Wrapper = styled.div`
padding: 50px;
display: flex;
`;
const ImgContainer = styled.div`
flex: 1;
`;
const Image = styled.img`
width: 70%;
height: 90%;
object-fit: cover;
`;
const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
`;
const Tilte = styled.h1``;
const Desc = styled.p`
margin: 20px 0px;
`;
const Prix = styled.span`
font-size: 35px;
`;
const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;

`;
const Filter = styled.div`
display:flex;
align-items: center;
`;
const FilterTitle = styled.span`
font-size: 20px;
`;
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`;
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
margin: 0px 5px;
cursor: pointer;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;

`;
const AmountContainer = styled.div`
display: flex;
align-items: center;
`;
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid black;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;

`;
const Button = styled.button`
padding: 15px;
border: 2px solid black;
background-color: white;
cursor: pointer;
&:hover{
    background-color:blue;
}
`;

const Product = () => {
  return (
      <Container>
           <Annoncement />
          <Navbar /> 
          <Wrapper>
              <ImgContainer>
                <Image src ="pigeon1.png"/>  
              </ImgContainer> 
              <InfoContainer>
                  <Tilte>Vache</Tilte> 
                  <Desc>Vache Africaine</Desc>
                  <Prix>2.500.000.000FCFA</Prix>
                  <FilterContainer>
                      <Filter>
                          <FilterTitle>Couleur</FilterTitle>  
                          <FilterColor color="blue" />
                          <FilterColor  color="red"/>
                          <FilterColor  color="yellow"/>
                          <FilterColor  color="black"/>
                         
                      </Filter>  
                      <Filter>
                          <FilterTitle>Race</FilterTitle>
                          <FilterSize>
                              <FilterSizeOption>Beaute Almand</FilterSizeOption>
                              <FilterSizeOption>Voyageur</FilterSizeOption>
                              <FilterSizeOption>Lahore</FilterSizeOption>
                              <FilterSizeOption>Mondain</FilterSizeOption>
                              <FilterSizeOption>King</FilterSizeOption>
                               <FilterSizeOption>Texan</FilterSizeOption>
                          </FilterSize>
                      </Filter>
                  </FilterContainer>
                  <AddContainer>
                      <AmountContainer>
                          <Remove /> 
                    <Amount>1</Amount>      
                       <Add/>   
                      </AmountContainer> 
                    <Button>Ajouter</Button>  
                  </AddContainer>
           </InfoContainer>   
          </Wrapper>
          <Newsletter />
          <Footer/>
    </Container>
  )
}

export default Product