import React from "react"
import NavBar from "../navbar/navbar";
import './homepage.css'
import boxImg from '../../assets/box-solid.svg'
import { NavLink } from "react-router-dom";

function HomePage () {

    return (
        <div>
            <NavBar />
            <div className="bookingContainer">
                <NavLink to="/booking"><h1>Je réserve</h1></NavLink>
                <img src={boxImg} alt='imagecasier' />
            </div>
        </div>
    )
}

export default HomePage;

