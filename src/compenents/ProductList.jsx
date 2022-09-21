import styled from "styled-components"
import Navbar from "../compenents/Navbar";
import Annoncement from "./annoncement";
import Products from "../compenents/Products";
import Newsletter from "../compenents/Newsletter";
import Footer from "../compenents/Footer";

const Container = styled.div``;
const Title = styled.h1`
margin: 20px;
`;
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`;
const Filter = styled.div`
margin: 20px;
`;
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
`;
const Select = styled.select`
padding: 10px;
margin-right: 20px;
`;
const Option = styled.option``;
const ProductList = () => {
  return (
      <Container>
            <Annoncement/> 
          <Navbar />
          <Title>PIGEONS</Title>
          <FilterContainer>
        <Filter>
          <FilterText>Filter Sujets:</FilterText>
          <Select>
            <Option disabled selected>
              Races de Pigeon
            </Option>
            <Option>Beauté Almand</Option>
            <Option>Voyageur</Option>
            <Option>King</Option>
            <Option>Mondain</Option>
            <Option>Lahore</Option>
            <Option>Boulan</Option>
             <Option>Texan</Option>
          </Select>
        </Filter>
           
        <Filter>
          <FilterText>Tries Couleur:</FilterText>
          <Select>
            <Option disabled selected>
              Couleur
            </Option>
            <Option>Bleu-barre</Option>
            <Option>Rouge</Option>
            <Option>Noir</Option>
            <Option>Rouge-cendre</Option>
            <Option>Jaune</Option>
            <Option>Grison</Option>
             <Option>Ecaille</Option>
          </Select>
        </Filter> 
        <Filter>
          <FilterText>sort products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>prise (asc)</Option>
             <Option>prise(desc)</Option>
        </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer/>
    </Container>
  )
}

export default ProductList