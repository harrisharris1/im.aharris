import React from 'react';
import "./styles/intro.css"
import Intro from "./components/intro";
import styled from "styled-components";




function App() {
  return (
    <MainWrapper>
       <Intro/>
    </MainWrapper>
  
    
     
    
  );
}

export default App;

const MainWrapper = styled.div
`

height: 800vh;
width:100%;


`