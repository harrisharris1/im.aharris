import React from "react";
import styled , {keyframes} from "styled-components";
import "../styles/greeting.css";
import {bounce} from "react-animations";
import {DownOutlined} from "@ant-design/icons";





const Gretting =()=>{
    return(
        <Bounce>
          <h1>Hola! <br>
          </br>I'm Andrea Harris</h1>

          <DownOutlined />

        </Bounce>
    )
}

export default Gretting;

const Bounce = styled.div
`
animation: 4s ${keyframes `${bounce}`} infinite;
color:white;
text-align:center;
margin-top: -5%;
font-size:45px;
font-weight:800;


`