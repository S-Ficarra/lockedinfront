import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import './navbar.css'
import lockImg from '../../assets/png-clipart-padlock-computer-icons-padlock-technic-computer-icons.png'
import hamMenu from '../../assets/bars-solid.svg'

function NavBar () {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    

    return (
        <>
            <nav className="navbar">
                <div className="logoContainer">
                    <img src={lockImg} alt='logo'/>
                    <a href="/"><h1>LockedIn</h1></a>
                </div>
                <img src={hamMenu} alt='menu' onClick={toggleMenu}/>
            </nav>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <NavLink to="/profile">Mon Profil</NavLink>
                <NavLink to="/card">Ma Carte</NavLink>
                <NavLink to="/faqs">FAQs</NavLink>
                {/* <NavLink to="/settings">Paramètres</NavLink>*/}
                {/* <NavLink to="/claim">Signaler</NavLink>*/}
            </div>
        </>
    )


}

export default NavBar;