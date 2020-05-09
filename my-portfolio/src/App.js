import React from 'react';
import "./styles/intro.css"
import Intro from "./components/intro";
import styled from "styled-components";
import './App.css';
import About from "./components/about-me";




function App() {
  return (
    <MainWrapper>
       <Intro/>
       <About/>
    </MainWrapper>
  
    
     
    
  );
}

export default App;

const MainWrapper = styled.div
`

height: 800vh;
min-width:1300px;


`