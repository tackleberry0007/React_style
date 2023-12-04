import React from 'react';
import styled from 'styled-components';
import img from './img/img.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

<script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"crossorigin></script>


const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const Navbar = styled.nav`
  background-color: #F75D59;
  color: #fff;
  padding: 10px;
  text-align: center;
  
`;

const Slider = styled.div`
  max-width: 100%;
  overflow: hidden;
  margin: 20px 0;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  margin: 100px auto;
`;

const Card = styled.div`

  flex: 0 0 calc(25% - 20px);
  margin: 10px;
  padding: 15px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
    background-color:#C2E5D3;
  }
`;


const Feedback = styled.div`
  max-width: 1000px;
  margin: 40px auto;
  padding: 40px;
  background-color: #C2E5D3;
  border-radius: 8px;
`;

const Suggestion = styled.div`
  max-width:1000px;
  max-height:800px;
  margin: 20px auto;
  padding: 100px 100px;
  background-color: #93FFE8;
  border-radius: 8px;
 
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
`;

const App = () => {
  return (
    <Container>
      <Navbar>
        <h1>Footear    Shopping    Website </h1>
       
      </Navbar>

      <Slider >
    
        <img src={img}alt="Slider Image" className='fluid' />
      
      </Slider>

      <CardContainer>
     
        {[1, 2, 3, 4,5,6,7,8,9,10].map((cardNumber) => (
          <Card key={cardNumber}>
            
            <h2>Thunder Bold {cardNumber}</h2>
            <p>Built for runner {cardNumber}.</p>
            <p>1999</p>
          </Card>
        ))}
      </CardContainer>

      <Feedback>
        <h2>Customer Feedback</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod justo vitae justo bibendum, vel iaculis dui congue...</p>
      </Feedback>

      <Suggestion>
        <h2>Other Product Suggestions</h2>
       
      </Suggestion>

      <Footer>
        <nav>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </nav>
        &copy; 2023 Footwear Shopping Website. All rights reserved.
      </Footer>
    </Container>
  );
};

export default App;


