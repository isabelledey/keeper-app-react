import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <footer>
        <h6>Copyright {currentYear}</h6>
        </footer>
    )
}

export default Footer;