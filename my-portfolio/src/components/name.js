import React from "react";
import "../styles/name.css";
import me from "../images/selfie.png";


const Name =() => {
    return(
        
        <div id="about-section">
            <div class="name">
                <h2> I'm <br>
                </br><strong>Andrea Harris</strong></h2>
                <p class="about-p">A Front End Developer<br>
                </br> who graduated from Lambda School.<br>
                </br>I love bringing awesome design to life with code!</p>
            </div>
            <section id="myself">
                <img src={me} width="300" height="300" alt="image of andrea"></img>
            </section>

        </div>

    )
}

export default Name;
