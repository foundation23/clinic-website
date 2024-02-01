import React from 'react';
import "./footer.css"
import Navbar from "../../assets/Navbar";
import SortSvg from "../../assets/SortSvg";

const Footer = () => {
    return (
        <footer >
            <div className="footer container">
                <div className="footer__logo">
                    <SortSvg name="logo" color="white"/>
                </div>
                <div className="footer__nav">
                    <SortSvg name="logo" color="white"/>
                    <Navbar/>
                </div>
                <div className="footer__soc">
                    <SortSvg name="inst"/>
                    <SortSvg name="whatsapp-footer"/>
                    <SortSvg name="telegram"/>
                </div>
            </div>

        </footer>
    );
};

export default Footer;