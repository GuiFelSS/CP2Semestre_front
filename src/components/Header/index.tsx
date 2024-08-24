import React from "react"
import "./style.css"
import Logo from "../../assets/Logo.png"
import Burger_icon from "../../assets/hamburger.png"
import Lupa_icon from "../../assets/lupa__icon.png"

const Header: React.FC = () => {
    return (
        <header className={"mavismep"}>
            <img className="Logo_img" loading="lazy" alt="" src={Logo}/>
            <div className="ask-aiko">
                <img className="fi-br-menu-burger-icon" loading="lazy" alt="" src={Burger_icon}/>
                <a className="menu">Menu</a>
            </div>
            <button className="separator">
                <img className="fi-bs-search-icon" alt="" src={Lupa_icon}/>
                <a className="search">Search</a>
            </button>
            <button className="login-wrapper">
                <a className="login">Login</a>
            </button>
        </header>
    )
}

export default Header
