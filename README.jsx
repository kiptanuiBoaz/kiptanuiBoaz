import React from "react";
import "./footer.css"

function Footer(){
    return(
        <div style={{ text-align: "left";
    background-color:"#181f24";
    height: "2cm";
    margin-top: "-40px";
    padding-top:"30px";}}>
            <p>Copyright ©{new Date().getFullYear()} || Developed by Kiptanui Boaz </p>
        </div>
    )
}

export default Footer;
