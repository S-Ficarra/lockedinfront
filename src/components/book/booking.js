import React, { useState } from "react";
import './booking.css';
import NavBar from "../navbar/navbar";
import { userService } from "../../services/user.service";

function Booking() {
    const [selectedButton, setSelectedButton] = useState(null);
    const [studentId, setStudentId] = useState(''); // État pour l'identifiant étudiant
    const [selectedTime, setSelectedTime] = useState(''); // État pour l'heure sélectionnée
    const [error, setError] = useState(null); // État pour les erreurs potentielles
    const [successMessage, setSuccessMessage] = useState(''); // État pour le message de succès

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName); // Met à jour l'état pour le bouton sélectionné
    };

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value); // Met à jour l'état pour l'heure sélectionnée
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Empêche le rechargement de la page

        if (selectedButton === 'allDay') {
            // Si "Toute la journée" est sélectionné, on envoie uniquement l'identifiant étudiant
            try {
                await userService.bookLocker({ studentId });
                setSuccessMessage("Réservation effectuée pour toute la journée !"); // Message de succès
                setError(null); // Réinitialise l'erreur
            } catch (err) {
                setError(err.message); // Gère l'erreur
                setSuccessMessage(''); // Réinitialise le message de succès
            }
        } else if (selectedButton === 'until' && selectedTime) {
            // Si "Jusqu'à" est sélectionné, on envoie l'identifiant étudiant avec la date et l'heure
            const currentDate = new Date(); // Obtenir la date actuelle
            
            // Formatage de la date et de l'heure au format "YYYY/MM/DD HH:mm:ss"
            const formattedDate = `${currentDate.getFullYear()}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getDate().toString().padStart(2, '0')} ${selectedTime}:00`;

            const bookingData = {
                studentId,
                endTime: formattedDate // Utiliser la clé endTime avec la date formatée
            };

            try {
                await userService.bookLocker(bookingData);
                setSuccessMessage("Réservation effectuée jusqu'à " + selectedTime + " !"); // Message de succès
                setError(null); // Réinitialise l'erreur
            } catch (err) {
                setError(err.message); // Gère l'erreur
                setSuccessMessage(''); // Réinitialise le message de succès
            }
        }
    };

    return (
        <>
            <NavBar />
            <h1 className="bookH1">Je réserve</h1>

            <form className="bookForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Identifiant étudiant"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)} // Met à jour l'état de studentId
                    required // Champ requis
                />

                <button
                    type="button"
                    className={selectedButton === 'allDay' ? 'selected' : ''}
                    onClick={() => handleButtonClick('allDay')}
                >
                    Toute la journée
                </button>

                <button
                    type="button"
                    className={selectedButton === 'until' ? 'selected' : ''}
                    onClick={() => handleButtonClick('until')}
                >
                    Jusqu'à :
                </button>
                {selectedButton === 'until' && (
                    <>
                        <input
                            type="time"
                            value={selectedTime}
                            onChange={handleTimeChange} // Gère le changement de l'heure
                            required // Champ requis
                        />
                    </>
                )}
                <button type="submit">Envoyer</button>

                {error && <p className="error">{error}</p>} {/* Message d'erreur */}
                {successMessage && <p className="success">{successMessage}</p>} {/* Message de succès */}
            </form>
        </>
    );
}

export default Booking;
