import React from "react"
import "./style.css";
import Logo from "../../assets/Logo.png"

export type FooterType = {
    className?: string;
};

const Footer: React.FC = () => {
    return (
        <div className="company_info">
            <img className="Logo_img" alt="Logo da marca Ratings" src={Logo} />
            <div className="company_links">
                <div className="company_parent">
                    <div className="company">COMPANY</div>
                    <a className="about_us">About Us</a>
                    <div className="partnerships">Partnerships</div>
                    <a className="faq">FAQ</a>
                </div>
                <div className="company_parent">
                    <div className="company">COMPANY</div>
                    <a className="about_us">About Us</a>
                    <div className="partnerships">Partnerships</div>
                    <a className="faq">FAQ</a>
                </div>
                <div className="company_parent">
                    <a className="company">COMPANY</a>
                    <a className="about_us">About Us</a>
                    <div className="partnerships">Partnerships</div>
                    <a className="faq">FAQ</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;