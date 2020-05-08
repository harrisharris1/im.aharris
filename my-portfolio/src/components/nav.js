import React from "react";
import logo from "../images/cartoon-me2.png";
import linkedin from "../images/circle-linkedin.png";
import twitter from "../images/circle-twitter.png";
import "../styles/nav.css";



const Nav =() => {
    return (

        <div id="logo">
            <img src={logo} width="100" height="100" alt="cartoon of myself"></img>
            <div class="icons">
            <img src={linkedin} width="50" height="50" alt="linked in icon"></img>
            <img src={twitter} width="50" height="50" alt="linked in icon"></img>
            </div>
        </div>
       
    )
}

export default Nav;