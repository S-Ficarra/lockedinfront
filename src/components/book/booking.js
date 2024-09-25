import React from "react";
import './booking.css'
import NavBar from "../navbar/navbar";

function Booking () {

    return (
        <>
            <NavBar />
            <h1 className="bookH1">Je réserve</h1>

            <form className="bookForm">
                <button>Toute la journée</button>
                <button>Jusqu'à :</button>
                <input type="time"></input>
                <button type="submit">Envoyer</button>
            </form>
        
        </>
    )
}

export default Booking;