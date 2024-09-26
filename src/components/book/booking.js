import React, { useState } from "react";
import './booking.css'
import NavBar from "../navbar/navbar";

function Booking () {

    const userId = 1

    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonName) => {
      setSelectedButton(buttonName); // Mettre à jour l'état pour le bouton sélectionné
    };


    return (
        <>
            <NavBar />
            <h1 className="bookH1">Je réserve</h1>

            <form className="bookForm">
            <button
                type="button"
                className={selectedButton === 'allDay' ? 'selected' : ''}
                onClick={() => handleButtonClick('allDay')}
            >Toute la journée</button>

            <button
                type="button"
                className={selectedButton === 'until' ? 'selected' : ''}
                onClick={() => handleButtonClick('until')}
            >Jusqu'à :</button>
            {selectedButton === 'until' && (
                <>
                <input type="time"></input>
                </>
            )}
            <button type="submit">Envoyer</button>

            </form>
        
        </>
    )
}

export default Booking;