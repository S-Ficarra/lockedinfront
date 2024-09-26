import React, { useEffect, useState } from "react";
import NavBar from "../navbar/navbar";
import './homepage.css';
import boxImg from '../../assets/box-solid.svg';
import { NavLink } from "react-router-dom";
import { lockerService } from "../../services/locker.service.js";

function HomePage() {
    const [availableLockers, setAvailableLockers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLockers = async () => {
            try {

                const data = await lockerService.fetchAvailableLockers(); 
                
                setAvailableLockers(data);
                setLoading(false);
            } catch (err) {
                setError("Erreur lors de la récupération des casiers.");
            }
        };

        fetchLockers();
    }, []);

    return (
        <div>
            <NavBar />
            <div className="bookingContainer">
                {loading && <p>Chargement des casiers...</p>}
                {error && <p>{error}</p>}
                {availableLockers && availableLockers.length > 0 ? (
                    <>
                        <NavLink to="/booking"><h1>Je réserve</h1></NavLink>
                        <img src={boxImg} alt='imagecasier' />
                    </>
                ) : (
                    <p>Aucun casier disponible.</p> 
                )}
            </div>
        </div>
    );
}

export default HomePage;
